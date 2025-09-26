import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";


export const metadata: Metadata = {
  title: "Artigos News",
  description: "Na Artigos News, você encontra os melhores artigos e informações publicados por alunos e aprendizado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
