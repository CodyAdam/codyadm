import { useEffect, useState } from 'react';
import FluentEmojiFlatSadButRelievedFace from './ico/FluentEmojiFlatSadButRelievedFace';

export function LazyProse({ html }: { html: string }) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) {
    return (
      <div className='animate-pulse flex'>
        <div className='flex-1 space-y-6 py-1'>
          <div className='h-8 mb-10 bg-slate-700 rounded w-1/2'></div>
          <div className='space-y-4'>
            <div className='grid grid-cols-3 gap-5'>
              <div className='h-3 bg-slate-700 rounded col-span-2'></div>
              <div className='h-3 bg-slate-700 rounded col-span-1'></div>
            </div>
            <div className='h-3 bg-slate-700 rounded'></div>
          </div>
          <div className='space-y-4'>
            <div className='grid grid-cols-3 gap-5'>
              <div className='h-3 bg-slate-700 rounded col-span-1'></div>
              <div className='h-3 bg-slate-700 rounded col-span-2'></div>
            </div>
            <div className='h-3 bg-slate-700 rounded'></div>
            <div className='h-3 bg-slate-700 rounded'></div>
            <div className='grid grid-cols-3 gap-5'>
              <div className='h-3 bg-slate-700 rounded col-span-2'></div>
              <div className='h-3 bg-slate-700 rounded col-span-1'></div>
            </div>
          </div>
          <div className='space-y-4'>
            <div className='grid grid-cols-3 gap-5'>
              <div className='h-3 bg-slate-700 rounded col-span-3'></div>
            </div>
            <div className='h-3 bg-slate-700 rounded'></div>
            <div className='h-3 bg-slate-700 rounded'></div>
            <div className='grid grid-cols-3 gap-5'>
              <div className='h-3 bg-slate-700 rounded col-span-1'></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (html.length === 0)
    return (
      <div className='prose flex items-center justify-center flex-col'>
        <h1>This page is empty</h1>
        <FluentEmojiFlatSadButRelievedFace className='h-40 w-40' />
      </div>
    );
  return <div className='prose' dangerouslySetInnerHTML={{ __html: html }}></div>;
}
