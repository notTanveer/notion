import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/providers/next-theme-provider";
import { DM_Sans } from "next/font/google";
import { twMerge } from "tailwind-merge";
import AppStateProvider from "@/lib/providers/state-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={twMerge('bg-background', inter.className)}>
        <AppStateProvider>
        <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        >
          {children}
          </ThemeProvider>
        </AppStateProvider>
      </body>
    </html>
  );
}
