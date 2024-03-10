import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiderBar } from "@/components/sider-bar";
import { ScrollArea } from "@/components/scroll-area";
import { NavHeader } from "@/components/nav-header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web3 Recorder",
  description: "Record project I have joined.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-row`}>
        <aside className="w-[280px]">
          <SiderBar />
        </aside>
        <div className="flex flex-1">
          <ScrollArea className="flex flex-col" hasScrollTitle>
            <NavHeader scrollTitle="bghan20" />
            {children}
          </ScrollArea>
        </div>
      </body>
    </html>
  );
}
