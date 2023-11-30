"use client";

import Providers from "@/app/providers";
import GlobalStyles from "@/styles/global";
import StyledComponentsRegistry from "../regystry";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <StyledComponentsRegistry>
            <GlobalStyles/>
            <Providers>
                <Header/>
                <main>{children}</main>
                <Footer/>
            </Providers>
        </StyledComponentsRegistry>
    );
}
