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
import { useRef } from 'react';

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const descriptionInputRef = useRef();

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

  const BgColorTheme = useColorModeValue('#fff', '#222');

  return (
    <Box
      my={2}
      borderWidth='1px'
      borderRadius='md'
      overflow='hidden'
      bgColor={BgColorTheme}
    >
      <Heading mt={5} size='md' textAlign='center'>
        Add New Post!
      </Heading>
      <Flex justifyContent='center'>
        <form onSubmit={submitHandler}>
          <Flex flexDir='column' style={{ gap: 10 }} py={10}>
            <Box>
              <label htmlFor='title'>Title</label>
              <Input type='text' required id='title' ref={titleInputRef} />
            </Box>
            <Box>
              <label htmlFor='image'>Image</label>
              <Input type='url' required id='image' ref={imageInputRef} />
            </Box>
            <Box>
              <label htmlFor='description'>Description</label>
              <Textarea
                id='description'
                required
                rows='5'
                ref={descriptionInputRef}
              />
            </Box>
            <Center>
              <Button type='submit' colorScheme='pink'>
                Add
              </Button>
            </Center>
          </Flex>
        </form>
      </Flex>
    </Box>
  );
}

export default NewMeetupForm;
