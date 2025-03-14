import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import QueryClientProviders from "@/providers/query-client-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import { Heart, ShoppingBag } from "lucide-react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E-Commerce Product Catalog",
  description: "Developed by Mohsen Mirzeis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <QueryClientProviders>
            <NextTopLoader
              color="#3178c6"
              initialPosition={0.08}
              crawlSpeed={200}
              height={3}
              crawl={true}
              showSpinner={false}
              easing="ease"
              speed={200}
              shadow="0 0 10px #3178c6,0 0 5px #3178c6"
              template='<div class="bar" role="bar">
                            <div class="peg"></div>
                          </div> 
                          <div class="spinner hidden" role="spinner">
                            <div class="spinner-icon"></div>
                          </div>'
              zIndex={1600}
              showAtBottom={false}
            />
            <header className="border-b">
              <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold">
                  ShopCatalog
                </Link>
                <div className="flex items-center gap-4">
                  <Link href="/favorites">
                    <Button variant="ghost" size="icon">
                      <Heart className="h-5 w-5" />
                      <span className="sr-only">Favorites</span>
                    </Button>
                  </Link>
                  <Button variant="ghost" size="icon">
                    <ShoppingBag className="h-5 w-5" />
                    <span className="sr-only">Cart</span>
                  </Button>
                  <ModeToggle />
                </div>
              </div>
            </header>
            <main>{children}</main>
            <footer className="border-t mt-12">
              <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} ShopCatalog. All rights
                reserved.
              </div>
            </footer>
          </QueryClientProviders>
        </ThemeProvider>
      </body>
    </html>
  );
}
