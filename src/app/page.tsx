import { Page } from "@/components/templates";
import { client } from "@/prismicio";

export default async function HomePage() {
  const home = await client.getSingle("home");

  return <Page page={home}></Page>;
}
