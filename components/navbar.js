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
  const activeTheme = useColorModeValue('blackAlpha.500', 'blackAlpha.800');
  const inActiveTheme = useColorModeValue('blackAlpha.200', 'whiteAlpha.200');
  const onHoverTheme = useColorModeValue('blackAlpha.200', 'blackAlpha.400');
  return (
    <NextLink href={href}>
      <Link color={active ? 'white' : 'whiteAlpha'}>
        <IconButton
          icon={children}
          bgColor={active ? activeTheme : inActiveTheme}
          _hover={{
            bgColor: onHoverTheme,
          }}
          rounded='none'
        />
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
            <LinkItem path={path} href='/'>
              <AiFillHome />
            </LinkItem>
            <LinkItem path={path} href='/new-meetup'>
              <AddIcon />
            </LinkItem>
          </Box>
          <Spacer mx={2} />
          <ToggleThemeButton />
        </Center>
      </Container>
    </Box>
  );
}
