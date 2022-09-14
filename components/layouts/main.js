import { Box, Container } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import Navbar from '../navbar';

export default function Main({ children, router }) {
  return (
    <Box as='main'>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='Next.js and MongoDB' />
        <meta name='author' content='Nineria' />
        <meta name='author' content='Nineria' />
        <link rel='apple-touch-icon' href='apple-touch-icon.png' />
        <link
          rel='shortcut icon'
          href='/apple-touch-icon.png'
          type='image/x-icon'
        />
        <meta name='twitter:title' content='Next.js and MongoDB' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@nineria' />
        <meta name='twitter:creator' content='@nineria' />
        <meta name='twitter:image' content='/card.png' />
        <meta property='og:site_name' content='Next.js and MongoDB' />
        <meta name='og:title' content='Next.js and MongoDB' />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='/card.png' />
        <title>Next.js and MongoDB</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW='container.md' p={0} pt={14}>
        {children}
      </Container>
    </Box>
  );
}
