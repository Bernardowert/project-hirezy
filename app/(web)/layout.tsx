import type { Metadata } from "next";
import { Header } from "../components/header";
import { Footer } from "../components/footer";



export const metadata: Metadata = {
  title: "Project - Hirezy",
  description: "Projeto Hirezy para dicas de empregos",
};

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <>
        <Header/>
        {children}
        <Footer/>
     </>
  );
}
