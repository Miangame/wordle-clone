import React from 'react'
import type { AppProps } from 'next/app'

import { GlobalStyles } from '../components/Global/GlobalStyles'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
