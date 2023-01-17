import { SVGProps, useState } from 'react';

type Sort = 'time' | 'relevance';

export default function ProjectFilter({ filter, setFilter }: { filter: number; setFilter: (filter: number) => void }) {
  let highligtedWord = 'all';
  if (filter >= 4) highligtedWord = 'only the best';
  else if (filter >= 3) highligtedWord = 'only good';
  else if (filter >= 2) highligtedWord = 'some';
  else if (filter >= 1) highligtedWord = 'all';

  return (
    <div className='w-full flex-col flex gap-10 items-center'>
      <h1 className='font-semibold text-3xl font-display text-primary w-full text-center'>
        Show <span className='font-bold text-4xl text-secondary px-1'>{highligtedWord}</span> projects
      </h1>
      <div className='max-w-3xl w-full'>
        <input
          type='range'
          min='1'
          max='4'
          value={filter}
          className='range range-secondary w-full'
          step='.001'
          onChange={(e) => {
            setFilter(parseFloat(e.target.value));
          }}
          onBlur={() => {
            setFilter(Math.floor(filter));
          }}
        />
        <div className='w-full flex justify-between text-xs px-2 select-none '>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
        </div>
      </div>
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
      <p.logo
        className={`w-11 h-11 md:w-14 md:h-14 shrink-0 ${p.current == p.name ? 'text-accent' : 'text-neutral-focus'}`}
      />
      <div className='flex items-start justify-center gap-3 md:gap-5 flex-col'>
        <h1 className='font-semibold text-xl md:text-2xl text-left text-primary leading-6'>{p.header}</h1>
        <p className='font-medium text-neutral-content text-base text-left opacity-50 leading-5 md:leading-6'>
          {p.desc}
        </p>
      </div>
    </button>
  );
}
