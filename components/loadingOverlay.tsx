import { Box, Center, Spinner } from '@chakra-ui/react';
import React from 'react';

export default function LoadingOverlay({ loading, children }) {
  return (
    <Box pos='relative' rounded='md'>
      {loading ? (
        <Box opacity={0.5}>
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
