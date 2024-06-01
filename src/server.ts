import app from './app';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Loa);d environment variables from .env file
dotenv.config();

const port = process.env.Port || 3000;
const dbUri = process.env.DataBase_User;
let a;
console.log(a);
async function main() {
  if (!dbUri) {
    throw new Error(
      'Database connection string (DataBase_User) is not defined in the .env file.',
    );
  }

  try {
    await mongoose.connect(dbUri);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB', err);
  }
}

main();

app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
