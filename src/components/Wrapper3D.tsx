import { useRef } from 'react';

export function Wrapper3D({ children, className }: { children: React.ReactNode; className?: string }) {
  // TODO  Work in progress
  const div = useRef<HTMLDivElement | null>(null);

  function onMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    let item = div.current;
    if (item) {
      // mouse pos relative to the item in % (0-100)
      let x = (e.pageX - item.offsetLeft) / item.offsetWidth * 100;
      let y = (e.pageY - item.offsetTop) / item.offsetHeight * 100;

      // get angle (angle = 0 when mouse is in the center of the item)
      const xAngle = (x - 50) / 2;
      const yAngle = (y - 50) / 4;

      // add css variables to use in the children
      document.body.style.setProperty('--xAngle', -xAngle + 'deg');
      document.body.style.setProperty('--yAngle', -yAngle + 'deg');
    }
  }

  return (
    <div ref={div} className={`card-3d w-fit`} onMouseMove={onMouseMove}>
      <div className={className}>
      {children}
      </div>
    </div>
  );
}
