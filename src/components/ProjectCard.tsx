import { MarkdownInstance } from 'astro';
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

type Props = MarkdownInstance<Project>;

export default function ProjectCard({ project }: { project: Props }) {
  return (
    <div className=''>
      <div className='card card-side max-w-4xl bg-neutral shadow-xl'>
        {/* <figure>
          <img src='https://placeimg.com/400/225/arch' alt='Shoes' className='object-cover h-full'/>
        </figure> */}
        <div className='card-body'>
          <h2 className='card-title'>{project.frontmatter.title}</h2>
          <p>{project.frontmatter.sumary}</p>
          <div className='card-actions justify-end pt-3'>
            <a href={project.url} className='btn btn-primary'>
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
