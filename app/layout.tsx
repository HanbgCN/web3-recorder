import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiderBar } from "@/components/sider-bar";
import { NavHeader } from "@/components/nav-header";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PageContainer } from "@/components/page-container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web3 Recorder",
  description: "Web3 Projects I have joined.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} w-full h-screen flex flex-row`}>
        <aside className="shrink-0">
          <SiderBar />
        </aside>
        <main className="w-full h-full flex flex-col">
          <NavHeader />
          <ScrollArea className="flex-grow-0 my-2">
            <PageContainer>{children}</PageContainer>
          </ScrollArea>
        </main>
      </body>
    </html>
  );
}
