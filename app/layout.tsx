import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "China Resources & Infrastructure Company (CRI)",
    template: "%s | China Resources & Infrastructure Company",
  },
  description:
    "China Resources & Infrastructure Co., Ltd. (CRI). A premier resource procurement and engineering consultancy providing end-to-end engineering consulting, equipment sourcing, heavy machinery export, and resource allocation for global infrastructure, energy, and industrial projects.",
};

export const viewport: Viewport = {
  themeColor: "#1d2126",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${barlowCondensed.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{document.documentElement.classList.add('reveal-ready')}catch(e){}",
          }}
        />
        <SiteHeader />
        <main className="flex flex-1 flex-col">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
