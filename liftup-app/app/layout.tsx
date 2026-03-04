import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LiftUp | Founder Portal",
  description: "LiftUp Hiring Partner Registration & Talent Directory",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased" style={{ fontFamily: "'Inter', sans-serif" }} suppressHydrationWarning>
        <div className="rainbow-bar" />
        {children}
      </body>
    </html>
  );
}
