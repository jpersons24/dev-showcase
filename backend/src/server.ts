import dotenv from 'dotenv';
import express from 'express';
import { createConnection } from './database';
import { driverRoutes } from './routes/driverRoutes';
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

createConnection()
  .then((connection) => {
    app.use('/api/drivers', driverRoutes(connection));

    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to database', error);
  });
