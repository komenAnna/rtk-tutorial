import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers"
import Navbar from './components/Navbar'

import "./globals.css";
import { BrowserRouter } from "react-router-dom";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Redux ToolKit",
  description: "A tutorial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
          <Providers>
            <Navbar />
            {children}
          </Providers>
      </body>
    </html>
  );
}
