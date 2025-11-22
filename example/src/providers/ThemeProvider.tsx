import { createContext, useContext, useState } from 'react'

export type Theme = 'dark' | 'light'
type Props = {
  theme: Theme
  onChangeTheme: (theme: Theme) => void
}

const ThemeContext = createContext({} as Props)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')

  function onChangeTheme(theme: Theme) {
    setTheme(theme)
  }

  return (
    <ThemeContext.Provider value={{ theme, onChangeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useThemeContext() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider')
  }
  return context
}
