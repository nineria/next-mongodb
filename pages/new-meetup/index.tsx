import { Container } from '@chakra-ui/react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import NewMeetupForm from '../../components/meetup/NewMeetupForm';

const NewMeetupPage: NextPage = () => {
  const router = useRouter();
  const addMeetupHandler = async (meetupData) => {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    console.log(data);

    router.replace('/'); // User can't go back to previous page
  };

  return (
    <Container maxW='container.sm'>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Container>
  );
};

export default NewMeetupPage;
