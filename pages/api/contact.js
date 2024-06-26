import { MongoClient } from 'mongodb';

export default async function hanlder(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ meassge: 'Invalid input' });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };
    console.log(newMessage);

    let client;
    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.ornto54.mongodb.net/${process.env.mongodb_database}`;

    try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      res.status(500).json({ message: 'Could not connect to the database'});
      return;
    }
    const db = client.db();

    try {
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: 'Could not store the message' });
      return;
    }
    client.close();
    res
      .status(201)
      .json({ message: 'Message successfully stored', data: newMessage });
  }
}
