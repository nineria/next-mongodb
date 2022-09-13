import { Box, Button, Center, Flex, Input, Textarea } from '@chakra-ui/react';
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
    };

    props.onAddMeetup(meetupData);
  }

  return (
    <Box
      bgColor='#222'
      px={2}
      py={4}
      my={2}
      rounded='md'
      border='2px solid #999'
    >
      <Flex justifyContent='center'>
        <form onSubmit={submitHandler}>
          <Flex flexDir='column' gap={2}>
            <Box>
              <label htmlFor='title'>Meetup Title</label>
              <Input type='text' required id='title' ref={titleInputRef} />
            </Box>
            <Box>
              <label htmlFor='image'>Meetup Image</label>
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
                Add Meetup
              </Button>
            </Center>
          </Flex>
        </form>
      </Flex>
    </Box>
  );
}

export default NewMeetupForm;
