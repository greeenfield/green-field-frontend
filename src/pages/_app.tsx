import type { AppContext, AppProps } from 'next/app';
import Head from 'next/head';
import { useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';

import axios from 'axios';
import dayjs from 'dayjs';
import ko from 'dayjs/locale/ko';
import relativeTime from 'dayjs/plugin/relativeTime';
import { RecoilRoot } from 'recoil';

import { getMe } from '@apis/user';
import { userState } from '@atoms/userState';
import { Layout } from '@components/layout';
import { globalStyles } from '@styles/globals';

axios.defaults.baseURL = 'http://localhost:3001/';
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
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RecoilRoot>
      </Hydrate>
    </QueryClientProvider>
  );
}

MyApp.getInitialProps = async ({ ctx }: AppContext) => {
  let user = null;
  if (ctx.req) {
    user = await getMe(ctx.req.headers.cookie);
  } else {
    user = await getMe();
  }
  return {
    pageProps: {
      user: user,
    },
  };
};

export default MyApp;
