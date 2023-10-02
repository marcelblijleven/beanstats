import './globals.css'
import {Inter} from 'next/font/google'
import {ThemeProvider} from "@/components/theme-provider";
import Header from "@/components/layout/header";
import {ReactNode} from "react";
import {Metadata} from "next";
import {Analytics} from '@vercel/analytics/react';
import {cn} from "@/lib/utils";
import Footer from "@/components/layout/footer";
import {Toaster} from "@/components/ui/toaster";
import {ClerkProvider} from "@clerk/nextjs";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: {
        template: '%s | Beanstats',
        default: 'Beanstats',
    },
    description: "Coffee tools, statistics and visualisations"
}

export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <ClerkProvider>
            <html lang="en" suppressHydrationWarning>
            <body className={cn(inter.className, "min-h-screen antialiased")}>
            <ThemeProvider attribute={"class"} defaultTheme={"system"} enableSystem>
                <div className={"relative min-h-screen"}>
                    <Header/>
                    <main className="flex h-full flex-col items-center pb-12 px-6 pt-6 md:pt-12 space-y-6">
                        {children}
                        <Analytics/>
                    </main>
                    <Toaster/>
                    <Footer/>
                </div>
            </ThemeProvider>
            </body>
            </html>
        </ClerkProvider>
    )
}
