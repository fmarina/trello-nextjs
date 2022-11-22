import { GetStaticPropsContext } from 'next';
import { NextIntlProvider } from 'next-intl';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import '../styles/globals.css';
import { theme } from '../theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <NextIntlProvider messages={pageProps.messages}>
        <Component {...pageProps} />
      </NextIntlProvider>
    </ThemeProvider>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../locales/${locale}.json`)).default,
    },
  };
}
