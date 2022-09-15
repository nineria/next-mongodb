import { MongoClient, ObjectId } from 'mongodb';
import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import MeetupDetail from '../../components/meetup/MeetupDetail';

interface meetupPropsType {
  meetupData: {
    id: string;
    title: string;
    image: string;
    description: string;
    createdAt: string;
  };
}

const MeetupDetails: NextPage = (props: meetupPropsType) => {
  return (
    <>
      <MeetupDetail
        id={props.meetupData.id}
        image={props.meetupData.image}
        title={props.meetupData.title}
        description={props.meetupData.description}
        createdAt={props.meetupData.createdAt}
      />
    </>
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    'mongodb+srv://user-nineria:tUh1mj8hmOQLAM1N@cluster0.y5ii0.mongodb.net/meetups?retryWrites=true&w=majority'
  );

  const db = client.db();
  const meetupsCollection = db.collection('meetups');

  // @ts-ignore
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray(); // fetch only _id

  client.close();

  return {
    fallback: 'blocking',
    paths: meetups.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    'mongodb+srv://user-nineria:tUh1mj8hmOQLAM1N@cluster0.y5ii0.mongodb.net/meetups?retryWrites=true&w=majority'
  );

  const db = client.db();
  const meetupsCollection = db.collection('meetups');

  const selectedMeetup = await meetupsCollection.findOne({
    // @ts-ignore
    _id: ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
        createdAt: parseFloat(selectedMeetup.createdAt),
      },
    },
  };
};

export default MeetupDetails;
