import clsx from 'clsx';

export interface CloseIconProps {
  className?: string;
  onClick?: () => void;
}

export const CloseIcon = ({ className, onClick }: CloseIconProps) => {
  return (
    <svg
      className={clsx('h-6 w-6', className)}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#031229"
      onClick={onClick}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.8287 5.04048C19.0826 5.29432 19.0826 5.70588 18.8287 5.95972L12.9233 11.8651L18.8287 17.7703C19.0572 17.9988 19.08 18.355 18.8973 18.609L18.8287 18.6896C18.5749 18.9434 18.1633 18.9434 17.9095 18.6896L12.0043 12.7841L6.09888 18.6896C5.84504 18.9434 5.43348 18.9434 5.17964 18.6896C4.9258 18.4357 4.9258 18.0242 5.17964 17.7703L11.0853 11.8651L5.17964 5.95972C4.95118 5.73126 4.92834 5.37505 5.1111 5.12105L5.17964 5.04048C5.43348 4.78664 5.84504 4.78664 6.09888 5.04048L12.0043 10.9461L17.9095 5.04048C18.1633 4.78664 18.5749 4.78664 18.8287 5.04048Z"
      />
    </svg>
  );
};

export default CloseIcon;
