import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { Fragment } from 'react';

export default function MeetupDetail(props) {
  const BgColorTheme = useColorModeValue('#fff', '#222');

  const router = useRouter();

  const deleteHandler = async () => {
    try {
      const response = await fetch('/api/new-meetup', {
        method: 'DELETE',
        body: JSON.stringify({ _id: props.id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.log(props.id, error);
    } finally {
      router.replace('/'); // User can't go back to previous page
    }
  };

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
                color={useColorModeValue('blackAlpha.500', 'whiteAlpha.500')}
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

              <ButtonDeleteModal deleteHandler={deleteHandler} />
            </Flex>
          </Box>
        </Box>
      </Container>
    </Fragment>
  );
}

function ButtonDeleteModal({ deleteHandler }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        colorScheme='red'
        bgColor='red.400'
        color='white'
      >
        Delete
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          bgColor={useColorModeValue('whiteAlpha.900', '#222')}
          color={useColorModeValue('#222', 'whiteAlpha.900')}
        >
          <ModalHeader>Confirm Delete</ModalHeader>
          {/* <ModalCloseButton /> */}
          <ModalBody>
            Are you sure you want to delete this post? You will lost this post
            you delete.
          </ModalBody>

          <ModalFooter>
            <Button variant='ghost' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              onClick={() => deleteHandler()}
              colorScheme='red'
              bgColor='red.400'
              color='white'
            >
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
