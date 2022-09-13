import { Container } from '@chakra-ui/react';
import React from 'react';
import NewMeetupForm from '../../components/meetup/NewMeetupForm';

export default function NewMeetupPage() {
  const addMeetupHandler = (data) => {
    console.log(data);
  };
  return (
    <Container maxW='container.sm'>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Container>
  );
}
