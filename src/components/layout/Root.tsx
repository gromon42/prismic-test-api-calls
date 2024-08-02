import { FooterDocument, NavDocument } from "../../../prismicio-types";
import { Footer } from "./Footer";
import { Header } from "./Header";

export interface RootProps {
  nav?: NavDocument;
  footer?: FooterDocument;
  children?: React.ReactNode;
}

export function Root({ nav, footer, children }: RootProps) {
  return (
    <html className="bg-white-100">
      <body>
        <Header nav={nav} />
        <main id="root" role="main">
          {children}
        </main>
        <Footer footer={footer} />
      </body>
    </html>
  );
}

export default Root;
