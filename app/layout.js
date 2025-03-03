"use client";
import { SessionProvider } from "next-auth/react";
import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import "./globals.css";


export default function RootLayout({ children }) {
  console.log(children);
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
