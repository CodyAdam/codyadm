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
      <a href={project.url} className='card w-64 bg-base-100 hover:bg-base-200 transition-colors shadow-xl'>
        <div className='card-body'>
          <h2 className='card-title'>{project.frontmatter.title} </h2>
          <p>{project.frontmatter.sumary}</p>
          <div className='badge self-end'>{project.frontmatter.date}</div>
        </div>
      </a>
    </div>
  );
}
