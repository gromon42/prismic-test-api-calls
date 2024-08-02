"use client";

import { DropdownArrowIcon } from "@/components/icons";
import { Paragraph } from "@/components/pieces";
import { Float } from "@headlessui-float/react";
import { Menu } from "@headlessui/react";
import {
  FilledContentRelationshipField,
  ImageFieldImage,
  RichTextField,
  TitleField,
  asText,
  isFilled,
} from "@prismicio/client";
import { PrismicLink } from "@prismicio/react";
import clsx from "clsx";
import React from "react";
import {
  NavItemSliceDefault,
  SubNavItemSlice,
  SubnavDocumentData,
} from "../../../prismicio-types";
import SubNavItem from "../SubNavItem";

export interface NavItemProps {
  slice: NavItemSliceDefault;
  mode: "desktop" | "mobile";
}

export interface NavItemColumnProps {
  title: TitleField;
  slices: SubNavItemSlice[];
}

export interface NavItemColumnItemProps {
  label: RichTextField;
  icon?: ImageFieldImage;
}

export interface NavItemElementProps {
  label: string;
  open: boolean;
}

export interface NavItemContentProps {
  subNavItem: FilledContentRelationshipField<
    "subnav",
    string,
    SubnavDocumentData
  >;
  open: boolean;
}

export const NavItemColumn = ({ title, slices }: NavItemColumnProps) => {
  return (
    <div className="flex w-[248px] flex-col">
      <div className="border-b border-solid border-primary-0 py-2">
        <Paragraph as="h4" size="xs" uppercase weight="bold">
          {asText(title)}
        </Paragraph>
      </div>
      <ul
        className={clsx(
          "pt-5",
          slices[0].variation === "card" && "grid grid-cols-2 gap-4"
        )}
      >
        {slices?.map((slice, index) => (
          <React.Fragment key={index}>
            <SubNavItem slice={slice} slices={slices} />
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export const NavItemElement = ({ label, open }: NavItemElementProps) => {
  return (
    <div className="group flex items-center">
      <Paragraph
        size="xs"
        uppercase
        weight="bold"
        className={clsx(
          open && "text-primary-300-",
          "transition-all hover:text-primary-300-"
        )}
      >
        {label}
      </Paragraph>
      <DropdownArrowIcon
        className={clsx("ml-2 !h-4 !w-4 transition-all", open && "rotate-180")}
        pathClassName={clsx(
          "stroke-primary-0 group-hover:stroke-primary-300-",
          open && "stroke-primary-300-"
        )}
      ></DropdownArrowIcon>
    </div>
  );
};

const NavItemContentMobile = ({ subNavItem, open }: NavItemContentProps) => {
  return (
    <>
      <Menu.Button className="group flex items-center outline-none">
        <NavItemElement label={subNavItem?.uid as string} open={open} />
      </Menu.Button>
      <Menu.Items className="mt-4 divide-y bg-white-0 p-6 pb-0 pl-0 focus:outline-none">
        <div className="flex flex-col space-y-6">
          {isFilled.sliceZone(subNavItem?.data?.slices) && (
            <NavItemColumn
              title={subNavItem.data?.title_column_1 as TitleField}
              slices={subNavItem?.data?.slices as SubNavItemSlice[]}
            ></NavItemColumn>
          )}
          {isFilled.sliceZone(subNavItem?.data?.slices) && (
            <NavItemColumn
              title={subNavItem.data?.title_column_2 as TitleField}
              slices={subNavItem?.data?.slices1 as SubNavItemSlice[]}
            ></NavItemColumn>
          )}
        </div>
      </Menu.Items>
    </>
  );
};

/**
 * @typedef {import("@prismicio/client").Content.NavItemSlice} NavItemSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NavItemSlice>} NavItemProps
 * @param { NavItemProps }
 */
const NavItem = ({ slice, mode }: NavItemProps) => {
  const subNavItem = isFilled.contentRelationship<
    "subnav",
    string,
    SubnavDocumentData
  >(slice?.primary?.sub_nav_item)
    ? slice?.primary?.sub_nav_item
    : null;

  if (subNavItem) {
    return (
      <Menu as="div" className="relative mr-8 outline-none last:mr-0">
        {({ open }) => (
          <div>
            {mode === "mobile" ? (
              <NavItemContentMobile subNavItem={subNavItem} open={open} />
            ) : (
              <Float
                autoPlacement
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Button className="group flex items-center outline-none">
                  <NavItemElement
                    label={asText(slice.primary.name)}
                    open={open}
                  />
                </Menu.Button>
                <Menu.Items className="mt-4 rounded-md bg-white-0 p-6 shadow-xl focus:outline-none">
                  <div className="flex space-x-10">
                    {isFilled.sliceZone(subNavItem?.data?.slices) && (
                      <NavItemColumn
                        title={subNavItem.data?.title_column_1 as TitleField}
                        slices={subNavItem?.data?.slices as SubNavItemSlice[]}
                      ></NavItemColumn>
                    )}
                    {isFilled.sliceZone(subNavItem?.data?.slices) && (
                      <NavItemColumn
                        title={subNavItem.data?.title_column_2 as TitleField}
                        slices={subNavItem?.data?.slices1 as SubNavItemSlice[]}
                      ></NavItemColumn>
                    )}
                  </div>
                </Menu.Items>
              </Float>
            )}
          </div>
        )}
      </Menu>
    );
  }

  return (
    <PrismicLink field={slice?.primary?.link} className="cursor-pointer">
      <Paragraph size="xs" uppercase weight="bold">
        {asText(slice?.primary?.name)}
      </Paragraph>
    </PrismicLink>
  );
};

export default NavItem;
