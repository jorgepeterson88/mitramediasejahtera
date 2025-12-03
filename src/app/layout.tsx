import type { Metadata } from "next";
import { Poppins, Lato, Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "PT FIRMA MEDIA SEJAHTERA - Outdoor Advertising & Media Solutions",
  description: "Perusahaan terpercaya dalam bidang iklan billboard, baliho, dan outdoor media. Menyediakan infrastruktur papan iklan, perencanaan proyek, dan konsultasi iklan profesional.",
  keywords: ["billboard", "baliho", "outdoor media", "iklan", "advertising", "media", "infrastruktur", "perencanaan proyek"],
  authors: [{ name: "PT FIRMA MEDIA SEJAHTERA" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "PT FIRMA MEDIA SEJAHTERA - Outdoor Advertising & Media Solutions",
    description: "Solusi periklanan outdoor terpercaya untuk brand dan bisnis Anda",
    url: "https://firma-media.co.id",
    siteName: "PT FIRMA MEDIA SEJAHTERA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PT FIRMA MEDIA SEJAHTERA",
    description: "Solusi periklanan outdoor terpercaya untuk brand dan bisnis Anda",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <meta name="facebook-domain-verification" content="ofemikx2vv6ifrm2xqd9ckdc3eckbh" />
      </head>
      <body
        className={`${poppins.variable} ${lato.variable} ${montserrat.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
