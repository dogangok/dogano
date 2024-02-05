"use client"
import ThemeIcon from "./ThemeIcon"
import { useTheme } from "next-themes"

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  return (
    <button
      className="header-btn btn-scheme"
      aria-label="Reading Mode"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <ThemeIcon />
    </button>
  )
}
