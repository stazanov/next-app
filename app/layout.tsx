import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {TheHeader} from "@/componets/TheHeader";
import {TheFooter} from "@/componets/TheFooter";


export const metadata: Metadata = {
  title: 'Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <TheHeader/>
        <main className="container">{children}</main>
        <TheFooter/>
      </body>
    </html>
  )
}
