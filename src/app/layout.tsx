import type { Metadata } from "next";
// import { Geist, Geist_Mono } from 'next/font/google';
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Navbar from "@/components/base/Navbar";
import Footer from "@/components/base/Footer";
import { Suspense } from "react";
import Loading from "./loading";
// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// });

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });

export const metadata: Metadata = {
  title: "ILearnHub",
  description: "IlearnSchool is a program that provides information about the ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <Navbar />
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-screen">
              <Loading />
            </div>
          }
        >
          {children}
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
