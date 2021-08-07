import type { AppProps } from 'next/app'
import 'modern-normalize'
import { Box } from '@primitives/Box'
import { DefaultHead } from '@components/DefaultHead'
import { SideNav } from '@components/SideNav'
import { useTheme } from '@lib/useTheme'
import { createGlobalStyles } from '@theme'

const globalStyles = createGlobalStyles({
  '*': {
    '&::-webkit-scrollbar': {
      // width: '1rem',
    },
  },
  '#_app': {
    color: '$text',
    backgroundColor: '$background',
  },
  svg: {
    verticalAlign: 'baseline',
  },
})

const App = ({ Component, pageProps }: AppProps) => {
  // useTheme needs to be here to ensure theme class is maintained
  const [_theme] = useTheme()

  globalStyles()

  return (
    <Box id='_app' css={{ display: 'flex', height: '100vh' }}>
      <DefaultHead />
      <SideNav />
      <Box
        as='main'
        css={{
          flex: 1,
          overflow: 'auto',
          margin: '1rem',
          padding: '1rem',
          borderRadius: 10,
          backgroundColor: '$secondary',
        }}
      >
        <Component {...pageProps} />
      </Box>
    </Box>
  )
}
export default App
