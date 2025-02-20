
import AutoModal from "@/components/ui/auto-modal";
import "@/styles/index.scss";
import { Metadata } from "next";


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
      <AutoModal />
      <body>{children}</body>
    </html>
  );
}
