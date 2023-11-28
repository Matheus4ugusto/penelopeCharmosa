import React from "react";

export const metadata = {
    title: "Penelope Charmosa",
    description: "De mulher para mulher, Penelope Charmosa",
    icons: {
        icon: "/imgs/favIcon.ico",
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-br">
        <body>{children}</body>
        </html>
    );
}
