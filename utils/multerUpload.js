import multer from 'multer';
const multerStorage = multer.memoryStorage();
import AppError from './appError.js';

const multerFilter = (req, file, cb) => {
  if (!file.mimetype.startsWith('image/'))
    cb(new AppError('Não foi detectado um arquivo de imagem.', 400), 400);
  cb(null, true);
};
const upload = multer({ storage: multerStorage, fileFilter: multerFilter });

export default upload;
