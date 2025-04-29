import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Usman Habib - MERN Stack Developer | Cloud Enthusiast | UI/UX Designer",
  description: "Personal portfolio of Usman Habib, a Software Engineering student skilled in MERN Stack, Next.js, AWS Cloud, and UI/UX Design.",
  keywords: "MERN Stack, Next.js, AWS Cloud, UI/UX Design, Software Engineering, Web Development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-900`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
