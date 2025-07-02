import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ApolloClientProvider } from "@/providers/ApolloClientProvider";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Toaster } from "@/providers/ToastProvider";

import "./../styles/globals.css";
import "@/styles/themes.css";
import ColorSwicher from "@/components/ui/elements/ColorSwicher";
import { SITE_KEYWORDS, SITE_NAME } from "@/libs/constants/seo.constants";
import { SITE_DESCRIPTION } from "@/libs/constants/seo.constants";
import { APP_URL } from "@/libs/constants/url.constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO
export const metadata: Metadata = {
  title: {
    absolute: SITE_NAME,
    template: "%s | " + SITE_NAME,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(APP_URL),
  applicationName: SITE_NAME,
  keywords: SITE_KEYWORDS,
  authors: [{ name: "PavelKv", url: new URL('https://github.com/Pavelkv94') }],
  creator: "PavelKv",
  publisher: "PavelKv team",
  generator: "Next.js",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/touch-icons/256x256.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/touch-icons/256x256.png",
      sizes: "256x256",
      type: "image/png",
    },
  },
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    type: "website",
    emails: ["obilonix@proton.com"],
    url: new URL(APP_URL),
    siteName: SITE_NAME,
    images: [
      {
        url: "/touch-icons/512x512.png",
        width: 512,
        height: 512,
        alt: SITE_NAME
      }
    ],
    locale: "en_US",
  },
  twitter: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/touch-icons/512x512.png",
        width: 512,
        height: 512,
        alt: SITE_NAME
      }
    ],
  },
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  //i18n
  const locale = await getLocale();
  const messages = (await getMessages()) as Record<string, string>;


  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ColorSwicher />

        <ApolloClientProvider>
          <NextIntlClientProvider messages={messages}>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              <Toaster />
              {children}
            </ThemeProvider>
          </NextIntlClientProvider>
        </ApolloClientProvider>
      </body>
    </html>
  );
}
