"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "#3E3B38" : "light")}
    >
      <Sun className="h-[1.5rem] w-[1.3rem] #3E3B38:hidden" />
      <Moon className="hidden h-5 w-5 #3E3B38:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
