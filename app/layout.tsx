import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Dashboard test app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <SessionProvider>
                    <Header></Header>
                    <main className="container mx-auto my-12 pt-12">
                        {children}
                    </main>
                    <footer className="bg-slate-800 text-white p-4 text-center">
                        Copyright
                    </footer>
                </SessionProvider>
            </body>
        </html>
    );
}
