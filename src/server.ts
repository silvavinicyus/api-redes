import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import createConnection from './shared/database';
import './shared/container';
import { AppError } from './shared/errors/AppError';
import router from './shared/routes';

createConnection().then(() => { console.log("Database online!") });

const app = express();

app.use(express.json());

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({ message: err.message });
    }

    return response.status(500).json({
      status: 'error',
      message: `Internal server error - ${err.message}`,
    });
  }
);

app.listen(3333, () => {
  console.log("Server started at port 3333")
});