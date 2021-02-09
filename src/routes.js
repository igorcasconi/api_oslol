import express from 'express';
import HomeController from './controllers/data-site/home/HomeController'
const routes = express.Router();

const homeController = new HomeController();

routes.get('/list-news', homeController.listNews)

export default routes;