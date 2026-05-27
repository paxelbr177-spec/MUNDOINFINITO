import type { Metadata, Viewport } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-orbitron",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mundo Infinito · Streaming sin límites",
  description:
    "TV en vivo, películas, series, canales premium, pack de fútbol. Mirá en TV, celular, tablet, compu o proyector.",
};

export const viewport: Viewport = {
  themeColor: "#0a0118",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${orbitron.variable} dark`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
