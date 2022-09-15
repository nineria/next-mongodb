import { Box, Stack } from '@chakra-ui/react';
import React from 'react';

export default function Footer() {
  return (
    <Stack my={8}>
      <Box textAlign='center' opacity={0.4} fontSize='sm'>
        &copy; {new Date().getFullYear()} Tewarit Jantarasorn. All Rights
        Reserved.
      </Box>
    </Stack>
  );
}
