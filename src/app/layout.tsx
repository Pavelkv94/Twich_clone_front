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

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EpicStream",
  description: "EpicStream is a platform for streaming and watching streams",
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
