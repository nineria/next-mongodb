import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { Fragment } from 'react';

export default function MeetupDetail(props) {
  const router = useRouter();

  const deleteHandler = async () => {
    const response = await fetch('/api/new-meetup', {
      method: 'DELETE',
      body: JSON.stringify(props),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    console.log(data);

    router.replace('/'); // User can't go back to previous page
  };

  const BgColorTheme = useColorModeValue('#fff', '#222');

  return (
    <Fragment>
      <Container maxW='container.sm'>
        <Box
          my={2}
          borderWidth='1px'
          borderRadius='md'
          overflow='hidden'
          bgColor={BgColorTheme}
        >
          <Image src={props.image} alt={props.image} />
          <Box p='6'>
            <Box display='flex' alignItems='baseline'>
              <Box
                color='gray.500'
                fontWeight='semibold'
                letterSpacing='wide'
                fontSize='xs'
                textTransform='uppercase'
              >
                {new Date(props.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </Box>
            </Box>

            <Heading my='1' size='lg'>
              {props.title}
            </Heading>

            <Text>{props.description}</Text>

            <Flex justifyContent='start' mt={4} style={{ gap: 10 }}>
              <Button onClick={() => router.back()} colorScheme='gray'>
                Back
              </Button>
              <Button onClick={() => deleteHandler()} colorScheme='red'>
                Delete
              </Button>
            </Flex>
          </Box>
        </Box>
      </Container>
    </Fragment>
  );
}
