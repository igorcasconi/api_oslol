import express from 'express';
import multer from 'multer';
import verifyJWT from './utils/verifyJWT';

import HomeController from './controllers/data-site/home/HomeController'
import LoginController from './controllers/data-control-panel/LoginController'
import UploadController from './controllers/data-control-panel/UploadController'
import TeamController from './controllers/data-control-panel/TeamController'
import NewsController from './controllers/data-control-panel/NewsController'

const routes = express.Router();

const homeController = new HomeController();
const loginController = new LoginController();
const uploadController = new UploadController();
const teamController = new TeamController();
const newsController = new NewsController();
const upload = multer();

// Routes to ControlPanel
routes.get('/list-news', verifyJWT, homeController.listNews)
routes.post('/login', loginController.authenticate)
routes.post('/upload-images', verifyJWT, upload.single('file'), uploadController.uploadImages)
routes.post('/new-team', verifyJWT, teamController.newTeam)
routes.post('/add-news', verifyJWT, newsController.addNews)

export default routes;