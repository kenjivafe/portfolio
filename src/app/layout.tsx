import type { Metadata } from "next";
import "./globals.css";
import BodyWrapper from "@/components/BodyWrapper";

export const metadata: Metadata = {
  title: "Kenji Von Ashley - Software Developer",
  description: "Software Developer focused on creating intuitive, accessible, and delightful user experiences for consumer tech products.",
  keywords: ["Software Developer", "Portfolio", "Web Development", "Mobile Development", "UI/UX", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Kenji Von Ashley" }],
  creator: "Kenji Von Ashley",
  icons: {
    icon: "/logos/Northernware-logo.png",
    shortcut: "/logos/Northernware-logo.png",
    apple: "/logos/Northernware-logo.png",
  },
  openGraph: {
    title: "Kenji Von Ashley - Software Developer",
    description: "Software Developer focused on creating intuitive, accessible, and delightful user experiences for consumer tech products.",
    type: "website",
    locale: "en_US",
    url: "https://kenjivafe.github.io",
    siteName: "Kenji Von Ashley Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenji Von Ashley - Software Developer",
    description: "Software Developer focused on creating intuitive, accessible, and delightful user experiences for consumer tech products.",
    creator: "@kenjivafe",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark antialiased scroll-smooth" suppressHydrationWarning>
      <body className="bg-white dark:text-gray-100 dark:bg-gray-900" suppressHydrationWarning>
        <BodyWrapper>
          {children}
        </BodyWrapper>
      </body>
    </html>
  );
}
