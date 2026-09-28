import type { Metadata } from "next";
import { Azeret_Mono } from "next/font/google";
import "./catalog.css";
import Footer from "../components/Footer";

const interfaceFont = Azeret_Mono({
  variable: "--font-ui",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Portfolio - Yannick Souza",
  description: "Portfolio de Yannick Souza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${interfaceFont.variable} flex min-h-screen flex-col`}>
        <main className="grow">{children}</main>
        <Footer />
</body>
    </html>
  );
}
