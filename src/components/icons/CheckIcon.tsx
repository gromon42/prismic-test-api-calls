import clsx from 'clsx';

export interface CheckIconProps {
  className?: string;
  pathClassName?: string;
}

export const CheckIcon = ({ className, pathClassName }: CheckIconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('h-6 w-6', className)}
    >
      <path
        d="M23 12.0312L14.5 20.5312C14.375 20.6875 14.1875 20.75 14 20.75C13.7812 20.75 13.5938 20.6875 13.4688 20.5312L8.96875 16.0312C8.65625 15.75 8.65625 15.2812 8.96875 15C9.25 14.6875 9.71875 14.6875 10 15L14 18.9688L21.9688 11C22.25 10.6875 22.7188 10.6875 23 11C23.3125 11.2812 23.3125 11.75 23 12.0312Z"
        className={pathClassName}
      />
    </svg>
  );
};

export default CheckIcon;
