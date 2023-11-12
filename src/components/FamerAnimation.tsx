"use client"
import { motion } from 'framer'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const FadeInTransition = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}

export const FadeTitle = ({ children }: Props) => {
  return (
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{ duration: 0.3 }} 
    >
      {children}
    </motion.div>
  )
}