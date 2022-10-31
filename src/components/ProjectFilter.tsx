import { useState } from 'react';
import { BiStars } from './ico/BiStars';

type Sort = 'time' | 'relevance';

export default function ProjectFilter() {
  const [sortBy, setSortBy] = useState<Sort>('relevance');
  return (
    <div className='grid grid-cols-2 gap-4 py-5'>
      <SelectCard
        name='relevance'
        current={sortBy}
        set={(name) => setSortBy(name)}
        header='Relevance'
        desc='Each project are ranked by a revelance value based on project size, time spent and personnal value'
        logo={<BiStars className='w-20 h-20' />}
      />
      <SelectCard name='time' current={sortBy} set={(name) => setSortBy(name)} header='Time' desc='' />
    </div>
  );
}

function SelectCard(p: {
  name: Sort;
  current: Sort;
  set: (name: Sort) => void;
  header: string;
  desc: string;
  logo?: JSX.Element;
}) {
  return (
    <button
      className={`px-16 py-10 rounded-box gap-6 flex w-fit items-center ${
        p.current == p.name ? 'ring-2 bg-blue-200' : 'hover:bg-base-200/50'
      }`}
      onClick={() => p.set(p.name)}
    >
      {p.logo}

      <div className='flex items-start justify-center gap-6 flex-col'>
        <h1 className='font-semibold text-xl text-left'>{p.header}</h1>
        <p className='font-medium text-base text-left opacity-50'>{p.desc}</p>
      </div>
    </button>
  );
}
