import type { Metadata } from "next";
import { Rubik } from 'next/font/google';
import "./globals.css";

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400','500','600','700','800'],
});

export const metadata: Metadata = {
  title: "Test Technique Awen Bourdon",
  description: "Test Technique Awen Bourdon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={rubik.className}
      >
        {children}
      </body>
    </html>
  );
}
