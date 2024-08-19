export interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <body lang="fr">{children}</body>
    </html>
  );
}
