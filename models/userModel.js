import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  name: String,
  password: {
    type: String,
    required: true,
    select: false,
    minlength: [8, 'A Password should have more than 8 characters'],
  },
  passwordConfirm: {
    type: String,
    required: true,
    select: false,
    minlength: [7, 'A password confirm should be longer than 8 characters'],
    validate: {
      validator: function (field) {
        return field === this.password;
      },
      message: 'Passwords should match',
    },
  },
  role: {
    type: String,
    enum: ['MASTER', 'ADMIN', 'user'],
    default: 'user',
  },
  photo: String,

  createdAt: {
    type: Date,
    default: Date.now,
    select: false,
  },
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 12);

  this.passwordConfirm = undefined;

  next();
});

userSchema.methods.correctPassword = async function (
  reqPassword,
  userPassword
) {
  return await bcrypt.compare(reqPassword, userPassword);
};

const User = mongoose.model('User', userSchema);

export default User;
