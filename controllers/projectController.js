import { Project } from '../models/projectModel.js';
import AppError from '../utils/appError.js';
import catchAsync from '../utils/catchAsync.js';
import sharp from 'sharp';

export const getAllProjects = catchAsync(async (req, res, next) => {
  const projects = await Project.find({}).sort('createdAt');

  res.status(200).json({
    results: projects.length,
    status: 'success',
    data: {
      projects,
    },
  });
});

export const getSingleProject = catchAsync(async (req, res, next) => {
  const { projectId } = req.params;

  const project = await Project.findById(projectId);

  if (!project)
    return next(new AppError('Não foi achado nenhum projeto com esse ID', 404));

  res.status(200).json({
    status: 'success',
    data: {
      project,
    },
  });
});

export const createProject = catchAsync(async (req, res, next) => {
  const { title, material, isMarmoraria } = req.body;

  if (!title || !material || !isMarmoraria)
    return next(
      new AppError(
        'Por favor, preencha todas as informações para criar um novo projeto',
        400
      )
    );

  const newProject = await Project.create({
    title,
    material,
    isMarmoraria,
    user: req.user._id,
    photos: req.photos,
  });

  res.status(201).json({
    status: 'success',
    data: {
      project: newProject,
    },
  });
});

export const patchProject = catchAsync(async (req, res, next) => {
  const patchedProject = await Project.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    status: 'success',
    data: {},
  });
});

export const deleteProject = catchAsync(async (req, res, next) => {
  const { projectId } = req.params;

  await Project.findOneAndDelete(projectId);

  res.status(204).json({
    status: 'success',
  });
});

export const resizeAndSavePhoto = catchAsync(async (req, res, next) => {
  console.log(req.files);

  if (!req.files.length)
    return next(
      new AppError('Um projeto precisa de pelo menos uma foto.', 400)
    );

  const sizes = {
    width: 750,
    height: 600,
  };

  req.photos = [];

  const promises = req.files.map(async (file, ind) => {
    const photoName = `photo-${Date.now()}-${ind}.jpg`;

    await sharp(file.buffer)
      .resize(sizes.width, sizes.height)
      .toFormat('jpeg')
      .jpeg({ quality: 100 })
      .toFile(`./public/${photoName}`);

    req.photos.push(photoName);
  });

  await Promise.all(promises);

  next();
});
