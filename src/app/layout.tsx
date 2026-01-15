import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KOPKAR PELINDO - Koperasi Karyawan PT Pelindo",
  description: "Website resmi Koperasi Karyawan PT Pelindo (KOPKAR PELINDO). Menyediakan informasi mengenai kegiatan koperasi, layanan simpan pinjam, dan program kesejahteraan anggota.",
  keywords: ["KOPKAR PELINDO", "Koperasi Pelindo", "Koperasi Karyawan", "Pelindo", "Simpan Pinjam", "Kesejahteraan Karyawan"],
  authors: [{ name: "KOPKAR PELINDO" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "KOPKAR PELINDO",
    description: "Koperasi Karyawan PT Pelindo - Meningkatkan kesejahteraan anggota melalui layanan keuangan terpercaya",
    url: "https://kopkarpelindo.co.id",
    siteName: "KOPKAR PELINDO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KOPKAR PELINDO",
    description: "Koperasi Karyawan PT Pelindo - Meningkatkan kesejahteraan anggota melalui layanan keuangan terpercaya",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
