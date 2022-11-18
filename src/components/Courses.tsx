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
    <div className='w-full max-w-6xl px-10 flex flex-col gap-6'>
      {courses.map((course) => (
        <div tabIndex={0} key={course.acronyme} className='collapse collapse-arrow'>
          <input type='checkbox' className='peer' />
          <div className='collapse-title flex gap-5 items-center'>
            <h1 className='w-40 text-xl font-semibold text-right'>{course.acronyme}</h1>
            <div className='bg-neutral-focus grow w-full h-16 rounded-md p-2'>
              <div className='bg-secondary h-full rounded w-1/2'></div>
            </div>
          </div>
          <div className='collapse-content h-10 bg-red-500 w-10'>content</div>
        </div>
      ))}
      <div className='collapse'>
        <input type='checkbox' className='peer' />
        <div className='collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content'>
          Click me to show/hide content
        </div>
        <div className='collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content'>
          <p>hello</p>
        </div>
      </div>
    </div>
  );
}
