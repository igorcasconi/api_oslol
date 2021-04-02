import { v4 as uuidv4 } from 'uuid';

import db from '../../database/connection'

const table = 'fl_news'

const TableAttr = {
  id: 'idNews',
  title: 'title',
  text: 'text',
  date: 'date',
  createdAt: 'createdAt',
  updateAt: 'updateAt'
}
export default class NewsController {
  
  async addNews (req, res) {

    if (!req.body) return res.status(400).json({ error: 'Sem dados para ser gravados!'});

    const id = uuidv4();
    const { title, text, date } = req.body;
    const formattedDate = date.replace('T', ' ').replace('Z', '')

    await db.from(table).insert({ idNews: id, title, text, date: formattedDate });

    return res.status(200).json({ success: true });

  }

  async listNewsCP (req, res) {
    
    const { page } = req.query;
    const currentPage = parseInt(page) || 1;

    const queryTotalPages = await db.from(table).count(TableAttr.id, {as: 'total'});

    if (!queryTotalPages) return res.status(200).json({ message: 'Não possui notícias'});
    
    const totalRows =  queryTotalPages[0].total;
    const calcTotalPages = Math.ceil(totalRows / 10);
    const countItems = (currentPage * 10) - 10;

    const query = await db.from(table).select(TableAttr.id, TableAttr.title, TableAttr.date).limit(10).offset(countItems);

    if (!query) return res.status(400).json({ error: 'Ocorreu um erro ao buscar as notícias' });

    return res.status(200).json({ data: query, page: currentPage, totalPages: calcTotalPages, total: totalRows });
    
  }

  async deleteNews (req, res) {
    const { id } = req.query;

    if (!id) return res.status(400).json({error: 'Não foi enviado o id para exclusão'});

    await db(table).where('idNews', id).del();

    return res.status(200).json({success: true});
  }

}