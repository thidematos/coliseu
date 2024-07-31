import { Client, GetUserLongLivedTokenRequest } from 'instagram-graph-api';
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

  const project = await Project.findById(projectId).select('-user');

  if (!project)
    return next(new AppError('Não foi achado nenhum projeto com esse ID', 404));

  res.status(200).json({
    status: 'success',
    data: {
      project,
    },
  });
});

export const setNewProject = (req, res, next) => {
  const { title, material, isMarmoraria } = req.body;

  if (!title || !material || !isMarmoraria)
    return next(
      new AppError(
        'Por favor, preencha todas as informações para criar um novo projeto',
        400
      )
    );

  const newProject = {
    title,
    material,
    isMarmoraria,
    user: req.user._id,
    photos: req.photos,
  };

  req.newProject = newProject;

  next();
};

export const postOnInstagram = catchAsync(async (req, res, next) => {
  const newProject = req.newProject;

  const postCaption = `${newProject.title} em ${newProject.material} | ${
    newProject.isMarmoraria ? 'Marmoraria' : 'Serralheria'
  } O Coliseu`;

  const client = new Client(
    process.env.GRAPH_ACCESS_TOKEN,
    process.env.INSTAGRAM_PAGE_ID
  );

  const isCarrousel = newProject.photos.length > 1;

  if (isCarrousel) {
    const containerPromises = newProject.photos.map(async (photo) => {
      const postRequest = client.newPostPagePhotoMediaRequest(
        `${process.env.BASE_URL_PHOTOS}gallery1.jpg`
      );
      const response = await postRequest.execute();

      return response.getId();
    });

    const containersIds = await Promise.all(containerPromises);

    console.log('Container Ids', containersIds);

    const carrouselContainerRequest = client.newPostPageCarouselMediaRequest(
      containersIds,
      postCaption
    );

    const carouselContainer = await carrouselContainerRequest.execute();

    const carouselPostRequest = client.newPostPublishMediaRequest(
      carouselContainer.getId()
    );

    await carouselPostRequest.execute();

    console.log('Carrossel postado!');
  }

  if (!isCarrousel) {
    const postRequestContainer = client.newPostPagePhotoMediaRequest(
      `${process.env.BASE_URL_PHOTOS}gallery1.jpg`,
      postCaption
    );

    const container = await postRequestContainer.execute();

    const postRequest = client.newPostPublishMediaRequest(container.getId());

    await postRequest.execute();

    console.log('Postado!');
  }

  /*

  const longLiveTokenRequest = new GetUserLongLivedTokenRequest(
    'EAAHILYjhJcEBOZCpBK1IoBvv2XZAZCefnxQkIWdh1fgwt9dqpPLvdBmd9rAXZC8ItqQZAytDEf9Rakq3mmuUhROJkimxdDh769f2RtdpcNaQFKZBnmncjgcrI6VzKZBHg9P08IMZC0RiHitwHM7wVibkZBvSX7B7wAbyosv92AgwM5S03x0L5zQJc1cZAdmNMtQxn0',
    '501572872250817',
    'f472615a954dc02c545d25d047c37432'
  );

  longLiveTokenRequest
    .execute()
    .then((response) => console.log(response.getLongLivedToken()));

  */

  next();
});

export const createProject = catchAsync(async (req, res, next) => {
  const newProject = await Project.create(req.newProject);

  res.status(201).json({
    status: 'success',
    data: {
      project: newProject,
    },
  });
});

export const patchProject = catchAsync(async (req, res, next) => {
  const { title, material, isMarmoraria } = req.body;

  const project = await Project.findById(req.params.projectId);

  project.title = title;
  project.material = material;
  project.isMarmoraria = isMarmoraria;

  if (req.photos?.length) {
    project.photos = req.photos;
  }

  await project.save();

  res.status(200).json({
    status: 'success',
  });
});

export const deleteProject = catchAsync(async (req, res, next) => {
  const { projectId } = req.params;

  await Project.findByIdAndDelete(projectId);

  res.status(204).json({
    status: 'success',
  });
});

export const resizeAndSavePhoto = catchAsync(async (req, res, next) => {
  if (!req.files.length) return next();

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
