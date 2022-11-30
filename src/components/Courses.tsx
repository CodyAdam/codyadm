import { useEffect, useState } from 'react';
import { courses } from '../courses';
import { CircleGroupButton } from './CircleGroupButton';

export type Course = {
  acronyme: string;
  title: string;
  description?: string;
  hours: number;
  year: number;
  category: string;
};

export type Category = {
  title: string;
  hours: number;
  courses: Course[];
};


function getCategories(filterYear?: number | null) {
  const temp = [];
  // foreach course, add it to the coresponding category
  courses.forEach((course) => {
    if (filterYear && course.year !== filterYear) return;
    // find the category index
    const categoryIndex = temp.findIndex((category) => category.title === course.category);
    // if the category does not exist, create it
    if (categoryIndex === -1) {
      temp.push({
        title: course.category,
        hours: course.hours,
        courses: [course],
      });
    } else {
      // if the category exists, add the course to it
      temp[categoryIndex].courses.push(course);
      temp[categoryIndex].hours += course.hours;
    }
  });
  return temp;
}

export function Courses() {
  const [year, setYear] = useState<null | number>(null);
  const [categories, setCategories] = useState<Category[]>(getCategories(year));
  const [max, setMax] = useState(categories.reduce((acc, category) => acc + category.hours, 0));

  useEffect(() => {
    const cat = getCategories(year);
    setCategories(cat);
    setMax(cat.reduce((acc, category) => acc + category.hours, 0));
  }, [year]);

  return (
    <div className='w-full max-w-6xl px-5 flex flex-col '>
      <CircleGroupButton
        value={year === null ? 'all courses' : year.toString()}
        options={['all courses', '2022', '2021', '2020', '2019']}
        onChange={(value) => {
          setYear(value === 'all courses' ? null : parseInt(value));
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
              <SubEntry key={course.acronyme} course={course} max={category.hours} />
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
