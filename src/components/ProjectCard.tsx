import { MarkdownInstance } from 'astro';
import { Drawer } from './Drawer';
import { LazyProse } from './LazyProse';
import { TimeDot } from './TimeDot';

export type WithContent<T> = T & { content: string };

export type Project = {
  title: string;
  date: string;
  sumary: string;
  coauthors?: string[];
  tags?: string[];
  value?: number;
  stack?: string[];
  thumbnails?: string[];
  hide?: boolean;
  rank?: number;
  repo?: string;
};

export type Size = 'sm' | 'md' | 'lg' | 'xl';
interface Props {
  project: WithContent<MarkdownInstance<Project>>;
  size?: Size;
}

export function ProjectCard({ project, size = 'sm' }: Props) {
  return (
    <div className='relative w-full'>
      <TimeDot date={project.frontmatter.date} size={size} />
      <Drawer
        className='group'
        id={project.frontmatter.title}
        title={project.frontmatter.title}
        content={
          <div slot='content'>
            <LazyProse html={project.content} />
          </div>
        }
      >
        {size == 'sm' && (
          <div className='flex gap-4 leading-4 text-neutral-focus w-full flex-wrap overflow-hidden'>
            <h1 className='inline shrink-1'>{project.frontmatter.title}</h1>
            <LearnMore />
          </div>
        )}
        {size == 'md' && (
          <div className='flex leading-4 text-primary w-fit card bg-base-100 border border-neutral-focus shadow-xl p-5 flex-wrap overflow-hidden text-left glow-card group'>
            <div className=' flex flex-col h-full items-start gap-10 z-10'>
              <h1 className='inline shrink-1 font-display text-xl sm:text-2xl font-bold'>
                {project.frontmatter.title}
              </h1>
              {project.frontmatter.tags && (
                <div className='flex gap-2 flex-wrap justify-start -mt-7'>
                  {project.frontmatter.tags.map((tag) => (
                    <span className='badge-sm badge' key={tag}>{tag}</span>
                  ))}
                </div>
              )}
              <LearnMore />
            </div>
          </div>
        )}
        {size == 'lg' && (
          <div className='flex leading-4 text-primary h-0 min-h-[30rem] card bg-base-100 border border-neutral-focus px-5 py-6 lg:px-7 sm:py-10 w-full flex-wrap overflow-hidden text-center lg:text-left glow-card group'>
            <div className=' flex flex-col lg:w-1/2 h-full lg:items-start items-center gap-10 z-10'>
              <h1 className='inline shrink-1 font-display text-xl sm:text-3xl font-bold'>
                {project.frontmatter.title}
              </h1>
              {project.frontmatter.tags && (
                <div className='flex gap-2 flex-wrap justify-center lg:justify-start -mt-7'>
                  {project.frontmatter.tags.map((tag) => (
                    <span className='badge-sm badge' key={tag}>{tag}</span>
                  ))}
                </div>
              )}
              <p className='opacity-60 text-sm '>{project.frontmatter.sumary}</p>

              <div className='px-3 py-2 border-primary/5 transition-all lg:mt-auto group-hover:border-primary/50 border rounded-full group-hover:backdrop-blur-md'>
                <LearnMore />
              </div>
            </div>
            {project.frontmatter.thumbnails && (
              <img
                src={project.frontmatter.thumbnails[0]}
                alt=''
                className='absolute inset-0 opacity-80 h-2/3 mt-auto w-full mask-fade-b object-cover lg:mask-fade-r lg:h-full lg:w-2/3 lg:mt-0 lg:ml-auto'
              />
            )}
          </div>
        )}
        {size == 'xl' && (
          <div className='flex leading-4 text-primary min-h-[30rem] h-0 card bg-base-100 border border-neutral-focus px-5 py-6 lg:px-7 sm:py-10 w-full flex-wrap overflow-hidden text-center lg:text-left glow-card-accent group'>
            <div className=' flex flex-col lg:w-1/2 h-full lg:items-start items-center gap-10 z-10'>
              <h1 className='inline shrink-1 font-display text-xl sm:text-3xl font-bold'>
                {project.frontmatter.title}
              </h1>
              {project.frontmatter.tags && (
                <div className='flex gap-2 flex-wrap justify-center lg:justify-start -mt-7'>
                  {project.frontmatter.tags.map((tag) => (
                    <span className='badge-sm badge' key={tag}>{tag}</span>
                  ))}
                </div>
              )}
              <p className='opacity-60 text-sm '>{project.frontmatter.sumary}</p>

              <div className='px-3 py-2 border-primary/5 transition-all lg:mt-auto group-hover:border-primary/50 border rounded-full group-hover:backdrop-blur-md'>
                <LearnMore />
              </div>
            </div>
            {project.frontmatter.thumbnails && (
              <img
                src={project.frontmatter.thumbnails[0]}
                alt=''
                className='absolute inset-0 opacity-80 h-2/3 mt-auto w-full mask-fade-b object-cover lg:mask-fade-r lg:h-full lg:w-2/3 lg:mt-0 lg:ml-auto'
              />
            )}
          </div>
        )}
      </Drawer>
    </div>
  );
}

function LearnMore() {
  return (
    <div className='group flex items-center gap-2 shrink-0 text-sm w-fit '>
      <span className='font-semibold text-base-content group-hover:text-primary transition-all'>Learn more</span>
      <svg
        width='16px'
        height='16px'
        viewBox='0 0 16 16'
        fill='none'
        strokeWidth='1.5'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='flex-shrink-0 text-secondary'
        aria-hidden='true'
        role='img'
      >
        <path className='origin-center scale-x-0 transition-transform group-hover:scale-x-100' d='M12 8H4'></path>
        <path
          className='transition-transform group-hover:translate-x-[.2rem]'
          d='M6.5 11.5L9.64645 8.35355C9.84171 8.15829 9.84171 7.84171 9.64645 7.64645L6.5 4.5'
        ></path>
      </svg>
    </div>
  );
}
