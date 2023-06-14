import './globals.css'
import { Inter } from 'next/font/google'
import {ThemeProvider} from "@/components/theme-provider";
import Header from "@/components/layout/header";
import {ReactNode} from "react";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Beanstats',
  description: 'Coffee tools and visualisation',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute={"class"} defaultTheme={"system"} enableSystem>
          <Header />
          <main className="flex h-full flex-col items-center p-6 md:p-24 space-y-6">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
