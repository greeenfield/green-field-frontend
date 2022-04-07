import type { AppProps } from "next/app"
import Head from "next/head"
import { globalStyles } from "styles/globals"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>그린 필드</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {globalStyles}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
