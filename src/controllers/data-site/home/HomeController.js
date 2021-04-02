import db from '../../../database/connection'

export default class HomeController {

  async featuredNewsHome (req, res) {

    const { total } = req.query;
    const totalFeatured = parseInt(total) || 3; 

    const query = await db.from('fl_news').select('idNews', 'text', 'date', 'title').orderBy('createdAt', 'desc').limit(totalFeatured);
  
    if (!query) return res.status(400).json({ error: 'Ocorreu um erro ao buscar as notícias' });

    return res.status(200).json(query);
  }

  async lastChampionships (req, res) {
    const { total } = req.query;
    const totalChampionship = parseInt(total) || 4; 

    const query = await db.from('fl_championships').select('idChampionship', 'name', 'date', 'link').orderBy('date', 'desc').limit(totalChampionship);
  
    if (!query) return res.status(400).json({ error: 'Ocorreu um erro ao buscar os campeonatos' });

    return res.status(200).json(query);
  }

  async newTeamsAdded (req, res) {
    const { total } = req.query;
    const totalTeams = parseInt(total) || 10;

    const query = await db.from('fl_teams').select('idTeam', 'name', 'image').orderBy('createdAt', 'desc').limit(totalTeams);
  
    if (!query) return res.status(400).json({ error: 'Ocorreu um erro ao buscar os times' });

    return res.status(200).json(query);
  }

}