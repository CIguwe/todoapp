import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import mongoose from 'mongoose';

const CONNECTION_URL =
  'mongodb+srv://chidera_iguwe:5-Kingdoms@deramongocluster.p7xp8.mongodb.net/todoapp?retryWrites=true&w=majority';
export const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

export const start = async () => {
  try {
    await mongoose.connect(CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(3000, () => {
      console.log('listening on port 3000');
    });
  } catch (e) {
    console.error(e);
  }
};
