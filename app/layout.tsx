import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { VercelToolbar } from '@vercel/toolbar/next';
import Layout from "@/src/layouts/Layout";
import "./globals.css";

export const metadata: Metadata = {
    title: "ThinkHome",
    description: "Kompletní správa a podpora IT pro firmy.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    // Development check for toolbar (though component handles internal logic, explicit check doesn't hurt, but sticking to simple inclusion)
    const shouldInjectToolbar = process.env.NODE_ENV === 'development';

    return (
        <html lang="cs">
            <head>
                <link
                    href="https://fonts.cdnfonts.com/css/satoshi?styles=135009,135004,135005,135006,135007,135008,135002,135003,135000,135001"
                    rel="stylesheet"
                />
            </head>
            <body className="bg-thinkWhite text-thinkBlack antialiased">
                <Layout>
                    {children}
                </Layout>
                <Analytics />
                <SpeedInsights />
                {shouldInjectToolbar && <VercelToolbar />}
                {/* Yeastar Live Chat Widget */}
                <Script
                    src="https://thinkhome.euycm.yeastarcloud.com/live_chat.v1.0.0.js?channelNumber=LC00000"
                    strategy="afterInteractive"
                />
            </body>
        </html>
    );
}
