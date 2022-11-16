import { MarkdownInstance } from 'astro';
import { Drawer } from './Drawer';
import MaterialSymbolsRadioButtonUnchecked from './ico/MaterialSymbolsRadioButtonUnchecked';
import ProjectFilter from './ProjectFilter';

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
type Props = MarkdownInstance<Project>;

export default function ProjectCard({ project, size = 'md' }: { project: Props; size?: Size }) {
  switch (size) {
    case 'sm':
      return <Sm project={project} />;
    case 'md':
      return <Md project={project} />;
    case 'lg':
      return <Lg project={project} />;
    case 'xl':
      return <Xl project={project} />;
  }
}

export function Sm({ project }: { project: Props }) {
  return (
    <div className='relative'>
      <Drawer
        className='group mx-3'
        content={<div className='prose'></div>}
        id={project.frontmatter.title}
        title={project.frontmatter.title}
      >
        <div className='flex gap-5 text-neutral-focus w-full flex-wrap'>
          <h1 className='inline shrink-1'>{project.frontmatter.title}</h1>
          <LearnMore />
        </div>
      </Drawer>
      <Waypoint date={project.frontmatter.date} size='sm' />
    </div>
  );
}

export function Md({ project }: { project: Props }) {
  return (
    <div className='relative'>
      <Drawer
        className='group mx-3'
        content={<div className='prose'></div>}
        id={project.frontmatter.title}
        title={project.frontmatter.title}
      >
        <div className='flex gap-5 text-neutral-focus w-full'>
          <h1 className='inline shrink-0'>{project.frontmatter.title}</h1>
          <LearnMore />
        </div>
      </Drawer>
      <Waypoint date={project.frontmatter.date} size='md' />
    </div>
  );
}

export function Lg({ project }: { project: Props }) {
  return (
    <div className='relative'>
      <Drawer
        className='group mx-3'
        content={<div className='prose'></div>}
        id={project.frontmatter.title}
        title={project.frontmatter.title}
      >
        <div className='flex gap-5 text-neutral-focus w-full'>
          <h1 className='inline shrink-0'>{project.frontmatter.title}</h1>
          <LearnMore />
        </div>
      </Drawer>
      <Waypoint date={project.frontmatter.date} size='lg' />
    </div>
  );
}
export function Xl({ project }: { project: Props }) {
  return (
    <div className='relative'>
      <Drawer
        className='group mx-3'
        content={<div className='prose'></div>}
        id={project.frontmatter.title}
        title={project.frontmatter.title}
      >
        <div className='flex gap-5 text-neutral-focus w-full'>
          <h1 className='inline shrink-0'>{project.frontmatter.title}</h1>
          <LearnMore />
        </div>
      </Drawer>
      <Waypoint date={project.frontmatter.date} size='xl' />
    </div>
  );
}

