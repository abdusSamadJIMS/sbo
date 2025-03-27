
import AutoModal from "@/components/ui/auto-modal";
import "@/styles/index.scss";
import { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google"

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
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700;900&family=Kanit:wght@400;500;600;700&display=swap"
        />
      </head>
      <GoogleTagManager gtmId="GTM-PT76GSW8" />
      <AutoModal />
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GRM-PT76GSW8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}</body>
    </html>
  );
}
