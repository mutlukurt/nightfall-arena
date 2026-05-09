import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "NIGHTFALL ARENA | Premium Dark Fantasy MOBA",
  description: "Join the battle in the Eclipse Fold. Choose your hero and dominate the arena in this cinematic dark fantasy MOBA experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} antialiased`}>
      <body className="bg-charcoal text-white font-inter noise-overlay">
        {children}
      </body>
    </html>
  );
}