function Waypoint({ date, size = 'md' }: { date: String; size?: Size }) {
  if (size === 'sm')
    return (
      <div className='absolute top-0 left-0 -translate-y-[.4rem] -translate-x-[11.05rem] w-32 flex items-center justify-start py-2 '>
        <div className='flex items-center justify-center h-4 relative'>
          <MaterialSymbolsRadioButtonUnchecked className='h-8 w-8 text-base-100 absolute' />
          <MaterialSymbolsRadioButtonUnchecked className='h-3 w-3 text-secondary/10 absolute' />
        </div>
        <span className='ml-5 text-sm font-mono text-neutral-content bg-base-100'>{date}</span>
      </div>
    );
  else if (size === 'md')
    return (
      <div className='absolute top-0 left-0 -translate-y-[.4rem] -translate-x-[11.05rem] w-32 flex items-center justify-start py-2 '>
        <div className='flex items-center justify-center h-4 relative'>
          <MaterialSymbolsRadioButtonUnchecked className='h-10 w-10 text-base-100 absolute' />
          <MaterialSymbolsRadioButtonUnchecked className='h-5 w-5 text-secondary/30 absolute' />
        </div>
        <span className='ml-6 text-sm font-mono text-neutral-content bg-base-100'>{date}</span>
      </div>
    );
  else if (size === 'lg')
    return (
      <div className='absolute top-0 left-0 -translate-y-[.4rem] -translate-x-[12.8rem] w-32 flex items-center justify-start py-2 '>
        <div className='flex items-center justify-center h-4 relative'>
          <MaterialSymbolsRadioButtonUnchecked className='h-14 w-14 text-base-100 absolute z-10' />
          <svg
            width='100'
            height='100'
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            className='z-20 h-14 w-14 opacity-60'
            viewBox='0 0 100 100'
          >
            {/* gradient circle outer transparent and inner is yellow */}
            <defs>
              <radialGradient id='grad1' cx='50%' cy='50%' r='50%' fx='50%' fy='50%'>
                <stop offset='0%' style={{ stopColor: 'rgb(255,255,0)', stopOpacity: 0.61 }} />
                <stop offset='9%' style={{ stopColor: 'rgb(255,255,0)', stopOpacity: 0.31 }} />
                <stop offset='21%' style={{ stopColor: 'rgb(255,255,0)', stopOpacity: 0.19 }} />
                <stop offset='37%' style={{ stopColor: 'rgb(255,255,0)', stopOpacity: 0.08 }} />
                <stop offset='63%' style={{ stopColor: 'rgb(255,255,0)', stopOpacity: 0.04 }} />
                <stop offset='100%' style={{ stopColor: 'rgb(0,0,0)', stopOpacity: 0.0 }} />
              </radialGradient>
            </defs>
            <circle cx='50' cy='50' r='50' fill='url(#grad1)' />
          </svg>
          <MaterialSymbolsRadioButtonUnchecked className='h-7 w-7 text-secondary/90 absolute z-30' />
        </div>
        <span className=' text-sm font-mono text-neutral-content bg-base-100'>{date}</span>
      </div>
    );
  else
    return (
      <div className='absolute top-0 left-0 -translate-y-[.4rem] -translate-x-[14.2rem] w-32 flex items-center justify-start py-2 '>
        <div className='flex items-center justify-center h-4 relative'>
          <MaterialSymbolsRadioButtonUnchecked className='h-16 w-16 text-base-100 absolute z-10' />
          <svg width='100' height='100' version='1.1' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg' className='z-20 w-26 h-26 opacity-60'>
            <defs>
              <radialGradient id='grad1' cx='50%' cy='50%' r='50%' fx='50%' fy='50%'>
                <stop offset='0%' style={{ stopColor: 'rgb(255,255,0)', stopOpacity: 0.61 }} />
                <stop offset='9%' style={{ stopColor: 'rgb(255,255,0)', stopOpacity: 0.31 }} />
                <stop offset='21%' style={{ stopColor: 'rgb(255,255,0)', stopOpacity: 0.19 }} />
                <stop offset='37%' style={{ stopColor: 'rgb(255,255,0)', stopOpacity: 0.08 }} />
                <stop offset='63%' style={{ stopColor: 'rgb(255,255,0)', stopOpacity: 0.04 }} />
                <stop offset='100%' style={{ stopColor: 'rgb(0,0,0)', stopOpacity: 0.0 }} />
              </radialGradient>
            </defs>
            <circle cx='50' cy='50' r='50' fill='url(#grad1)' />
          </svg>
          <MaterialSymbolsRadioButtonUnchecked className='h-10 w-10 text-secondary absolute z-30' />
        </div>
        <span className='-ml-4 text-sm font-mono text-neutral-content bg-base-100'>{date}</span>
      </div>
    );
}

function LearnMore() {
  return (
    <div className='group flex items-center gap-2 shrink-0'>
      <span className='font-semibold text-base-content'>Learn more</span>
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
