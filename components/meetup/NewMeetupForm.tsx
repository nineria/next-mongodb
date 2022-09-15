import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Input,
  Textarea,
  useColorModeValue,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useRef } from 'react';
import { FiChevronLeft } from 'react-icons/fi';

function NewMeetupForm(props) {
  const titleInputRef = useRef<any>();
  const imageInputRef = useRef<any>();
  const descriptionInputRef = useRef<any>();

  const router = useRouter();

  const BgColorTheme = useColorModeValue('whiteAlpha.600', 'whiteAlpha.200');

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      description: enteredDescription,
      createdAt: Date.now(),
    };

    props.onAddMeetup(meetupData);
  }

  return (
    <Box
      my={2}
      borderWidth='1px'
      borderRadius='md'
      overflow='hidden'
      bgColor={BgColorTheme}
    >
      <Button size='sm' variant='link' p={3} onClick={() => router.push('/')}>
        <FiChevronLeft />
        Back
      </Button>
      <Heading mt={5} size='md' textTransform='uppercase' textAlign='center'>
        Your cool new post!
      </Heading>
      <form onSubmit={submitHandler} style={{ margin: '0px 20px' }}>
        <Flex flexDir='column' style={{ gap: 10 }} pt={10} pb={4}>
          <Box>
            <Heading size='md' fontSize='xl'>
              Title:
            </Heading>
            <Input
              type='text'
              required
              id='title'
              ref={titleInputRef}
              placeholder='Cool title!'
              variant='flushed'
            />
          </Box>
          <Box>
            <Heading size='md' fontSize='xl'>
              Image:
            </Heading>
            <Input
              type='url'
              required
              id='image'
              ref={imageInputRef}
              placeholder='https://cool-image/image.jpg'
              variant='flushed'
            />
          </Box>
          <Box>
            <Heading size='md'>Description:</Heading>

            <Textarea
              id='description'
              required
              rows={5}
              ref={descriptionInputRef}
              placeholder="What's on your mind?"
              variant='flushed'
            />
          </Box>
          <Center>
            <Button type='submit' colorScheme='green' w='full' mt={10}>
              Add
            </Button>
          </Center>
        </Flex>
      </form>
    </Box>
  );
}

export default NewMeetupForm;
