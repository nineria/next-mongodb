import { AddIcon } from '@chakra-ui/icons';
import {
  Box,
  Center,
  Container,
  Heading,
  IconButton,
  Link,
  Spacer,
  useColorModeValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import ToggleThemeButton from './toggle-theme-button';

const LinkItem = ({ path, href, children }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('blackAlpha', 'whiteAlpha');
  return (
    <NextLink href={href}>
      <Link
        // bg={active ? 'pink.600' : undefined}
        color={active ? 'blackAlpha' : inactiveColor}
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
        <NextLink href='/'>
          <Heading cursor='pointer'>Next.js with MongoDB</Heading>
        </NextLink>
        <Center>
          <Box>
            <LinkItem path={path} href='/home'>
              <IconButton
                icon={<AiFillHome />}
                bgColor={useColorModeValue('blackAlpha.200', 'whiteAlpha.100')}
                roundedLeft='md'
                rounded='none'
              />
            </LinkItem>
            <LinkItem path={path} href='/new-meetup'>
              <IconButton
                icon={<AddIcon />}
                bgColor={useColorModeValue('blackAlpha.200', 'whiteAlpha.100')}
                roundedRight='md'
                rounded='none'
              >
                <AddIcon />
              </IconButton>
            </LinkItem>
          </Box>
          <Spacer mx={2} />
          <ToggleThemeButton />
        </Center>
      </Container>
    </Box>
  );
}
