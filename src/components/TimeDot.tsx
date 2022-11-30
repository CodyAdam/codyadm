import MaterialSymbolsRadioButtonUnchecked from './ico/MaterialSymbolsRadioButtonUnchecked';
import { Size } from './ProjectCard.astro';
interface Props {
  date: String;
  size: Size;
}
export function TimeDot({ date, size }: Props) {
  return (
    <>
      {size === 'sm' && (
        <div className='absolute top-0 left-0 -translate-y-[.4rem] -translate-x-[8.15rem] w-32 flex items-center justify-start py-2 '>
          <div className='flex items-center justify-center h-4 relative'>
            <MaterialSymbolsRadioButtonUnchecked className='h-8 w-8 text-base-100 absolute' />
            <MaterialSymbolsRadioButtonUnchecked className='h-3 w-3 text-secondary/10 absolute' />
          </div>
          <span className='ml-5 text-xs sm:text-sm font-mono text-neutral-content bg-base-100'>{date}</span>
        </div>
      )}
      {size === 'md' && (
        <div className='absolute top-0 left-0 -translate-y-[.4rem] -translate-x-[8.15rem] w-32 flex items-center justify-start py-2 '>
          <div className='flex items-center justify-center h-4 relative'>
            <MaterialSymbolsRadioButtonUnchecked className='h-10 w-10 text-base-100 absolute' />
            <MaterialSymbolsRadioButtonUnchecked className='h-5 w-5 text-secondary/30 absolute' />
          </div>
          <span className='ml-6 text-xs sm:text-sm font-mono text-neutral-content bg-base-100'>{date}</span>
        </div>
      )}
      {size === 'lg' && (
        <div className='absolute top-0 left-0 -translate-y-[.4rem] -translate-x-[9.9rem] w-32 flex items-center justify-start py-2'>
          <div className='flex items-center justify-center h-4 relative'>
            <MaterialSymbolsRadioButtonUnchecked className='h-12 w-12 text-base-100 absolute z-10' />
            <svg
              width='100'
              height='100'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              className='z-20 h-14 w-14 opacity-60'
              viewBox='0 0 100 100'
            >
              {/* gradient circle outer transparent and inner is yellow */}
              <defs>
                <radialGradient id='grad1' cx='50%' cy='50%' r='50%' fx='50%' fy='50%'>
                  <stop offset='0%' style={{ stopColor: 'rgb(255,255,0)', stopOpacity: 0.61 }} />
                  <stop offset='9%' style={{ stopColor: 'rgb(255,255,0)', stopOpacity: 0.31 }} />
                  <stop offset='21%' style={{ stopColor: 'rgb(255,255,0)', stopOpacity: 0.19 }} />
                  <stop offset='37%' style={{ stopColor: 'rgb(255,255,0)', stopOpacity: 0.08 }} />
                  <stop offset='63%' style={{ stopColor: 'rgb(255,255,0)', stopOpacity: 0.04 }} />
                  <stop offset='100%' style={{ stopColor: 'rgb(0,0,0)', stopOpacity: 0.0 }} />
                </radialGradient>
              </defs>
              <circle cx='50' cy='50' r='50' fill='url(#grad1)' />
            </svg>
            <MaterialSymbolsRadioButtonUnchecked className='h-7 w-7 text-secondary/90 absolute z-30' />
          </div>
          <span className='text-xs sm:text-sm font-mono text-neutral-content bg-base-100'>{date}</span>
        </div>
      )}
      {size === 'xl' && (
        <>
          <div className='absolute top-0 left-0 -translate-y-[.4rem] -translate-x-[3.1rem] sm:-translate-x-[8.2rem] w-32 flex items-center justify-start py-2'>
            <div className='flex items-center justify-center h-4 relative'>
              <div className='bg-base-100 h-16 w-2 -z-10 absolute shrink-0' />
              <div className='tooltip tooltip-secondary absolute z-30' data-tip='Big project'>
                <div className='dot-xl rounded-tr-none rotate-45' />
              </div>
            </div>
          </div>
          <span className='text-xs sm:text-sm absolute -translate-y-7 translate-x-1 font-mono text-neutral-content'>
            {date}
          </span>
        </>
      )}
    </>
  );
}
