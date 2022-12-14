import { useEffect, useState } from 'react';
import FluentMdl2DoubleChevronDown from './ico/FluentMdl2DoubleChevronDown';

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
    <div className='absolute pointer-events-none m-8 inset-0 flex flex-col items-center justify-end transition-all animate-pulse'>
      <FluentMdl2DoubleChevronDown className='h-8 w-8 text-primary late-appear' />
    </div>
  );
}
