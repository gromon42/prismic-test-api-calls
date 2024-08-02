import { ImageFieldImage } from "@prismicio/client";
import { PrismicImage } from "@prismicio/react";
import { Heading, Paragraph } from ".";
import { ArrowDiagonalIcon, CheckIcon } from "../icons";

export interface PerkCardProps {
  title: string;
  description: string;
  image: ImageFieldImage;
  perkOne?: string;
  perkTwo?: string;
  perkThree?: string;
}

export const PerkCard = ({
  title,
  description,
  image,
  perkOne,
  perkTwo,
  perkThree,
}: PerkCardProps) => {
  return (
    <div className="group flex min-h-[360px] flex-col justify-between border border-solid border-x-transparent border-y-primary-0 p-6 transition-all hover:justify-normal hover:rounded-xl hover:border hover:border-secondary-0 hover:bg-white-0">
      <div className="flex flex-col">
        <Heading
          as="h4"
          size="2xl"
          className="mb-4 text-primary-0 group-hover:text-secondary-0 md:text-3xl"
        >
          {title}
        </Heading>
        <Paragraph
          as="p"
          size="lg"
          className="text-primary-0 group-hover:hidden group-hover:opacity-0"
        >
          {description}
        </Paragraph>
      </div>
      <div className="flex items-end justify-between group-hover:hidden group-hover:opacity-0">
        <ArrowDiagonalIcon className="h-10 w-10"></ArrowDiagonalIcon>
        <PrismicImage
          field={image}
          height={image.dimensions?.height}
          width={image.dimensions?.width}
          alt=""
        ></PrismicImage>
      </div>
      <div className="hidden flex-col space-y-4 opacity-0 transition-all group-hover:flex group-hover:opacity-100">
        {perkOne && (
          <div className="flex">
            <CheckIcon
              className="mr-4 min-w-[20px] stroke-secondary-0"
              pathClassName="fill-secondary-0"
            ></CheckIcon>
            <Paragraph as="p" size="base" className="text-primary-0">
              {perkOne}
            </Paragraph>
          </div>
        )}
        {perkTwo && (
          <div className="flex">
            <CheckIcon
              className="mr-4 min-w-[20px] stroke-secondary-0"
              pathClassName="fill-secondary-0"
            ></CheckIcon>
            <Paragraph as="p" size="base" className="text-primary-0">
              {perkTwo}
            </Paragraph>
          </div>
        )}
        {perkThree && (
          <div className="flex">
            <CheckIcon
              className="mr-4 min-w-[20px] stroke-secondary-0"
              pathClassName="fill-secondary-0"
            ></CheckIcon>
            <Paragraph as="p" size="base" className="text-primary-0">
              {perkThree}
            </Paragraph>
          </div>
        )}
      </div>
    </div>
  );
};
