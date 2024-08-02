"use client";

import clsx from "clsx";
import { useState } from "react";

export interface BurgerButtonProps {
  className?: string;
  onStateChange?: () => void;
}

export const BurgerButton = ({
  className,
  onStateChange,
}: BurgerButtonProps) => {
  const [mobileNavOpened, setMobileNavOpened] = useState(false);

  const handleStateChange = () => {
    document.body.style.overflow = !mobileNavOpened ? "hidden" : "";
    setMobileNavOpened((prev) => !prev);
    onStateChange && onStateChange();
  };

  const genericHamburgerLine = `h-[1px] w-[10px] my-1 rounded-[30px] bg-primary-0 transition-[transform] ease transform duration-300`;

  return (
    <button
      className={clsx(
        "group flex h-9 w-9 flex-col items-center justify-center rounded-full border border-primary-0 transition-opacity",
        mobileNavOpened && "flex",
        !mobileNavOpened && "md:hidden",
        className
      )}
      onClick={handleStateChange}
    >
      <div
        className={clsx(
          mobileNavOpened
            ? "translate-y-[4.5px] rotate-45 opacity-90 group-hover:opacity-100"
            : "opacity-90 group-hover:opacity-100",
          genericHamburgerLine
        )}
      />
      <div
        className={clsx(
          mobileNavOpened
            ? "-translate-y-[4.5px] -rotate-45 opacity-90 group-hover:opacity-100"
            : "opacity-90 group-hover:opacity-100",
          genericHamburgerLine
        )}
      />
    </button>
  );
};
