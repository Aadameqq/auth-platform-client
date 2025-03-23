import type { Metadata } from 'next';
import './globals.css';
import {
    AppShell,
    AppShellHeader,
    AppShellMain,
    MantineProvider,
} from '@mantine/core';
import '@mantine/core/styles.css';
import { ReactQueryProvider } from '@/features/layout/react-query';
import React from 'react';
import { Header } from '@/features/layout/headers/default.header';
import { SessionProvider } from 'next-auth/react';

export const metadata: Metadata = {
    title: 'Contest App',
    description: 'Platform for organizing programming contests',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <ReactQueryProvider>
                    <SessionProvider>
                        <MantineProvider defaultColorScheme="dark">
                            <AppShell header={{ height: 60 }} padding={'xl'}>
                                <AppShellHeader>
                                    <Header />
                                </AppShellHeader>

                                <AppShellMain>{children}</AppShellMain>
                            </AppShell>
                        </MantineProvider>
                    </SessionProvider>
                </ReactQueryProvider>
            </body>
        </html>
    );
}
