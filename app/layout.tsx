import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { ThemeProvider } from "@/components/Header/theme-provider"
import { cn } from "@/lib/cn"
import { Header } from "@/components/Header/Header"
import { Footer } from "@/components/Footer/Footer"
import { Newsletter } from "@/components/Footer/Newsletter"
import { Sponsors } from "@/components/Footer/Sponsors"

export const metadata: Metadata = {
  title: "dogano",
  description: "Skyborn"
}

const graphik = localFont({
  src: [
    {
      path: "../public/fonts/graphik-regular.woff2",
      weight: "400"
    },
    {
      path: "../public/fonts/graphik-medium.woff2",
      weight: "500"
    },
    {
      path: "../public/fonts/graphik-black.woff2",
      weight: "900"
    }
  ],
  variable: "--font-graphik",
  display: "swap"
})

const roman = localFont({
  src: [
    {
      path: "../public/fonts/roman-regular.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "../public/fonts/roman-oblique.woff2",
      weight: "400",
      style: "oblique"
    },
    {
      path: "../public/fonts/roman-bold-oblique.woff2",
      weight: "700",
      style: "italic"
    },
    {
      path: "../public/fonts/roman-bold.woff2",
      weight: "700",
      style: "normal"
    }
  ],
  variable: "--font-roman",
  display: "swap"
})

const supria = localFont({
  src: [
    {
      path: "../public/fonts/supria-black.woff2",
      weight: "400"
    }
  ],
  variable: "--font-supria",
  display: "swap"
})

const seriftext = localFont({
  src: [
    {
      path: "../public/fonts/seriftext.woff2",
      weight: "400"
    }
  ],
  variable: "--font-seriftext",
  display: "swap"
})

const sans = localFont({
  src: [
    {
      path: "../public/fonts/sanstext.woff2",
      weight: "400"
    },
    {
      path: "../public/fonts/sansbold.woff2",
      weight: "700"
    }
  ],

  variable: "--font-sans",
  display: "swap"
})

const mono = localFont({
  src: [
    {
      path: "../public/fonts/monoregular.ttf",
      weight: "400"
    }
  ],
  variable: "--font-mono",
  display: "swap"
})

const aktura = localFont({
  src: [
    {
      path: "../public/fonts/aktura-regular.woff2",
      weight: "400"
    }
  ],
  variable: "--font-aktura",
  display: "swap"
})

const fonts = [graphik, supria, sans, seriftext, mono, aktura, roman]

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        className={cn(
          "relative h-full antialiased",
          `${fonts[0].className} ${fonts[1].variable} ${fonts[2].variable} ${fonts[3].variable} ${fonts[4].variable} ${fonts[5].variable} ${fonts[6].variable}`
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main className="background dark:bg-c-text bg-c-bg relative flex min-h-screen flex-col">
            <Header />
            <div className="flex-1 flex-grow">{children}</div>
            <Newsletter />
            <Sponsors />
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
