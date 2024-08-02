import clsx from "clsx";

export interface TextProps {
  as?: React.ElementType;
  size?: any;
  weight?: "light" | "normal" | "semibold" | "bold";
  children?: React.ReactNode;
  className?: string;
  uppercase?: boolean;
}

export const Paragraph = ({
  as: Comp = "p",
  size = "base",
  weight = "normal",
  uppercase = false,
  children,
  className,
}: TextProps) => {
  return (
    <Comp
      className={clsx(
        uppercase && "uppercase",
        weight === "light" && "font-light",
        weight === "normal" && "font-normal",
        weight === "bold" && "font-bold",
        weight === "semibold" && "font-semibold",
        weight === "bold" && "font-bold",
        size === "xs" && "text-xs",
        size === "sm" && "text-sm",
        size === "base" && "text-base",
        size === "lg" && "text-lg",
        size === "xl" && "text-xl",
        size === "2xl" && "text-2xl",
        size === "3xl" && "text-3xl",
        size === "4xl" && "text-4xl",
        size === "4xl" && "text-4xl",
        size === "5xl" && "text-5xl",
        size === "6xl" && "text-6xl",
        size === "7xl" && "text-7xl",
        size === "8xl" && "text-8xl",
        size === "9xl" && "text-9xl",
        className
      )}
    >
      {children}
    </Comp>
  );
};
