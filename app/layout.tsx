import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Logo from "@/app/assets/logo.svg";
import Thumbnail from "@/app/assets/thumbnail.png";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Next-Gen AI Work Assistant for Free - Zeroagent",
  description:
    "Simplify your day-to-day business operations with AI Agents for Free. Connect, manage, and execute tasks across multiple apps in one platform using simple chat prompts. Work smarter by eliminating repetitive work!",
  icons: [
    { rel: "icon", url: Logo },
    { rel: "apple-touch-icon", url: Logo },
  ],
  applicationName: "Next-Gen AI Work Assistant for Free - Zeroagent",
  referrer: "origin",
  keywords: [
    "AI Agent",
    "Apps",
    "Task Automation",
    "Work Assistant",
    'Next-Gen AI',
    "Business Apps",
    "Tools",
    "Productivity",
    "Integrations",
  ],
  authors: [
    { name: "ZeroMagic Labs", url: "https://github.com/zeroagentio" },
    { name: "Zeroagent", url: "https://zeroagent.io/" },
  ],
  openGraph: {
    title: "Next-Gen AI Work Assistant for Free - Zeroagent",
    description:
      "Simplify your day-to-day business operations with AI Agents for Free. Connect, manage, and execute tasks across multiple apps in one platform using simple chat prompts. Work smarter by eliminating repetitive work!",
    url: "https://zeroagent.io/", // Replace with your actual website URL
    siteName: "Zeroagent",
    images: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/zeromagicsite.appspot.com/o/zeroagent-nextgen-thumbnail.png?alt=media&token=81f32d08-f27d-45ed-9342-0632d8862941', // Thumbnail.src,
        width: 1200,
        height: 630,
        alt: "ZeroAgents in Action",
      },
    ],
    videos: {
      url: "https://www.youtube.com/watch?v=z-XNOPTabIk",
      secureUrl: "https://www.youtube.com/watch?v=z-XNOPTabIk",
      type: "video/youtube",
      width: 1280,
      height: 720,
    },
  },
  twitter: {
    card: "summary_large_image",
    // site: "@zeromagic", // Replace with your actual Twitter handle
    title: "Next-Gen AI Work Assistant for Free - Zeroagent",
    description:
      "Simplify your day-to-day business operations with AI Agents for Free. Connect, manage, and execute tasks across multiple apps in one platform using simple chat prompts. Work smarter by eliminating repetitive work!",
    images: 'https://firebasestorage.googleapis.com/v0/b/zeromagicsite.appspot.com/o/zeroagent-nextgen-thumbnail.png?alt=media&token=81f32d08-f27d-45ed-9342-0632d8862941' //Thumbnail.src, 
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://zeroagent.io/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLD = {
    "@context": "https://schema.org/",
    "@type": "Organization",
    name: "Zeroagent",
    url: "https://zeroagent.io/",
    headline: "Next-Gen AI Work Assistant - Zeroagent",
    description:
      "Simplify your day-to-day business operations with AI Agents for Free. Connect, manage, and execute tasks across multiple apps in one platform using simple chat prompts.",

    subjectOf: {
      "@type": "VideoObject",
      name: "Demo: AI Agents for everyday Business app - Zeroagent",
      description:
        "AI Agents that connects across multiple business apps and perform tasks with simple chat prompts",
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/zeromagicsite.appspot.com/o/zeroagent-nextgen-thumbnail.png?alt=media&token=81f32d08-f27d-45ed-9342-0632d8862941', //Thumbnail.src,
      embedUrl: "https://www.youtube.com/watch?v=z-XNOPTabIk",
    },
  };
  

  return (
    <html lang="en" className="">
      <head>
        <script
          key="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
        />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-RQMXKE8FE1"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
         window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-RQMXKE8FE1');
      `,
          }}
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-RQMXKE8FE1" />
    </html>
  );
}
