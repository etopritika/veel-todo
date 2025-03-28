import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ModalProvider from "@/lib/providers/ModalProvider";
import QueryProvider from "@/lib/providers/QueryProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Veel-Todo",
  description: "Todo manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`container px-8 mx-auto min-h-screen ${geistSans.variable} ${geistMono.variable} antialiased flex flex-col`}
      >
        <QueryProvider>
          <ModalProvider>
            <Header />
            {children}
          </ModalProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
