import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fathurrahman Muhammad",
  description: "My academic web"
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#B9C1E1" },
    { media: "(prefers-color-scheme: dark)", color: "#161B2D" }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-dvh flex flex-col">
        <main className="grow">{children}</main>
      </body>
    </html>
  );
}
