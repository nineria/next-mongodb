import { ChakraProvider } from '@chakra-ui/react';
import Fonts from '../components/fonts';
import Layout from '../components/layouts/main';
import theme from '../lib/theme';
import '../styles/globals.css';

function MyApp({ Component, pageProps, router }) {
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
