import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Vocabulary Level Test - Alphine",
    description: "Please answer the following questions so we can measure your English vocabulary level.",
};

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
          <section className="py-20 max-w-2xl mx-auto">
            <h1 className="text-4xl mb-5">📝 Vocabulary Level Test</h1>
            {children}
          </section>
    );
  }