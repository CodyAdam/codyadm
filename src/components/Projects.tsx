import { MarkdownInstance } from 'astro';
import { useEffect, useState } from 'react';
import EmojionePencil from './ico/EmojionePencil';
import { ProjectCard, Project, Size, WithContent } from './ProjectCard';
import ProjectFilter from './ProjectFilter';

export function Projects({ projects }: { projects: WithContent<MarkdownInstance<Project>>[] }) {
  const [loaded, setLoaded] = useState(false);
  const [filter, setFilter] = useState<number>(2);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return null;
  return (
    <div className='flex justify-center px-10 md:px-20 md:mx-20 pt-10 md:pt-20'>
      <div className='container flex flex-col justify-center items-center'>
        <ProjectFilter
          filter={filter}
          setFilter={(value) => {
            setFilter(value);
          }}
        />
        <div className='flex pt-[14rem]'>
          <div className='h-[calc(100%+10rem)] -translate-y-[5rem] w-[3px] -z-20 relative rounded-full bg-gradient-to-t from-purple-600/0 to-yellow-400 py-20 via-red-400/70 glow-timeline'>
            <div className='absolute top-0 left-[30%] -translate-y-[96%]'>
              <EmojionePencil className='w-16 animate-drawing-rotation text-yellow-400 h-16' />
            </div>
          </div>
          <div className='flex grow container flex-col w-full gap-20 md:gap-20 items-start justify-between pl-[3rem] sm:pl-[8rem] max-w-6xl'>
            {projects
              .filter((project) => project.frontmatter.value >= filter)
              .map((project, i) => {
                let size: Size = 'sm';
                switch (project.frontmatter.value) {
                  case 1:
                    size = 'sm';
                    break;
                  case 2:
                    size = 'md';
                    break;
                  case 3:
                    size = 'lg';
                    break;
                  case 4:
                    size = 'xl';
                    break;
                }

                return <ProjectCard key={project.frontmatter.title} project={project} size={size} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
