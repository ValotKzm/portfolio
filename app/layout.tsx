import type { Metadata } from "next";
import "./globals.css";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Yannick Souza",
  description: "Portfolio de Yannick Souza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col">
        <div className="grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
