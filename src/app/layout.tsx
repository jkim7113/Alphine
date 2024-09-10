import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alphine: AI Reading Assistant for English Learners",
  description: "Welcome to Alphine, an AI reading assistant for English learners",
  icons: {
    icon: "/icon/alphine.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="flex min-h-screen flex-col align-middle py-24 p-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
