import FooterLinks from "@/slices/FooterLinks";
import { asText } from "@prismicio/client";
import { PrismicImage, PrismicLink } from "@prismicio/react";
import { ElementType } from "react";
import {
  FooterDocument,
  FooterLinksSlice,
  SocialsSlice,
} from "../../../prismicio-types";
import Socials from "../../slices/Socials/index";
import { Bounded, Paragraph } from "../pieces";

export interface FooterProps {
  footer?: FooterDocument;
}

export const Footer = ({ footer }: FooterProps) => {
  const links = footer?.data.slices.filter(
    (slice) => slice.slice_type === "footer_links"
  );
  const socials = footer?.data.slices.filter(
    (slice) => slice.slice_type === "socials"
  )[0];

  const renderLegal = (as: ElementType<any>, size: any) => {
    return (
      <>
        <PrismicLink
          field={footer?.data.cookies_link}
          className="cursor-pointer"
        >
          <Paragraph
            as={as}
            size={size}
            className="text-primary-600- transition-colors hover:text-sky-blue-0"
          >
            {asText(footer?.data.cookies_label)}
          </Paragraph>
        </PrismicLink>
        <PrismicLink
          field={footer?.data.legal_documents_link}
          className="cursor-pointer"
        >
          <Paragraph
            as={as}
            size={size}
            className="text-primary-600- transition-colors hover:text-sky-blue-0"
          >
            {asText(footer?.data.legal_documents_label)}
          </Paragraph>
        </PrismicLink>
        <PrismicLink
          field={footer?.data.privacy_policy_link}
          className="cursor-pointer"
        >
          <Paragraph
            as={as}
            size={size}
            className="text-right text-primary-600- transition-colors hover:text-sky-blue-0 md:text-center"
          >
            {asText(footer?.data.privacy_policy_label)}
          </Paragraph>
        </PrismicLink>
        <PrismicLink
          field={footer?.data.security_link}
          className="cursor-pointer"
        >
          <Paragraph
            as={as}
            size={size}
            className="text-primary-600- transition-colors hover:text-sky-blue-0"
          >
            {asText(footer?.data.security_label)}
          </Paragraph>
        </PrismicLink>
      </>
    );
  };

  return (
    <footer className="bg-grey-900 py-12 md:py-20">
      <Bounded as="section">
        <div className="mb-6 border-b border-t border-solid border-primary-400- pb-6 pt-9">
          <div className="flex flex-col space-y-9 md:flex-row md:space-x-20 md:space-y-0">
            <div className="flex flex-col md:w-[270px]">
              <div className="mb-9 flex items-center justify-between md:mb-0">
                <PrismicLink
                  field={footer?.data.logo_link}
                  className="text-center md:mb-12 md:text-left lg:min-w-min"
                >
                  <PrismicImage
                    field={footer?.data.logo}
                    width={footer?.data.logo.dimensions?.width}
                    alt=""
                    className="h-[45px] w-[176px]"
                  ></PrismicImage>
                </PrismicLink>
                <div className="flex md:hidden">
                  <Socials slice={socials as SocialsSlice}></Socials>
                </div>
              </div>
            </div>
            {links?.map((link) => (
              <FooterLinks key={link.id} slice={link as FooterLinksSlice} />
            ))}
          </div>
          <div className="hidden items-center justify-end md:flex">
            <Socials slice={socials as SocialsSlice}></Socials>
          </div>
        </div>
        <div className="hidden items-center justify-between md:flex">
          <ul className="flex items-center space-x-10">
            {renderLegal("li", "base")}
          </ul>
          <Paragraph as="p" size="xs" className="text-primary-600-">
            WeMaintain {new Date().getFullYear()} |{" "}
            {asText(footer?.data.copyright_label)}
          </Paragraph>
        </div>
        <div className="grid grid-cols-3 gap-4 md:hidden">
          {renderLegal("p", "xs")}
          <Paragraph as="p" size="xs" className="col-span-2 text-primary-600-">
            WeMaintain {new Date().getFullYear()} |{" "}
            {asText(footer?.data.copyright_label)}
          </Paragraph>
        </div>
      </Bounded>
    </footer>
  );
};
