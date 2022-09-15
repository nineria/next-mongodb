// api/new-meetup
import { MongoClient } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'POST':
      const data = req.body;
      //   const { title, image, description } = data;

      const client = await MongoClient.connect(
        'mongodb+srv://user-nineria:tUh1mj8hmOQLAM1N@cluster0.y5ii0.mongodb.net/meetups?retryWrites=true&w=majority'
      );

      const db = client.db();
      const meetupsCollection = db.collection('meetups');
      const result = await meetupsCollection.insertOne(data);

      console.log(result);

      client.close();

      res.status(201).json({ message: 'Inserted to database!' });

      break;

    default:
      break;
  }
}
