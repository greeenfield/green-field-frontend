import { Layout } from '@components/layout';
import { globalStyles } from '@styles/globals';
import axios from 'axios';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';

axios.defaults.baseURL = 'http://localhost:3001/';
axios.defaults.withCredentials = true;

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>그린 필드</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {globalStyles}
      <Hydrate state={pageProps.dehydratedState}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
