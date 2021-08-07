import { createCss, ThemeRule } from '@stitches/react'

/** Reference can be found at https://stitches.dev */
const { styled, getCssString, theme, global } = createCss({
  theme: {},
  media: {
    tablet: '(min-width: 765px)',
  },
})

export { styled, getCssString, global as createGlobalStyles }

const commonColors = {
  black: 'hsl(0 0% 0%)',
  white: 'hsl(360 100% 100%)',
}

// TODO: Fix all the colors
export const themes: { [key: string]: ThemeRule & string } = {
  light: theme('light', {
    colors: {
      ...commonColors,
      primary: 'hsl(296 83% 25%)',
      secondary: 'hsl(295 85% 50%)',
      background: 'hsl(300 100% 95%)',
      text: 'hsl(0 0% 100%)',
    },
  }),
  dark: theme('dark', {
    colors: {
      ...commonColors,
      primary: 'hsl(244 13% 21%)',
      secondary: 'hsl(240 14% 35%)',
      background: 'hsl(245 20% 15%)',
      text: 'hsl(330 100% 85%)',
    },
  }),
}
