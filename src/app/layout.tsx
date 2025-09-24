import type { Metadata } from "next";
import { StoryblokProvider } from "@/components/StoryblokProvider";
import { apiPlugin, storyblokInit } from "@storyblok/react";
import { Header } from "@/components/ui/header/header";
import "./globals.scss";
import "./theme.scss";
import "./fonts.css";
import { Footer } from "@/components/ui/footer/footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Classic Bowl Hörby",
  description:
    "Vi erbjuder allt från Bowling & Shuffleboard till Bar & Restaurang med fulla rättigheter. Välkomna!",
};

const cachedFetch = (input: any, init?: any): Promise<Response> => {
  return fetch(input, {
    ...init,
    cache: "no-cache",
  });
};

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    fetch: cachedFetch,
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoryblokProvider>
      <html lang="sv">
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </StoryblokProvider>
  );
}
