/* eslint-disable @next/next/next-script-for-ga */
import "./globals.css";
import type { Metadata } from "next";
import { Roboto, Inter } from "next/font/google";
import { Layout } from "@/components";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sparkling Star",
  description:
    "We are Interior Design & Fit-out company, passionate about creating exceptional spaces that inspire and delight. With a commitment to design excellence and unparalleled customer service, we transform houses into homes and commercial spaces into captivating environments.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <body id="home" className={roboto.className}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
