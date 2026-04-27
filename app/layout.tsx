import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Undangan Digital",
  description: "Project Undangan Wisuda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}