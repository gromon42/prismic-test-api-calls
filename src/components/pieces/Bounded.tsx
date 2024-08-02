
import clsx from 'clsx';

export interface BoundedProps {
  as: React.ElementType;
  sectionId?: string;
  collapsible?: boolean;
  className?: string;
  containerClassName?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const Bounded = ({
  as: Comp = 'section',
  sectionId,
  collapsible = true,
  className,
  containerClassName,
  style,
  children,
}: BoundedProps) => {
  return (
    <Comp id={sectionId ? sectionId : null} data-collapsible={collapsible} className={className} style={style}>
      <div className={clsx('mx-auto', 'w-full', 'max-w-full', 'px-8', 'md:px-8', 'lg:px-0', containerClassName)}>
        {children}
      </div>
    </Comp>
  );
};
