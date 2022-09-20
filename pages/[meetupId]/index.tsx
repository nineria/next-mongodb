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
  // const URI = process.env.MONGO_URI;

  // const client = await MongoClient.connect(URI);

  // const db = client.db();
  // const meetupsCollection = db.collection('meetups');

  // // @ts-ignore
  // const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray(); // fetch only _id

  // client.close();

  // return {
  //   fallback: 'blocking',
  //   paths: meetups.map((meetup) => ({
  //     params: {
  //       meetupId: meetup._id.toString(),
  //     },
  //   })),
  // };
  try {
    const res = await fetch(`http://localhost:3005/meetups`);

    const meetups = await res.json();

    return {
      fallback: 'blocking',
      paths: meetups.map((meetup) => ({
        params: {
          meetupId: meetup._id.toString(),
        },
      })),
    };
  } catch (error) {
    return { props: { error: true } };
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(
    `http://localhost:3005/meetups/${context.params.meetupId}`
  );

  const meetups = await res.json();

  // const meetupId = context.params.meetupId;

  // const client = await MongoClient.connect(URI);

  // const db = client.db();
  // const meetupsCollection = db.collection('meetups');

  // const selectedMeetup = await meetupsCollection.findOne({
  //   // @ts-ignore
  //   _id: ObjectId(meetupId),
  // });

  // client.close();

  return {
    props: {
      meetupData: {
        id: meetups._id.toString(),
        title: meetups.title,
        image: meetups.image,
        description: meetups.description,
        createdAt: parseFloat(meetups.createdAt),
      },
    },
  };
};

export default MeetupDetails;
