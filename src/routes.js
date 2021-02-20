import express from 'express';
import multer from 'multer';
import verifyJWT from './utils/verifyJWT';

import HomeController from './controllers/data-site/home/HomeController'
import LoginController from './controllers/data-control-panel/LoginController'
import UploadController from './controllers/data-control-panel/UploadController'

const routes = express.Router();

const homeController = new HomeController();
const loginController = new LoginController();
const uploadController = new UploadController();
const upload = multer();

routes.get('/list-news', verifyJWT, homeController.listNews)
routes.post('/login', loginController.authenticate)
routes.post('/upload-images', verifyJWT, upload.single('file'), uploadController.uploadImages)

export default routes;