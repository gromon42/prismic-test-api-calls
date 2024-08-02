import clsx from "clsx";
import { Heading } from ".";
import { RichTextField } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText } from "@prismicio/react";

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading as="h2" size="3xl">
      {children}
    </Heading>
  ),
  heading3: ({ children }) => (
    <Heading as="h3" size="xs" uppercase weight="bold">
      {children}
    </Heading>
  ),
};

export interface SectionTitlesProps {
  title: RichTextField;
  subtitle: RichTextField;
  dark?: boolean;
  align?: "center" | "left" | "right";
  className?: string;
}

export const SectionTitles = ({
  title,
  subtitle,
  dark,
  align,
  className,
}: SectionTitlesProps) => {
  return (
    <div
      className={clsx(
        "mx-auto mb-10 flex max-w-[300px] flex-col md:mb-24 md:max-w-none",
        className
      )}
    >
      <div
        className={clsx(
          "mb-6 text-center text-secondary-0 md:text-sm",
          align === "left" && "md:!text-left",
          align === "right" && "md:!text-right"
        )}
      >
        <PrismicRichText field={subtitle} components={components} />
      </div>
      <div
        className={clsx(
          "text-center text-primary-0 md:text-4xl",
          align === "left" && "md:!text-left",
          align === "right" && "md:!text-right",
          dark && "!text-white-0"
        )}
      >
        <PrismicRichText field={title} components={components} />
      </div>
    </div>
  );
};
