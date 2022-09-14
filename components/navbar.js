import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';

const LinkItem = ({ path, href, children }) => {
  const active = path === href;
  console.log(path, '==', href);
  const inactiveColor = useColorModeValue('gray.200', 'whiteAlpha.900');
  const activeBgColor = useColorModeValue('purple.400', 'red.400');
  return (
    <NextLink href={href}>
      <Link
        p={2}
        bg={active ? activeBgColor : undefined}
        color={active ? 'white' : inactiveColor}
      >
        {children}
      </Link>
    </NextLink>
  );
};

export default function Navbar(props) {
  const { path } = props;

  return (
    <Box
      top={0}
      position='fixed'
      as='nav'
      w='100%'
      bg={useColorModeValue('#ffffff40', '#20202380')}
      p={2}
      backdropFilter='blur(10px)'
      zIndex={2}
    >
      <Container
        display='flex'
        maxW='container.md'
        alignItems='center'
        justifyContent='space-between'
      >
        <Heading>Next.js with MongoDB</Heading>
        <Flex flexDir='row' gap={5}>
          <LinkItem path={path} href='/'>
            Home page
          </LinkItem>
          <LinkItem path={path} href='/new-meetup'>
            Add more post
          </LinkItem>
        </Flex>
      </Container>
    </Box>
  );
}
