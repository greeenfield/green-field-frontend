import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useState } from 'react';

import axios from 'axios';
import dayjs from 'dayjs';
import ko from 'dayjs/locale/ko';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RecoilRoot } from 'recoil';

import { userState } from '@/atoms/userState';
import { API_SERVER_URL } from '@/mock/handlers';
import { globalStyles } from '@/styles/globals';

axios.defaults.baseURL = API_SERVER_URL;
axios.defaults.withCredentials = true;

dayjs.locale(ko);
dayjs.extend(relativeTime);

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
        <RecoilRoot
          initializeState={({ set }) => {
            set(userState, pageProps.user);
          }}
        >
          <Component {...pageProps} />
        </RecoilRoot>
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}

export default MyApp;
