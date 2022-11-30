import { useEffect, useState } from 'react';
import { Category, Course, Semester, allCourses, year2019, year2020, year2021 } from '../courses';
import { CircleGroupButton } from './CircleGroupButton';

enum YearFilter {
  all = 'all courses',
  y2021 = '2021',
  y2020 = '2020',
  y2019 = '2019',
}

export function Courses() {
  const [year, setYear] = useState<YearFilter>(YearFilter.all);
  const [categories, setCategories] = useState<Category[]>(allCourses);
  const [max, setMax] = useState(categories.reduce((acc, category) => acc + category.hours, 0));

  useEffect(() => {
    let cat = allCourses;
    switch (year) {
      case YearFilter.y2019:
        cat = year2019;
        break;
      case YearFilter.y2020:
        cat = year2020;
        break;
      case YearFilter.y2021:
        cat = year2021;
        break;
      default:
        cat = allCourses;
    }
    setCategories(cat);
    setMax(cat.reduce((acc, category) => acc + category.hours, 0));
  }, [year]);

  return (
    <div className='w-full max-w-6xl px-5 flex flex-col '>
      <CircleGroupButton
        value={year === null ? 'all courses' : year.toString()}
        options={Object.values(YearFilter)}
        onChange={(value : YearFilter) => {
          let cat = allCourses;
          switch (value) {
            case YearFilter.y2019:
              cat = year2019;
              break;
            case YearFilter.y2020:
              cat = year2020;
              break;
            case YearFilter.y2021:
              cat = year2021;
              break;
            default:
              cat = allCourses;
          }
          
          setCategories(cat);
          setMax(cat.reduce((acc, category) => acc + category.hours, 0));
        }}
      />
      {categories.map((category) => (
        <div tabIndex={0} key={category.title} className='collapse collapse-arrow'>
          <input type='checkbox' className='peer' />
          <div className='collapse-title '>
            <Entry category={category} max={max} />
          </div>
          <div className='collapse-content flex flex-col gap-3'>
            {category.courses.map((course) => (
              <SubEntry key={course.acronyme + course.sem} course={course} max={category.hours} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
function Entry({ category, max }: { category: Category; max: number }) {
  return (
    <div className='select-none flex gap-1 justify-center items-start sm:items-center flex-col sm:flex-row appear'>
      <h1 className='w-52 text-xl font-semibold font-display text-left uppercase'>{category.title}</h1>
      <div className='flex items-center justify-between relative bg-black/30 grow w-full h-16 p-1 pr-3 rounded-lg  border border-neutral-focus  gap-4'>
        <div
          className='h-full bg-gradient-to-tr from-red-600 to-yellow-300  rounded border border-white shadow-inner flex justify-center glow-shadow transition-all duration-300'
          style={{ width: Math.round((category.hours / max) * 100) + '%' }}
        ></div>
        <div className='text-neutral-focus shrink-0'>
          <span className='font-semibold font-display text-xl text-primary'>{category.hours}</span> Hours
        </div>
      </div>
    </div>
  );
}
function SubEntry({ course, max }: { course: Course; max: number }) {
  return (
    <div className='select-none sm:pl-14 pl-8 pr-8 flex gap-1 justify-center items-start sm:items-center flex-col sm:flex-row'>
      <h1 className='w-40 text-sm font-medium text-left'>{course.title}</h1>
      <div className='flex items-center justify-between relative bg-black/30 grow w-full h-14 p-1 pr-3 rounded-lg  border border-neutral-focus gap-4'>
        <div
          className='bg-gradient-to-tr from-slate-800 to-slate-500 h-full rounded border border-white/30 shadow-inner flex justify-center transition-all duration-300'
          style={{ width: Math.round((course.hours / max) * 100) + '%' }}
        ></div>
        <div className='text-neutral-focus shrink-0'>
          <span className='font-semibold font-display text-md'>{course.hours}</span> Hours
        </div>
      </div>
    </div>
  );
}
