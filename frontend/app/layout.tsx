import type { Metadata } from "next";
import { Rubik } from 'next/font/google';
import { ApolloWrapper } from './graphql/ApolloClient'
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


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
      <body className={rubik.className}>
      <ApolloWrapper>
        <Navbar/>
        {children}
        <Footer/>
      </ApolloWrapper>  
      </body>
    </html>
  );
}
