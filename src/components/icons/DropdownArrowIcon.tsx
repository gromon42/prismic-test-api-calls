import clsx from 'clsx';

export interface DropdownArrowIconProps {
  className?: string;
  pathClassName?: string;
}

export const DropdownArrowIcon = ({ className, pathClassName }: DropdownArrowIconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('h-6 w-6', className)}
    >
      <path d="M4 5L8 9L12 5" stroke="white" strokeLinecap="square" strokeLinejoin="round" className={pathClassName} />
    </svg>
  );
};

export default DropdownArrowIcon;
