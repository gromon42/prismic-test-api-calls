import clsx from 'clsx';

export interface ArrowRightIconProps {
  className?: string;
}

export const ArrowRightIcon = ({ className }: ArrowRightIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#FFFFFF"
      className={clsx('h-6 w-6', className)}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
};

export default ArrowRightIcon;
