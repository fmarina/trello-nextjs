import type { AppProps } from 'next/app';
import { NextIntlProvider } from 'next-intl';

import '../styles/globals.css';
import { GetStaticPropsContext } from 'next';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Component {...pageProps} />
    </NextIntlProvider>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  console.log(locale);
  return {
    props: {
      messages: (await import(`../locales/${locale}.json`)).default,
    },
  };
}
