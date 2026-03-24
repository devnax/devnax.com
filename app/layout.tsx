import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { cookies } from "next/headers";
import RootContainer from "./Root";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Naxrul Ahmed",
  description: "I'm a passionate Full-Stack Web Developer and an entrepreneur. With a deep interest in building scalable web applications, I specialize in creating efficient, elegant, and user-friendly solutions.",
  icons: {
    icon: "/naxrul.png"
  }
};


export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const cookie = await cookies()
  const theme = cookie.get("xuitm")
  const breakpoint = cookie.get("xuibp") as any

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body cz-shortcut-listen="true">
        <RootContainer theme={theme?.value} breakpoint={breakpoint?.value}>
          {children}
        </RootContainer>
      </body>
    </html>
  );
}
