import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";


export const metadata: Metadata = {
  title: "NewsHub",
  description: "Find Daily Insights here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="h-screen">
      <body className="bg-slate-400/50">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
