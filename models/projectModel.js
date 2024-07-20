import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  photos: [String],
  user: {
    type: mongoose.Schema.Types.ObjectId,
  },
  title: String,
  material: String,
  isMarmoraria: Boolean,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

projectSchema.pre('save', function (next) {
  //pre save middleware
  next();
});

projectSchema.pre(/^find/, function (next) {
  //Pre find middleware
  next();
});

export const Project = mongoose.model('Project', projectSchema);
