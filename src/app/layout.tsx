import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav-bar";
import GeneralFooter from "@/components/general-footer";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Special Painting",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="p-0 m-0 h-full">
      <body className="bg-background-white dark:bg-background-dark text-black dark:text-white overflow-x-hidden p-0 m-0 h-full">
        <Providers>
          <Navbar />
          {children}
          <GeneralFooter />
        </Providers>
      </body>
    </html>
  );
}
