import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import "./globals.css";
import SessionWrapper from "./SessionWrapper";
import Chatbot from "@/components/Home/Chatbot";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionWrapper>
          <Header />
          <main className="pt-20">{children}</main>
          <Chatbot />
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}