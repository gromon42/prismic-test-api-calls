import "../globals.css";

import { Root } from "@/components/layout";
import { client } from "@/prismicio";

export interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const nav = await client.getSingle("nav", {
    fetchLinks: [
      "subnav.title_column_1",
      "subnav.title_column_2",
      "subnav.slices",
      "subnav.slices1",
    ],
  });

  const footer = await client.getSingle("footer");

  return (
    <Root nav={nav} footer={footer}>
      {children}
    </Root>
  );
}
