import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "@fontsource/fira-code/400.css";
import "@fontsource/fira-code/500.css";
import "./globals.css";

// Full address of the live site, used for link previews (LinkedIn, iMessage, Slack).
// Set NEXT_PUBLIC_SITE_URL when building, for example https://danwebstudio.com
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "";

export const metadata: Metadata = {
  title: "DAN Web Studio | Custom Websites and Web Applications, Columbia, MD",
  description:
    "DAN Web Studio is a web and software development studio in Columbia, Maryland. We build custom WordPress websites, React and Next.js web applications, and internal business tools.",
  icons: { icon: "/favicon.png", apple: "/apple-touch-icon.png" },
};

// Runs before the page paints, so a saved theme doesn't flash the wrong colors.
const themeScript = `try{var t=localStorage.getItem('theme');if(t==='dark'||t==='light')document.documentElement.setAttribute('data-theme',t)}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <meta name="theme-color" content="#13307A" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="DAN Web Studio" />
        <meta property="og:description" content="Custom websites and software built around your business. A web and software development studio in Columbia, Maryland." />
        <meta property="og:image" content={`${SITE_URL}/og-image.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body>{children}</body>
    </html>
  );
}
