import "./globals.css";
import type { Metadata } from "next";
import { Provider } from "@/components/provider";

import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";

const spaceMono = localFont({
  src: [
    {
      path: "../public/fonts/space-mono/SpaceMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/space-mono/SpaceMono-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/space-mono/SpaceMono-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/space-mono/SpaceMono-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  title: "AppVerify",
  generator: "Next.js",
  applicationName: "AppVerify",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Disposable Email Detection",
    "Fraud Prevention",
    "Email Verification",
    "Anti-Fraud Solutions",
    "Email Validation",
    "Disposable Email Checker",
    "Fraudulent Activity Prevention",
    "Secure Email Verification",
    "Online Security",
    "Email Fraud Detection",
    "Anti-Spam Email Verification",
    "Disposable Email Blocker",
    "Email Security",
    "Fraud Detection Software",
    "Email Authenticity Check",
    "Prevent Email Fraud",
    "Email Scam Prevention",
    "Disposable Email Prevention",
    "Email Verification Service",
    "Email Fraud Protection",
  ],
  authors: [
    { name: "Virgil", url: "https://obedd.vercel.app" },
    { name: "AppAutomations", url: "https://appautomations.com" },
  ],
  creator: "Virgil",
  publisher: "AppAutomations",
  alternates: {},
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://AppVerify.vercel.app"),
  openGraph: {
    title: "AppVerify",
    description:
      "AppVerify is a secure platform and api that detects disposable email addresses, preventing fraudulent activities and ensuring the integrity of online interactions.",
    url: "https://AppVerify.vercel.app",
    siteName: "AppVerify",
    // images: [
    //   {
    //     url: "https://AppVerify.vercel.app/og.png",
    //     width: 800,
    //     height: 600,
    //   },
    //   {
    //     url: "https://AppVerify.vercel.app/og-dark.png",
    //     width: 1800,
    //     height: 1600,
    //     alt: "Next.js, TailwindCSS and shadcn-ui Starter Template",
    //   },
    // ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${spaceMono.className}`}>
        <Provider attribute="class" defaultTheme="system" enableSystem>
          <main
            className={`bg-white text-zinc-700 dark:bg-black dark:text-zinc-400`}
          >
            {children}
          </main>
        </Provider>
        <Toaster />
      </body>
    </html>
  );
}
