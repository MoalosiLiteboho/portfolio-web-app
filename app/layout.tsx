import "@/style/globals.css";
import {ReactNode} from "react";
import type {Metadata} from "next";
import {Providers} from "@/app/providers";
import {NavigationBar} from "@/components/navigation/navigation-bar";
import {Footer} from "@/components/footer";

export const metadata: Metadata = {
    title: "portfolio",
    description: "Moalosi Liteboho Portfolio Web App",
};

interface RootLayoutProps {
    children: ReactNode;
}

export default function RootLayout({children}: Readonly<RootLayoutProps>) {
    return (
        <html lang="en">
            <body>
                <Providers>
                    <NavigationBar />
                    {children}
                    <Footer />
                </Providers>
            </body>
        </html>
  );
}
