import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { connect } from 'mongoose';

export const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(morgan('dev'));

export const start = async () => {
  try {
    await connect();
    app.listen(3000, () => {
      console.log('listening on port 3000');
    });
  } catch (e) {
    console.error(e);
  }
};
