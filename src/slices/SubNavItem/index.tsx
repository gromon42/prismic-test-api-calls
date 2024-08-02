import { ArrowRightIcon } from '@/components/icons';
import { Paragraph } from '@/components/pieces';
import { Menu } from '@headlessui/react';
import { asImageSrc, asText } from '@prismicio/client';
import { PrismicImage, PrismicLink } from '@prismicio/react';
import {
  SubNavItemSlice,
  SubNavItemSliceCard,
  SubNavItemSliceCardPrimary,
  SubNavItemSliceDefault,
  SubNavItemSliceWithIcon,
  SubNavItemSliceWithIconPrimary,
} from '../../../prismicio-types';
import clsx from 'clsx';

/**
 * Props for `SubNavItem`.
 */
export interface SubNavItemProps {
  slice: SubNavItemSliceDefault | SubNavItemSliceCard | SubNavItemSliceWithIcon;
  slices: SubNavItemSlice[];
}

/**
 * Component for "SubNavItem" Slices.
 */
const SubNavItem = ({ slice, slices }: SubNavItemProps): JSX.Element => {
  const icon = (slice.primary as SubNavItemSliceWithIconPrimary).icon;
  const sliceCard = slice.primary as SubNavItemSliceCardPrimary;
  const isLastItem = sliceCard.label === slices[slices.length - 1].primary.label;

  const renderDefault = () => {
    return (
      <>
        <div className="flex items-center">
          {icon && <PrismicImage field={icon} height={24} width={24} className="mr-4 h-6 w-6"></PrismicImage>}
          <Paragraph>{asText(slice.primary.label)}</Paragraph>
        </div>
        <ArrowRightIcon className="!h-4 !w-4 stroke-primary-0 opacity-0 transition-opacity group-hover:opacity-100" />
      </>
    );
  };

  const renderCard = () => {
    return (
      <div className="relative flex items-center">
        <div
          style={{ backgroundImage: `url(${asImageSrc(sliceCard.image)})` }}
          className={clsx('h-[114px] w-[114px] overflow-hidden bg-no-repeat p-4', isLastItem && '!h-[122px] !w-full')}
        >
          <Paragraph size="xs" uppercase weight="bold" className="mb-2 text-white-0">
            {asText(sliceCard.label)}
          </Paragraph>
          <Paragraph size="base" className="max-w-[70%] leading-5 text-white-0">
            {asText(sliceCard.description)}
          </Paragraph>
        </div>
      </div>
    );
  };

  return (
    <PrismicLink field={slice.primary.link} className={clsx(isLastItem && 'col-span-2')}>
      <Menu.Item
        data-slice-variation={slice.variation}
        as="li"
        className={clsx(
          'group flex items-center justify-between rounded-md p-3 transition-all hover:bg-white-100',
          slice.variation === 'card' && '!p-0',
        )}
      >
        {({ active }) => (
          <>
            {(slice.variation === 'default' || slice.variation === 'withIcon') && renderDefault()}
            {slice.variation === 'card' && renderCard()}
          </>
        )}
      </Menu.Item>
    </PrismicLink>
  );
};

export default SubNavItem;
