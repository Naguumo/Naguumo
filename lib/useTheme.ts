import { useEffect, useState } from 'react'
import { parseCookies, setCookie } from 'nookies'
import { ThemeRule } from '@stitches/react'
import { themes } from '@theme'

const THEME_COOKIE_KEY = 'theme'

export const useTheme = (): [ThemeRule & string, () => void] => {
  const cookies = parseCookies()
  const cookieVal = cookies[THEME_COOKIE_KEY]

  const [theme, setThemeInternal] = useState(themes[cookieVal] ?? themes.light)

  useEffect(() => {
    const classlist = document.getElementById('_app')?.classList
    Object.values(themes).forEach((themeName) => {
      classlist?.toggle(themeName, theme === themeName)
    })
  }, [theme])

  const setTheme = () => {
    const newTheme = theme === themes.light ? themes.dark : themes.light
    setCookie(undefined, THEME_COOKIE_KEY, newTheme)
    setThemeInternal(newTheme)
  }

  return [theme, setTheme]
}
