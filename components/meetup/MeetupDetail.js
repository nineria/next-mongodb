import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Image,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { Fragment } from 'react';
import P from '../../components/P';

export default function MeetupDetail(props) {
  const router = useRouter();

  return (
    <Fragment>
      <Container maxW='container.sm'>
        <Box bgColor='#222' pb={4} rounded='md' my={2} borderWidth='1px'>
          <Image src={props.image} alt={props.image} roundedTop='md' />
          <Heading textAlign='center' my={4}>
            {props.title}
          </Heading>
          <P>{props.description}</P>
          <Center>
            <Button onClick={() => router.back()} colorScheme='teal'>
              Back
            </Button>
          </Center>
        </Box>
      </Container>
    </Fragment>
  );
}
