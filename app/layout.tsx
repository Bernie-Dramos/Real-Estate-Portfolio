import type React from "react"
import { Inter, Montserrat } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/components/language-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
})

export const metadata = {
  title: "Chélize Nell - Premium Real Estate in Mozambique",
  description:
    "Elevating Real Estate in Mozambique with Unmatched Service. Specializing in luxury properties and exceptional client experiences.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} antialiased`}>
      <body className="min-h-screen bg-white">
        <LanguageProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
