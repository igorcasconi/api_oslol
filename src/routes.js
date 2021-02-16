import express from 'express';

import HomeController from './controllers/data-site/home/HomeController'
import LoginController from './controllers/data-control-panel/LoginController'

const routes = express.Router();

const homeController = new HomeController();
const loginController = new LoginController();

routes.get('/list-news', homeController.listNews)
routes.post('/login', loginController.authenticate)

export default routes;