import express from 'express';
import * as authController from './../controllers/authController.js';

const router = express.Router();

router.get(
  '/',
  authController.protect,
  authController.restrictTo('MASTER', 'admin'),
  authController.authUser
);

router.post(
  '/signup',
  authController.protect,
  authController.restrictTo('MASTER'),
  authController.signup
);

router.post('/login', authController.login);

router.get('/logout', authController.logout);

export default router;
