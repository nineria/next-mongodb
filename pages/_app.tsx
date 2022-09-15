import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import Fonts from '../components/fonts';
import Layout from '../components/layouts/main';
import theme from '../lib/theme';
import '../styles/globals.css';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
