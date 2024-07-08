import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";

// imported components
import AppFooter from "./components/generalComponents/AppFooter"
import page from "./page"
import React from "react";


const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "CW",
    description: "Learn CS/MATH Everyday",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className} id="pagesContainer">
        {children}
        <AppFooter/>
        </body>
        </html>
    );
}
