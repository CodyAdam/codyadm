import { useEffect, useState } from 'react';

export function CircleGroupButton({
  value,
  options,
  onChange,
}: {
  value: string;
  options: string[];
  onChange: (out: string) => void;
}) {
  const [selected, setSelected] = useState<string>(value);

  useEffect(() => {
    onChange(selected);
  }, [selected]);

  return (
    <div className='w-full flex justify-center pb-12'>
      <div className='bg-neutral rounded-full p-1 flex sm:gap-3 gap-1'>
        {options.map((option) => (
          <button
            className={`sm:px-3 py-1 px-2  active:scale-110 transition-all font-semibold uppercase text-xs rounded-full  ${
              selected == option ? ' bg-neutral-focus text-primary' : 'text-neutral-content'
            }`}
            onClick={() => setSelected(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
