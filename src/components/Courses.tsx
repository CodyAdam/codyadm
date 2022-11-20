type Course = {
  acronyme: string;
  title: string;
  description: string;
  hours: number;
  year: number;
  category: string;
};

const courses: Course[] = [
  {
    acronyme: 'MATH-101',
    title: 'Introduction to Computer Science',
    description: 'Introduction to Computer Science',
    hours: 43,
    year: 1,
    category: 'Mathematics',
  },
  {
    acronyme: 'MATH-102',
    title: 'Introduction to Computer Science',
    description: 'Introduction to Computer Science',
    hours: 34,
    year: 2,
    category: 'Mathematics',
  },
  {
    acronyme: 'ANGL-101',
    title: ' Introduction to English',
    description: ' Introduction to English',
    hours: 20,
    year: 1,
    category: 'Language',
  },
];

const maxHours = courses.reduce((max, course) => {
  return course.hours > max ? course.hours : max;
}, 0);

export function Courses() {
  return (
    <div className='w-full max-w-6xl px-10 flex flex-col '>
      <div className='w-full flex justify-center pb-5'>
        <div className='btn-group'>
          <input type='radio' name='options' data-title='all courses' className='btn w-24' />
          <input type='radio' name='options' data-title='2022' className='btn w-14' checked />
          <input type='radio' name='options' data-title='2021' className='btn w-14' />
          <input type='radio' name='options' data-title='2020' className='btn w-14' />
          <input type='radio' name='options' data-title='2019' className='btn w-14' />
          <input type='radio' name='options' data-title='2018' className='btn w-14' />
        </div>
      </div>
      {courses.map((course) => (
        <div tabIndex={0} key={course.acronyme} className='collapse collapse-arrow'>
          <input type='checkbox' className='peer' />
          <div className='collapse-title '>
            <Entry course={course} />
          </div>
          <div className='collapse-content flex flex-col gap-3'>
            {courses.map((course) => (
              <SubEntry course={course} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
function Entry({ course }: { course: Course }) {
  return (
    <div className='select-none flex gap-1 justify-center items-start sm:items-center flex-col sm:flex-row'>
      <h1 className='w-52 text-xl font-semibold font-display text-left uppercase'>{course.category}</h1>
      <div className='flex items-center justify-between relative bg-black/30 grow w-full h-16 p-1 pr-3 rounded-lg  border border-gray-800'>
        <div className='h-full bg-gradient-to-tr from-red-600 to-yellow-300  rounded w-1/2 border border-white shadow-inner flex justify-center glow-shadow'></div>
        <div className='text-neutral-focus'>
          <span className='font-semibold font-display text-xl text-primary'>{course.hours}</span> Hours
        </div>
      </div>
    </div>
  );
}
function SubEntry({ course }: { course: Course }) {
  return (
    <div className='select-none sm:pl-14 pl-8 pr-8 flex gap-1 justify-center items-start sm:items-center flex-col sm:flex-row'>
      <h1 className='w-40 text-sm font-medium text-left'>{course.title}</h1>
      <div className='flex items-center justify-between relative bg-black/30 grow w-full h-14 p-1 pr-3 rounded-lg  border border-gray-800'>
        <div className='bg-gradient-to-tr from-slate-700 to-slate-400 h-full rounded w-1/2 border border-white/30 shadow-inner flex justify-center'></div>
        <div className='text-neutral-focus'>
          <span className='font-semibold font-display text-md'>{course.hours}</span> Hours
        </div>
      </div>
    </div>
  );
}
