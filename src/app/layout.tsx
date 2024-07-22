import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./UI/header";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Test Aapp for Fortech",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-sky-200 w-[500px] h-screen inline flex flex-col fixed">

          <Header />
          <p className="text-center text-sky-950 animate-pulse"> Place for some content: </p>
        </div>
        {children}
      </body>
    </html>
  );
}
