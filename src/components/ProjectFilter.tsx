import { useState } from 'react';

type GroupBy = 'year' | 'tags' | 'relevance';

export default function ProjectFilter() {
  const [groupBy, setGroupBy] = useState<GroupBy>('relevance');
  return (
    <div className='flex w-full gap-4 py-5'>
      <SelectCard name='relevance' current={groupBy} set={(name) => setGroupBy(name)} header='Header' desc='Desc' />
      <SelectCard name='year' current={groupBy} set={(name) => setGroupBy(name)} header='Header' desc='Desc' />
      <SelectCard name='tags' current={groupBy} set={(name) => setGroupBy(name)} header='Header' desc='Desc' />
    </div>
  );
}

function SelectCard(p: {
  name: GroupBy;
  current: GroupBy;
  set: (name: GroupBy) => void;
  header: string;
  desc: string;
}) {
  return (
    <button
      className={`grid h-32 flex-grow card bg-base-200 rounded-box place-items-center ${
        p.current == p.name && 'ring-2 bg-blue-200'
      }`}
      onClick={() => {
        console.log("set ",p.name);
        
        p.set(p.name);
      }}
    >
      {p.current == p.name && <h3>GROUP BY</h3>}
      <h1>{p.header}</h1>
      <p>{p.desc}</p>
    </button>
  );
}
