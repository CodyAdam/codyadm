import { SVGProps, useState } from 'react';
import { BiStars } from './ico/BiStars';
import MdiSortCalendarAscending from './ico/MdiSortCalendarAscending';

type Sort = 'time' | 'relevance';

export default function ProjectFilter() {
  const [sortBy, setSortBy] = useState<Sort>('relevance');
  return (
    <div className='grid grid-rows-2 md:grid-cols-2 gap-5 md:gap-10 py-10 md:py-20'>
      <SelectCard
        name='relevance'
        current={sortBy}
        set={(name) => setSortBy(name)}
        header='Sort by relevance'
        desc='Each project has a relevance score from 1 to 4 which make bigger and more valuable project appear first'
        logo={BiStars}
      />
      <SelectCard name='time' current={sortBy} set={(name) => setSortBy(name)} header='Sort by time' desc={'Sort projects by it\'s starting date and group them by year'} logo={MdiSortCalendarAscending}/>
    </div>
  );
}

function SelectCard(p: {
  name: Sort;
  current: Sort;
  set: (name: Sort) => void;
  header: string;
  desc: string;
  logo: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}) {
  return (
    <button
      className={`p-5 md:p-8 rounded-2xl md:rounded-[2rem] gap-3 md:gap-6 max-w-[33rem] flex items-center border border-transparent ${
        p.current == p.name ? 'bg-neutral  border-base-300 shadow-lg' : 'hover:bg-base-200/50'
      }`}
      onClick={() => p.set(p.name)}
    >
      <p.logo className={`w-11 h-11 md:w-14 md:h-14 shrink-0 ${p.current == p.name ? "text-accent" : "text-neutral-focus"}`} />
      <div className='flex items-start justify-center gap-3 md:gap-5 flex-col'>
        <h1 className='font-semibold text-xl md:text-2xl text-left text-primary leading-6'>{p.header}</h1>
        <p className='font-medium text-neutral-content text-base text-left opacity-50 leading-5 md:leading-6'>{p.desc}</p>
      </div>
    </button>
  );
}
