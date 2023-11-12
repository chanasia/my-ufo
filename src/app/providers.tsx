"use client"
import { ThemeProvider } from 'next-themes'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function Providers({ children }: Props) {
  return <ThemeProvider>{children}</ThemeProvider>
}