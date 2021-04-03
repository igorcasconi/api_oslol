import db from '../../../database/connection';

const table = 'fl_news'

export default class NewsSiteController {

  async listNews (req, res) {
    const { page } = req.query;
    const currentPage = parseInt(page) || 1;

    const queryTotalPages = await db.from(table).count('idNews', {as: 'total'});

    if (!queryTotalPages) return res.status(200).json({ message: 'Não possui notícias'});
    
    const totalRows =  queryTotalPages[0].total;
    const calcTotalPages = Math.ceil(totalRows / 10);
    const countItems = (currentPage * 10) - 10;

    const query = await db.from(table).select('idNews', 'title', 'text', 'date').limit(10).offset(countItems);

    if (!query) return res.status(400).json({ error: 'Ocorreu um erro ao buscar as notícias' });

    return res.status(200).json({ data: query, page: currentPage, totalPages: calcTotalPages, total: totalRows });
  }
}