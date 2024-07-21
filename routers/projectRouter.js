import express from 'express';
import * as projectController from './../controllers/projectController.js';
import * as authController from './../controllers/authController.js';
import upload from '../utils/multerUpload.js';

const router = express.Router();

router.get('/', projectController.getAllProjects);

router.use(
  authController.protect,
  authController.restrictTo('MASTER', 'admin')
);

router
  .route('/')
  .post(
    upload.array('photo'),
    projectController.resizeAndSavePhoto,
    projectController.createProject
  );

router
  .route('/:projectId')
  .get(projectController.getSingleProject)
  .patch(projectController.patchProject)
  .delete(projectController.deleteProject);

export default router;
