import "./globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { draftMode } from "next/headers";
import { VisualEditing, toPlainText } from "next-sanity";
import { Toaster } from "sonner";

import DraftModeToast from "@/components/DraftModeToast";
// import Footer from "@/app/components/Footer";
import Header from "@/components/Header";
import { SanityLive } from "@/sanity/lib/live";
import { handleError } from "./client-utils";

import localFont from 'next/font/local'
const work_sans = localFont({
  src: [
    {
      path: '/fonts/work-sans-v23-latin-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '/fonts/work-sans-v23-latin-500.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '/fonts/work-sans-v23-latin-600.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '/fonts/work-sans-v23-latin-700.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-work-sans',
  display: 'swap',
  fallback: ['sans-serif'],
  preload: true,
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isEnabled: isDraftMode } = await draftMode();

  return (
    <html lang="en" className={`${work_sans.variable} bg-white text-black`}>
      <body>
        <section className="min-h-screen">
          {/* The <Toaster> component is responsible for rendering toast notifications used in /app/client-utils.ts and /app/components/DraftModeToast.tsx */}
          <Toaster />
          {isDraftMode && (
            <>
              <DraftModeToast />
              {/*  Enable Visual Editing, only to be rendered when Draft Mode is enabled */}
              <VisualEditing />
            </>
          )}
          {/* The <SanityLive> component is responsible for making all sanityFetch calls in your application live, so should always be rendered. */}
          <SanityLive onError={handleError} />
          <Header />
          <main className="">{children}</main>
          {/* <Footer /> */}
        </section>
        <SpeedInsights />
      </body>
    </html>
  );
}
