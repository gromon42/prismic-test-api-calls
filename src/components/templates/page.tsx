import { SliceZone } from "@prismicio/react";
import { PrismicDocument } from "@prismicio/types";
import { notFound } from "next/navigation";
import { components } from "../../slices";

export interface PageProps {
  page: PrismicDocument;
}

export const Page = ({ page }: PageProps) => {
  if (!page?.id) {
    return notFound();
  }

  return (
    <div>
      {page?.data && (
        <SliceZone slices={page?.data.slices} components={components} />
      )}
    </div>
  );
};

export default Page;
