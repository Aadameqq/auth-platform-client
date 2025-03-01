import type { Metadata } from "next";
import "./globals.css";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import Navbar from "./_components/navbar";

export const metadata: Metadata = {
  title: "Contest App",
  description: "Platform for organizing programming contests",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MantineProvider>
          <Navbar />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
