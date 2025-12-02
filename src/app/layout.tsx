import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hack The Space",
  description:
    "Hack The Space is an exciting 24-hour offline hackathon for all the nerds out there✨. Empowering young minds😇. Turn Ideas into Impact!🚀 that takes place in Bhilai, Chhattisgarh",
  openGraph: {
    title: "Hack The Space",
    description:
      "Hack The Space is an exciting 24-hour offline hackathon for all the nerds out there✨. Empowering young minds😇. Turn Ideas into Impact!🚀 that takes place in Bhilai, Chhattisgarh",
    url: "https://hackthespace.co",
    siteName: "Hack The Space",
    type: "website",
  },
  twitter: {
    title: "Hack The Space",
    description:
      "Hack The Space is an exciting 24-hour offline hackathon for all the nerds out there✨. Empowering young minds😇. Turn Ideas into Impact!🚀 that takes place in Bhilai, Chhattisgarh",
    card: "summary_large_image",
    site: "@HackTheSpace_",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
