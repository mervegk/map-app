import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Menu/Header";
import { MarkerColorProvider } from "@/context/MarkerContext";
import { SavedLocationsProvider } from "@/context/SavedLocationsContext";
import ReduxProvider from "@/components/ReduxProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mapp App",
  description: "Map App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
        suppressHydrationWarning >
        <ReduxProvider>
          <SavedLocationsProvider>
            <Header />
            {children}
          </SavedLocationsProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
