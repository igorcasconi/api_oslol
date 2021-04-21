import express from 'express';
import multer from 'multer';
import verifyJWT from './utils/verifyJWT';

import HomeController from './controllers/data-site/home/HomeController'
import LoginController from './controllers/data-control-panel/LoginController'
import UploadController from './controllers/data-control-panel/UploadController'
import TeamController from './controllers/data-control-panel/TeamController'
import NewsController from './controllers/data-control-panel/NewsController'
import PlayerController from './controllers/data-control-panel/PlayerController'
import ChampionshipController from './controllers/data-control-panel/ChampionshipController'
import NewsSiteController from './controllers/data-site/news/NewsSiteController'
import TeamsSiteController from './controllers/data-site/teams/TeamsSiteController'
import PlayersSiteController from './controllers/data-site/players/PlayersSiteController'
import ChampionshipSiteController from './controllers/data-site/championships/ChampionshipSiteController'

const routes = express.Router();

const homeController = new HomeController();
const newsSiteController = new NewsSiteController();
const playerSiteController = new PlayersSiteController();
const championshipSiteController = new ChampionshipSiteController();

const loginController = new LoginController();
const uploadController = new UploadController();
const teamController = new TeamController();
const newsController = new NewsController();
const playerController = new PlayerController();
const championshipController = new ChampionshipController();
const teamsSiteController = new TeamsSiteController();
const upload = multer();

// request routes
routes.get('/featured-news', homeController.featuredNewsHome)
routes.get('/last-championships', homeController.lastChampionships)
routes.get('/new-teams-added', homeController.newTeamsAdded)
routes.get('/list-news', newsSiteController.listNews)
routes.get('/list-teams', teamsSiteController.listTeams)
routes.get('/list-players', playerSiteController.playersList)
routes.get('/list-championships', championshipSiteController.championshipList)

// request routes CP
routes.get('/list-teams-options', verifyJWT, teamController.listTeamsOptions)
routes.get('/list-news-cp', verifyJWT, newsController.listNewsCP)
routes.get('/list-teams-cp', verifyJWT, teamController.listTeamsCP)
routes.get('/list-player-options', verifyJWT, playerController.listTeamsOptions)
routes.get('/list-championship-cp', verifyJWT, championshipController.listChampionshipCP)
routes.get('/list-players-cp', verifyJWT, playerController.listPlayersCP)

routes.post('/login', loginController.authenticate)
routes.post('/upload-images', verifyJWT, upload.single('file'), uploadController.uploadImages)
routes.post('/new-team', verifyJWT, teamController.newTeam)
routes.post('/add-news', verifyJWT, newsController.addNews)
routes.post('/add-player', verifyJWT, playerController.newPlayer)
routes.post('/add-championship', verifyJWT, championshipController.createChampionship)

routes.delete('/delete-news-cp', verifyJWT, newsController.deleteNews)
routes.delete('/delete-team-cp', verifyJWT, teamController.deleteTeam)
routes.delete('/delete-championship-cp', verifyJWT, championshipController.deleteChampionship)
routes.delete('/delete-player-cp', verifyJWT, playerController.deletePlayer)

export default routes;