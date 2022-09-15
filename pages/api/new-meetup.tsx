// api/new-meetup
import { MongoClient, ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = req.body;
  const client = await MongoClient.connect(
    'mongodb+srv://user-nineria:tUh1mj8hmOQLAM1N@cluster0.y5ii0.mongodb.net/meetups?retryWrites=true&w=majority'
  );

  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  switch (req.method) {
    case 'POST':
      try {
        const result = await meetupsCollection.insertOne(data);
        console.log(result);
        res.status(201).json({ message: 'Inserted to database!' });
      } catch (err) {
        console.log(err);
      } finally {
        await client.close();
      }

      break;

    case 'DELETE':
      try {
        // @ts-ignore
        const query = { _id: ObjectId(req.body._id) };
        const result = await meetupsCollection.deleteOne(query);

        if (result.deletedCount === 1) {
          res.status(202).json({ message: 'Successfully deleted!' });
        } else {
          res.status(204).json({
            message: `No documents matched the ${query}. Deleted 0 documents!`,
          });
        }
      } catch (err) {
        console.log(err);
      } finally {
        await client.close();
      }
      break;

    default:
      await client.close();
      break;
  }
}
