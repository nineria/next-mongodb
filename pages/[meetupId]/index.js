import React from 'react';
import MeetupDetail from '../../components/meetup/MeetupDetail';
import Navbar from '../../components/navbar';

export default function MeetupDetails(props) {
  return (
    <>
      <Navbar />
      <MeetupDetail
        image='https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        title='A First Meetup'
        description='The meetup description'
      />
    </>
  );
}
