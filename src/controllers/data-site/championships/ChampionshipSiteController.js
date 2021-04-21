import db from '../../../database/connection';

const table = 'fl_championships'

export default class ChampionshipSiteController {

  async championshipList (req, res) {
    const { page, filter } = req.query;
    const currentPage = parseInt(page) || 1;

    const queryTotalPages = await db.from(table).count('idChampionship', {as: 'total'});

    if (queryTotalPages <= 0) return res.status(200).json({ message: 'Não possui campeonatos'});
    
    const totalRows =  queryTotalPages[0].total;
    const calcTotalPages = Math.ceil(totalRows / 10);
    const countItems = (currentPage * 10) - 10;

    let query;
    
    if (filter) {
      query = await db.from(table)
      .where('name', 'like', `%${filter}%`)
      .orWhere('division', 'like', `%${filter}%`)
      .select('idChampionship', 'name as championshipName', 'division', 'date')
      .limit(10).offset(countItems)

    } else {
      query = await db.from(table)
      .select('idChampionship', 'name as championshipName', 'division', 'date')
      .limit(10).offset(countItems);
    }

    if (!query) return res.status(400).json({ error: 'Ocorreu um erro ao buscar os campeonatos' });

    return res.status(200).json({ data: query, page: currentPage, totalPages: calcTotalPages, total: totalRows });
  }

}