import { useEffect, useRef, useState } from 'react';
import useOnScreen from '../hooks/useOnScreen';
import FluentEmojiFlatSadButRelievedFace from './ico/FluentEmojiFlatSadButRelievedFace';

export function LazyProse({ html }: { html: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref)
  return (
    <div ref={ref}>
      {isVisible ? (
        <div className='prose' dangerouslySetInnerHTML={{ __html: html }}></div>
      ) : (
        <div className='prose flex items-center justify-center flex-col'>
          <h1>This page is empty</h1>
          <FluentEmojiFlatSadButRelievedFace className='h-40 w-40' />
        </div>
      )}
    </div>
  );
}
