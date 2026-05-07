import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Gabrielle - Software Developer",
  description:
    "Gabrielle's personal portfolio, full-stack developer passionate about creating modern and performant web solutions.",
  keywords: [
    "developer",
    "full-stack",
    "React",
    "Next.js",
    "TypeScript",
    "portfolio",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="bg-slate-950 text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
