import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lunyx — Développeur Web Fullstack",
  description:
    "Portfolio de Lunyx, développeur web basé à Paris. Disponible pour CDI, alternance et missions freelance.",
  keywords: ["développeur web", "fullstack", "paris", "freelance", "next.js"],
  authors: [{ name: "Lunyx" }],
  openGraph: {
    title: "Lunyx — Développeur Web",
    description: "Développeur web basé à Paris. 1 projet livré, disponible immédiatement.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&f[]=cabinet-grotesk@300,400,500,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
