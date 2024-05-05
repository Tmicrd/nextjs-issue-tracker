import NavBar from "@/app/NavBar";
import { Container, Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Issue Tracker",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme accentColor="violet" radius="large">
          <NavBar />
          <main className="p-5">
            <Container>{children}</Container>
          </main>
          {/* <ThemePanel /> use this ThemePanel to customise theme  */}
        </Theme>
      </body>
    </html>
  );
}
