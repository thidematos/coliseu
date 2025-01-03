import AppError from './../utils/appError.js';
import catchAsync from './../utils/catchAsync.js';
import User from './../models/userModel.js';
import jwt from 'jsonwebtoken';
import { promisify } from 'util';

const signToken = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

const createSendCookie = (user, statusCode, res) => {
  const token = signToken(user._id);

  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES * 60 * 60 * 1000
    ),
    httpOnly: process.env.NODE_ENV === 'development' ? false : true,
    secure: process.env.NODE_ENV === 'development' ? true : true,
    sameSite: 'Strict',
  };

  user.password = undefined;

  res.cookie('jwt', token, cookieOptions);

  res.status(statusCode).json({
    status: 'sucess',
    data: {
      user: user,
    },
  });
};

export const logout = catchAsync(async (req, res, next) => {
  res.cookie('jwt', '', {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES * 60 * 60 * 1000
    ),
    httpOnly: process.env.NODE_ENV === 'development' ? false : true,
    secure: process.env.NODE_ENV === 'development' ? true : true,
    sameSite: 'Strict',
  });

  res.status(200).json({
    status: 'success',
  });
});

export const signup = catchAsync(async (req, res, next) => {
  const { email, password, passwordConfirm, photo, name } = req.body;

  const newUser = await User.create({
    email,
    password,
    passwordConfirm,
    photo,
    name,
  });

  createSendCookie(newUser, 201, res);
});

export const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email && !password)
    return next(new AppError('Please, provide an email and password', 400));

  const user = await User.findOne({ email: email }).select('+password');

  if (!user || !(await user.correctPassword(password, user.password)))
    return next(new AppError('Usuário ou senha incorretos!', 401));

  createSendCookie(user, 200, res);
});

export const protect = catchAsync(async (req, res, next) => {
  let token;

  //Verifies if the token is valid.
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) return next(new AppError('Usuário não está autenticado.', 401));

  //Decode Token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  //Verifies is the User exists
  const currentUser = await User.findById(decoded.id).select('+role');

  if (!currentUser) return next(new AppError('Usuário não encontrado!', 401));

  req.user = currentUser;
  next();
});

export const authUser = (req, res, next) => {
  const userObj = req.user.toObject();

  delete userObj.password;
  delete userObj.role;
  delete userObj.passwordConfirm;

  res.status(200).json({
    status: 'success',
    data: {
      user: userObj,
    },
  });
};

export const restrictTo = (...role) => {
  return (req, res, next) => {
    if (!role.includes(req.user.role))
      return next(
        new AppError('Você não está autorizado a acessar essa página.', 403)
      );

    next();
  };
};
