import { Box, Center, Spinner, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

export default function LoadingOverlay({ loading, children }) {
  const bgColorTheme = useColorModeValue('#eee', '#333');

  return (
    <Box pos='relative' bg={bgColorTheme} rounded='md'>
      {loading ? (
        <Box opacity={loading ? 0.5 : 1}>
          <Center
            pos='absolute'
            w='full'
            h='full'
            justifyContent='center'
            alignItems='center'
            zIndex={2}
          >
            <Spinner size='xl' thickness='4px' color='white.500' />
          </Center>
          {children}
        </Box>
      ) : (
        children
      )}
    </Box>
  );
}
