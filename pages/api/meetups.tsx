// api/new-meetup
import { MongoClient } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

const URI =
  'mongodb+srv://user-nineria:8PP7NdR6DPD80Gu9@cluster0.y5ii0.mongodb.net/meetups?retryWrites=true&w=majority';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'POST':
      const data = req.body;
      //   const { title, image, description } = data;

      const client = await MongoClient.connect(URI);

      const db = client.db();
      const meetupsCollection = db.collection('meetups');
      await meetupsCollection.insertOne(data);

      client.close();

      res.status(201).json({ message: 'Inserted to database!' });

      break;

    default:
      break;
  }
}
