import type { Metadata } from "next"
import { Noto_Sans_KR } from "next/font/google"
import "./globals.scss"
import { PropsWithChildren } from "react"
import ReactQueryProvider from "./_components/ReactQueryBoundry"
import ReduxProvider from "./_components/ReduxProvider"
import { METADATA } from "@/constant"

type RootLayoutProps = PropsWithChildren

const sans = Noto_Sans_KR({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: METADATA.TITLE,
  description: METADATA.DESCRIPTION,
  icons: {
    icon: "/images/favicon.ico",
  },
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko">
      <body className={sans.className}>
        <ReduxProvider>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </ReduxProvider>
      </body>
    </html>
  )
}
