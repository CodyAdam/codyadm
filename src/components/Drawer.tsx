import IcSharpChevronLeft from './ico/IcSharpChevronLeft';

export function Drawer({
  children,
  title,
  content,
  id,
  className,
}: {
  children: React.ReactNode;
  title?: String;
  content: React.ReactNode;
  className?: string;
  id: string;
}) {
  return (
    <div className='drawer drawer-end h-fit'>
      <input id={'drawer-' + id} type='checkbox' className='drawer-toggle' />
      <div className='drawer-content'>
        <label htmlFor={'drawer-' + id} className={'drawer-button cursor-pointer'}>
          <div className={className}>{children}</div>
        </label>
      </div>
      <div className='drawer-side mr-4 fixed inset-0 z-40 pointer-events-none'>
        <label htmlFor={'drawer-' + id} className='drawer-overlay'></label>
        <div className='flex flex-col transition-all px-10 pb-10 max-w-full lg:max-w-[50rem] w-full bg-base-100 text-base-content gap-10 z-50'>
          <div className='sticky top-0 pt-10 pb-7 bg-base-100 border-b-2 border-base-content/20 z-10'>
            <div className='flex justify-between items-center  gap-5'>
              <label htmlFor={'drawer-' + id} className='btn btn-circle btn-outline'>
                <IcSharpChevronLeft className='w-8 h-8' />
              </label>
              <h1 className='text-4xl font-display font-semibold'>{title}</h1>
            </div>
          </div>
          {content}
        </div>
      </div>
    </div>
  );
}
