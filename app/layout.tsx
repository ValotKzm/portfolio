import type { Metadata } from "next";
import "./globals.css";

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
      <body>
        {children}
      </body>
    </html>
  );
}
