import { SVGProps, useEffect, useState } from 'react';
import LucideClipboardCheck from './ico/LucideClipboardCheck';
import LucideClipboardCopy from './ico/LucideClipboardCopy';

export function CopyToClipboard(props: SVGProps<SVGSVGElement> & { text: string }) {
  const [copied, setCopied] = useState(false);
  const [copiedTimeout, setCopiedTimeout] = useState(null);
  const handleClick = () => {
    console.log('CopyToClipboard.handleClick');

    navigator.clipboard.writeText(props.text);
    setCopied(true);
    setCopiedTimeout(setTimeout(() => setCopied(false), 2000));
  };
  useEffect(() => {
    return () => {
      clearTimeout(copiedTimeout);
    };
  }, [copiedTimeout]);
  return (
    <div className={`tooltip transition-all ${copied ? 'tooltip-success scale-125' : 'tooltip-info'}`} data-tip={copied ? 'Copied!' : 'Copy'}>
      <button onClick={handleClick} className='flex items-center justify-center btn btn-ghost'>
        {copied ? <LucideClipboardCheck {...props} /> : <LucideClipboardCopy {...props} />}
      </button>
    </div>
  );
}
