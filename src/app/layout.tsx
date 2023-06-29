import './globals.css'
import {Inter} from 'next/font/google'
import {ThemeProvider} from "@/components/theme-provider";
import Header from "@/components/layout/header";
import {ReactNode} from "react";
import {Metadata} from "next";
import {Analytics} from '@vercel/analytics/react';
import {cn} from "@/lib/utils";
import Footer from "@/components/layout/footer";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: {
        template: '%s | Beanstats',
        default: 'Beanstats',
    },
    description: "Coffee tools, statistics and visualisations"
}

export default function RootLayout({children}: {children: ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={cn(inter.className, "min-h-screen")}>
        <ThemeProvider attribute={"class"} defaultTheme={"system"} enableSystem>
            <div className={"relative min-h-screen"}>
                <Header/>
                <main className="flex h-full flex-col items-center p-6 md:p-24 space-y-6">
                    {children}
                    <Analytics/>
                </main>
                <Footer/>
            </div>
        </ThemeProvider>
        </body>
        </html>
    )
}
