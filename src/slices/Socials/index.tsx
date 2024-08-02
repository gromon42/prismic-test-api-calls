import { SocialIcon, SocialIconType } from "@/components/icons";
import { client } from "@/prismicio";
import { FilledContentRelationshipField } from "@prismicio/client";
import { PrismicLink } from "@prismicio/react";
import {
  SocialDocumentData,
  SocialsSliceDefault,
} from "../../../prismicio-types";

export interface SocialsProps {
  slice: SocialsSliceDefault;
}

/**
 * @typedef {import("@prismicio/client").Content.SocialsSlice} SocialsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SocialsSlice>} SocialsProps
 * @param { SocialsProps }
 */
const Socials = async ({ slice }: SocialsProps) => {
  const socialUIDs = slice.items.map(
    (item) =>
      (
        item.social as FilledContentRelationshipField<
          "social",
          string,
          SocialDocumentData
        >
      ).uid
  );

  const socials = await client.getAllByUIDs("social", socialUIDs as string[], {
    fetchLinks: ["social.link", "social.type"],
  });

  return (
    <ul className="flex justify-center space-x-2">
      {socials.map((social, i, arr) => (
        <PrismicLink key={i} field={social.data.link}>
          <li className="cursor-pointer">
            <SocialIcon type={social.data.type as SocialIconType}></SocialIcon>
          </li>
        </PrismicLink>
      ))}
    </ul>
  );
};

export default Socials;
