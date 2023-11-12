import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | Chanasia',
  description: 'Personal website',
}

export default function ProjextsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}
