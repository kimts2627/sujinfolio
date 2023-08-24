import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZIMI",
  description: "ZIMI's work",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className + " flex items-center justify-center"}>
        <div className="flex h-screen w-screen max-w-8xl border-x border-solid border-black bg-white">
          <Header />
          <div className="h-full w-px bg-black" />
          <div className="flex-1 pt-10 pb-6 overflow-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}
