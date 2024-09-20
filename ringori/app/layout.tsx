import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ringori - Home",
  description: "Ringo Origo's Homepage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
