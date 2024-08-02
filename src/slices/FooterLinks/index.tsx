import { Heading, Paragraph } from '@/components/pieces';
import { PrismicLink } from '@prismicio/react';

import { asText } from '@prismicio/client';
import { FooterLinksSliceDefault } from '../../../prismicio-types';

export interface FooterProps {
  slice: FooterLinksSliceDefault;
}

/**
 * @typedef {import("@prismicio/client").Content.FooterLinksSlice} FooterLinksSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FooterLinksSlice>} FooterLinksProps
 * @param { FooterLinksProps }
 *
 */
const FooterLinks = ({ slice }: FooterProps) => (
  <div className="md:w-[163px]">
    <Heading as="h3" size="sm" uppercase className="mb-4 font-semibold tracking-wider text-white-0">
      {asText(slice.primary.title)}
    </Heading>
    <ul className="flex flex-col justify-center space-y-1">
      {slice.items.map((item, i, arr) => (
        <PrismicLink key={i} field={item.link_value}>
          <Paragraph as="li" size="base" className="text-primary-600- transition-colors hover:text-sky-blue-0">
            {asText(item.link_name)}
          </Paragraph>
        </PrismicLink>
      ))}
    </ul>
  </div>
);

export default FooterLinks;
