"use client"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes";
import DarkModeIcon from '@mui/icons-material/DarkMode';

import React from 'react'

type Props = {}

const ThemeSwitcher = (props: Props) => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [checked, setChecked] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
    if(theme === "light") setChecked(false)
    else setChecked(true)
  }, [])
  
  useEffect(() => {
    if(checked) setTheme("dark")
    else setTheme("light")
  },[checked])

  if(!mounted) return null

  function handleToggleTheme(){
    setChecked(!checked)
  }

  return (
    <>
    <div className={`border-[2px] ${checked ? 'bg-fuchsia-900 border-fuchsia-500' : 'bg-gray-500 border-gray-300'} w-[62px] h-[32px] rounded-full gap-1 cursor-pointer transition-all duration-200`} onClick={handleToggleTheme}>
      <div className="relative w-[52px] flex h-[28px] items-center mx-auto">
        <div className={`absolute ${checked ? 'left-[29px]' : 'left-0'} w-[23px] h-[23px] bg-white rounded-full transition-all duration-200`}></div>
      </div>
    </div>
    <input type="checkbox" id="toggleTheme" onChange={e => {setChecked(e.target.checked)}} checked={checked} hidden={true} />
    </>
  )
}

export default ThemeSwitcher