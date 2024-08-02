import { SliceZone } from "@prismicio/react";
import { notFound } from "next/navigation";
import { HomeDocument } from "../../../prismicio-types";
import { components } from "../../slices";

export interface HomeProps {
  home: HomeDocument;
}

export const Home = ({ home }: HomeProps) => {
  if (!home?.id) {
    return notFound();
  }

  return (
    <div>
      {home?.data && (
        <SliceZone slices={home?.data.slices} components={components} />
      )}
    </div>
  );
};

export default Home;
