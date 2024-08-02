import NavItem from "@/slices/NavItem";
import { asText } from "@prismicio/client";
import { PrismicImage, PrismicLink } from "@prismicio/react";
import clsx from "clsx";
import { Route } from "next";
import Link from "next/link";
import { NavDocument, NavItemSliceDefault } from "../../../prismicio-types";
import { Bounded, BurgerButton, Button, Paragraph } from "../pieces";
export interface HeaderProps {
  nav?: NavDocument;
}

export const Header = ({ nav }: HeaderProps) => {
  return (
    <>
      <Bounded
        as="header"
        className={clsx(
          "sticky top-0 z-50 h-[80px] w-full bg-white-0 py-4 transition-[height] duration-500 md:h-[96px] md:py-6 lg:h-[96px] lg:py-6"
        )}
      >
        <div className="flex flex-wrap items-center justify-between">
          <Link href={"/" as Route}>
            <PrismicImage
              field={nav?.data.logo}
              width={nav?.data.logo.dimensions?.width}
              className="h-[45px] w-[136px] md:w-[176px]"
            ></PrismicImage>
          </Link>
          <nav>
            <ul className={clsx("hidden flex-wrap items-center md:flex")}>
              {nav?.data.slices?.map((slice, index) => (
                <NavItem
                  key={index}
                  slice={slice as NavItemSliceDefault}
                  mode="desktop"
                />
              ))}
            </ul>
          </nav>
          <div className="flex items-center">
            <PrismicLink
              field={nav?.data.login_cta_link}
              className="mr-6 hidden cursor-pointer hover:text-primary-300- md:flex"
            >
              <Paragraph
                size="xs"
                uppercase
                weight="bold"
                className="underline underline-offset-8"
              >
                {asText(nav?.data.login_cta_label)}
              </Paragraph>
            </PrismicLink>
            <PrismicLink
              field={nav?.data.contact_us_link}
              className="mr-6 hidden cursor-pointer md:flex"
            >
              <Button color={"primary"} flat>
                {asText(nav?.data.contact_us_cta_label)}
              </Button>
            </PrismicLink>
            <BurgerButton></BurgerButton>
          </div>
        </div>
      </Bounded>
    </>
  );
};
