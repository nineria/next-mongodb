import { Box, Container, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import NextLink from '../NextLink';

export default function Navbar() {
  return (
    <Box h='60px' w='full' bg='#111' p={2}>
      <Container maxW='container.lg'>
        <Flex flexDir='row' alignItems='center' justifyContent='space-between'>
          <Heading>Next.js with MongoDB</Heading>
          <Flex flexDir='row' gap={5}>
            <NextLink href='/'>Home page</NextLink>
            <NextLink href='/new-meetup'>Add more post</NextLink>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
