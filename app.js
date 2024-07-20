import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import xssClean from 'xss-clean';
import mongoSanitize from 'express-mongo-sanitize';
import rateLimit from 'express-rate-limit';
import cookieParser from 'cookie-parser';

import AppError from './utils/appError.js';
import globalErrorHandler from './controllers/errorController.js';

import authRouter from './routers/authRouter.js';
import projectRouter from './routers/projectRouter.js';

const limiter = rateLimit({
  max: 200,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests have been made!',
});

const app = express();

app.use(express.json({ limit: '10kb' }));

app.use(cookieParser());

app.use(morgan('dev'));

app.use(cors());

app.use(mongoSanitize());

app.use(xssClean());

app.use(express.static('./public'));

if (process.env.NODE_ENV === 'production') app.use('/api', limiter);

app.use('/api/v1/authentication', authRouter);

app.use('/api/v1/projects', projectRouter);

//Routing react-route-dom
app.all('/*', (req, res, next) => {
  res.sendFile('/public/index.html');
});

app.all('/api/v1/*', (req, res, next) => {
  next(new AppError(`Could not find ${req.originalUrl} in this server`, 404));
});

app.use(globalErrorHandler);

export default app;
