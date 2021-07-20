import type { AppProps } from 'next/app'
import { useState } from 'react'
import clsx from 'clsx'
import { Navigation } from '@components/Navigation'

import 'tailwindcss/tailwind.css'

const App = ({ Component, pageProps }: AppProps) => {
  const [darkMode, setDarkMode] = useState(true)
  return (
    <div
      className={clsx(
        darkMode
          ? 'dark bg-blueGray-900 text-gray-300'
          : 'bg-blueGray-100 text-gray-700',
        'grid grid-cols-5',
        'min-h-screen'
      )}
    >
      <div className='col-span-1'>
        <Navigation />
      </div>
      <div className='col-span-4 container mx-auto'>
        <Component {...pageProps} />
        <button
          onClick={() => {
            setDarkMode((val) => !val)
          }}
        >
          Dark Mode
        </button>
      </div>
    </div>
  )
}
export default App
