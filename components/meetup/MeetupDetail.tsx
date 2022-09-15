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
  useToast,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { Fragment, useState } from 'react';
import LoadingOverlay from '../loadingOverlay';

export default function MeetupDetail(props) {
  const BgColorTheme = useColorModeValue('whiteAlpha.600', 'whiteAlpha.100');

  const router = useRouter();

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
                Created At •{' '}
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
              <ButtonDeleteModal id={props.id} />
              <ButtonUpdateModal props={props} />
            </Flex>
          </Box>
        </Box>
      </Container>
    </Fragment>
  );
}

function ButtonDeleteModal({ id }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();
  const toast = useToast();

  const deleteHandler = async () => {
    setLoading(true);
    try {
      await fetch('/api/new-meetup', {
        method: 'DELETE',
        body: JSON.stringify({ _id: id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      toast({
        title: 'Post deleted.',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Error.',
        description: error.toString(),
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
      router.replace('/'); // User can't go back to previous page
    }
  };

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
          <LoadingOverlay loading={loading}>
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
          </LoadingOverlay>
        </ModalContent>
      </Modal>
    </>
  );
}

function ButtonUpdateModal({ props }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();
  const toast = useToast();

  const updateHandler = async () => {
    setLoading(true);

    try {
      const response = await fetch('/api/new-meetup', {
        method: 'PUT',
        // @ts-ignore
        body: JSON.stringify(props),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      console.log(data);

      toast({
        title: 'Post updated.',
        description: data.message,
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: error.toString(),
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
      router.reload();
    }
  };

  return (
    <>
      <Button
        onClick={onOpen}
        colorScheme='green'
        bgColor='green.400'
        color='white'
      >
        Update
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          bgColor={useColorModeValue('whiteAlpha.900', '#222')}
          color={useColorModeValue('#222', 'whiteAlpha.900')}
        >
          <LoadingOverlay loading={loading}>
            <ModalHeader>Confirm Delete</ModalHeader>
            {/* <ModalCloseButton /> */}
            <ModalBody>
              Are you sure you want to delete this post? You will lost this post
              if you delete it.
            </ModalBody>

            <ModalFooter>
              <Button variant='ghost' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button
                onClick={() => updateHandler()}
                colorScheme='green'
                bgColor='green.400'
                color='white'
              >
                Update
              </Button>
            </ModalFooter>
          </LoadingOverlay>
        </ModalContent>
      </Modal>
    </>
  );
}
