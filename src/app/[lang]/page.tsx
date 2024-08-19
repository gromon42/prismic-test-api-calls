import { Page } from "@/components/templates";
import { Locale } from "@/enums";
import { client } from "@/prismicio";

export interface HomePageProps {
  params: {
    lang: Locale;
  };
}

export default async function HomePage({ params: { lang } }: HomePageProps) {
  const home = await client.getSingle("home", { lang });

  return <Page page={home}></Page>;
}
