import clsx from 'clsx';

export interface ArrowDiagonalIconProps {
  className?: string;
}

export const ArrowDiagonalIcon = ({ className }: ArrowDiagonalIconProps) => {
  return (
    <svg
      width="42"
      height="41"
      viewBox="0 0 42 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('h-6 w-6', className)}
    >
      <g clipPath="url(#clip0_745_16598)">
        <path d="M9.21604 6.28497L34.4112 6.05276L34.4094 30.5855M6.26201 34.4715L33.9549 6.52421" stroke="#031229" />
      </g>
      <defs>
        <clipPath id="clip0_745_16598">
          <rect
            width="40"
            height="40"
            fill="white"
            transform="matrix(0.00457226 0.99999 0.99999 -0.00457226 0.910156 0.182861)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ArrowDiagonalIcon;
