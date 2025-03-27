
import AutoModal from "@/components/ui/auto-modal";
import "@/styles/index.scss";
import { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google"
import Analytics from "@/components/analytics";
import dynamic from "next/dynamic";
import Analytics2 from "@/components/Analytics2";
const PixelTracker = dynamic(() => import("@/components/pixel-tracker"), { ssr: false });

export const metadata: Metadata = {
  title: 'Small Box Office',
  description: 'Small Box Office, based in Delhi, specializes in SEO, web development, digital marketing, and video production to elevate your brand and drive results online.',
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-PT76GSW8" />


      <head>
        <Analytics2 />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700;900&family=Kanit:wght@400;500;600;700&display=swap"
        />
      </head>
      <AutoModal />
      <body>

        <Analytics />
        {children}</body>
    </html>
  );
}
