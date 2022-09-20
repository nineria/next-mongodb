// api/new-meetup
import { MongoClient, ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

const URI =
  'mongodb+srv://user-nineria:8PP7NdR6DPD80Gu9@cluster0.y5ii0.mongodb.net/meetups?retryWrites=true&w=majority';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = req.body;
  const client = await MongoClient.connect(URI);

  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  switch (req.method) {
    case 'POST':
      try {
        const result = await meetupsCollection.insertOne(data);
        console.log(result);
        res.status(201).json({ message: 'Inserted to database!' });
      } catch (error) {
        console.log(error);
      } finally {
        await client.close();
      }

      break;

    case 'PUT':
      try {
        // @ts-ignore
        const filter = { _id: ObjectId(req.body.id) };
        const options = { upsert: false };

        const updateDoc = {
          $set: {
            title: req.body.title,
            image: req.body.image,
            description: req.body.description,
            createdAt: Date.now(),
          },
        };

        await meetupsCollection.updateOne(filter, updateDoc, options);
        res.status(202).json({ message: 'Successfully updated!' });
      } catch (error) {
        res.status(204).json({
          message: error.toString(),
        });
        console.log(error);
      } finally {
        await client.close();
      }

      break;

    case 'DELETE':
      try {
        // @ts-ignore
        const query = { _id: ObjectId(req.body._id) };
        const result = await meetupsCollection.deleteOne(query);

        if (result.deletedCount === 1)
          res.status(202).json({ message: 'Successfully deleted!' });
      } catch (error) {
        res.status(204).json({
          message: `No documents matched. Deleted 0 documents!`,
        });
        console.log(error);
      } finally {
        await client.close();
      }
      break;

    default:
      await client.close();
      break;
  }
}
