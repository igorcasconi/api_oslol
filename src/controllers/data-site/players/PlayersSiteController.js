import db from '../../../database/connection';

const table = 'fl_players'

export default class NewsSiteController {

  async playersList (req, res) {
    const { page, filter } = req.query;
    const currentPage = parseInt(page) || 1;

    const queryTotalPages = await db.from(table).count('idPlayer', {as: 'total'});

    if (queryTotalPages <= 0) return res.status(200).json({ message: 'Não possui players'});
    
    const totalRows =  queryTotalPages[0].total;
    const calcTotalPages = Math.ceil(totalRows / 10);
    const countItems = (currentPage * 10) - 10;

    let query;
    
    if (filter) {
      query = await db.from(table)
      .where('fl_players.nickname', 'like', `%${filter}%`)
      .orWhere('fl_teams.name', 'like', `%${filter}%`)
      .join('fl_teams', 'fl_teams.idTeam', 'fl_players.idTeam')
      .select('fl_players.idPlayer', 'fl_players.nickname', 'fl_players.image', 'fl_teams.name as teamName')
      .limit(10).offset(countItems)

    } else {
      query = await db.from(table)
      .join('fl_teams', 'fl_teams.idTeam', 'fl_players.idTeam')
      .select('fl_players.idPlayer', 'fl_players.nickname', 'fl_players.image', 'fl_teams.name as teamName')
      .limit(10).offset(countItems);
    }

    if (!query) return res.status(400).json({ error: 'Ocorreu um erro ao buscar os times' });

    return res.status(200).json({ data: query, page: currentPage, totalPages: calcTotalPages, total: totalRows });
  }

}