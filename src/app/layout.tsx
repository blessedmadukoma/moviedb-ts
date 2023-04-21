import "./globals.css";

export const metadata = {
  title: "Movie DB",
  description:
    "Movie Database Search App using Nextjs, TailwindCSS and Typescript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
