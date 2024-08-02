import clsx from "clsx";
import Image from "next/image";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "button" | "submit" | "reset";
  color: any;
  icon?: string;
  size?: "sm" | "md" | "lg";
  flat?: boolean;
  className?: string;
  loading?: boolean;
  children?: React.ReactNode;
}

export const Button = ({
  type,
  color,
  icon,
  size = "sm",
  flat,
  className,
  children,
  loading,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      type={type}
      className={clsx(
        "flex w-auto flex-row items-center justify-center rounded-[48px] py-4 pl-6 text-center text-sm font-semibold uppercase leading-none tracking-wider outline-none transition-all",
        icon ? "pr-4" : "pr-6",
        color === "primary" &&
          "bg-primary-0 text-white-0 hover:bg-primary-200-",
        color === "secondary" &&
          "bg-secondary-0 text-white-0 hover:bg-secondary-200",
        color === "white" &&
          "bg-white-0 text-primary-0 hover:bg-primary-0 hover:text-white-0",
        color === "transparent" &&
          "text-primary-0 hover:bg-primary-0 hover:text-white-0",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        size === "lg" && "text-base",
        flat && "border border-solid",
        flat &&
          color === "primary" &&
          "border-primary-0 bg-white-0 !text-primary-0 hover:!bg-primary-0 hover:!text-white-0",
        flat &&
          color === "white" &&
          "!border-white-0 !bg-primary-0 !text-white-0 hover:!bg-white-0 hover:!text-primary-0",
        props.disabled && "cursor-not-allowed opacity-50",
        className
      )}
    >
      {children}
      {icon && !loading && (
        <div>
          <Image
            src={"/icons/" + icon + ".svg"}
            alt=""
            width="15"
            height="15"
            className={clsx(
              "ml-2",
              color === "primary" && "fill-white-0",
              color === "secondary" && "fill-white-0",
              color === "white" && "fill-primary-0",
              color === "transparent" && "fill-primary-0"
            )}
          ></Image>
        </div>
      )}
    </button>
  );
};
