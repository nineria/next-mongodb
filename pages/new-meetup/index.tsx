import { Container, useToast } from '@chakra-ui/react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import LoadingOverlay from '../../components/loadingOverlay';
import NewMeetupForm from '../../components/meetup/NewMeetupForm';

const NewMeetupPage: NextPage = () => {
  const router = useRouter();
  const toast = useToast();

  const [loading, setLoading] = useState<boolean>(false);

  const addMeetupHandler = async (meetupData) => {
    setLoading(true);

    try {
      // const response = await fetch('/api/new-meetup', {
      //   method: 'POST',
      //   body: JSON.stringify(meetupData),
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // });
      // const data = await response.json();
      // console.log(data);

      await fetch('http://localhost:3005/meetups', {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setLoading(false);
      router.replace('/');
    } catch (error) {
      console.log(error);
      toast({
        title: 'Error.',
        description: error.toString(),
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
      setLoading(false);
    }
  };

  return (
    <Container maxW='container.sm'>
      <LoadingOverlay loading={loading}>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
      </LoadingOverlay>
    </Container>
  );
};

export default NewMeetupPage;
