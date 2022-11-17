import { useEffect, useState } from 'react';
import SimpleLineIconsMouse from './ico/SimpleLineIconsMouse';

export function ScrollIndicator() {
  const [loaded, setLoaded] = useState(false);
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    setLoaded(true);
    const onScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  if (!loaded || scroll != 0) {
    return null;
  }

  return (
    <div className='absolute m-8 inset-0 flex flex-col items-center justify-end transition-all animate-pulse'>
      <SimpleLineIconsMouse className='h-14 w-14 text-primary late-appear ' />
    </div>
  );
}
