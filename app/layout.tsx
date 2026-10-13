import type { Metadata } from "next";
import { Azeret_Mono, Montserrat } from "next/font/google";
import "./catalog.css";
import Footer from "../components/Footer";

const interfaceFont = Montserrat({
  variable: "--font-ui",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const displayFont = Azeret_Mono({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "700",
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
      <body className={`${interfaceFont.variable} ${displayFont.variable} flex min-h-screen flex-col`}>
        <main className="grow">{children}</main>
        <Footer />
</body>
    </html>
  );
}
