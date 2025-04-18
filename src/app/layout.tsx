import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import Header from "@/components/Header";
import { MarkerColorProvider } from "@/context/MarkerContext";
import { SavedLocationsProvider } from "@/context/SavedLocationsContext";

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
        <Provider>
          <MarkerColorProvider>
            <SavedLocationsProvider>
              <Header />
              {children}
            </SavedLocationsProvider>
          </MarkerColorProvider>
        </Provider>

      </body>
    </html>
  );
}
