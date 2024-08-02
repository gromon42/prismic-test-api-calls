import { Bounded, PerkCard, SectionTitles } from "@/components/pieces";
import { Content, asText } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `PerkColumns`.
 */
export type PerkColumnsProps = SliceComponentProps<Content.PerkColumnsSlice>;

/**
 * Component for "PerkColumns" Slices.
 */
const PerkColumns = ({ slice }: PerkColumnsProps): JSX.Element => {
  return (
    <Bounded
      as="section"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-12 md:py-24"
    >
      <SectionTitles
        title={slice.primary.title}
        subtitle={slice.primary.subtitle}
      ></SectionTitles>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-16">
        {slice.items.map((item, i) => (
          <PerkCard
            key={i}
            title={asText(item.title)}
            description={asText(item.description)}
            image={item.image}
            perkOne={asText(item.perk_one)}
            perkTwo={asText(item.perk_two)}
            perkThree={asText(item.perk_three)}
          ></PerkCard>
        ))}
      </div>
    </Bounded>
  );
};

export default PerkColumns;
