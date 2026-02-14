import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Something For You ❤️",
  description: "Open this when you're alone.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
