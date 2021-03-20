import { v4 as uuidv4 } from 'uuid';

import db from '../../database/connection'

const table = 'fl_teams';

const TableAttr = {
  id: 'idTeam',
  name: 'name',
  image: 'image',
  division: 'division',
  linkPage: 'linkPage'
};
export default class TeamController {

  async newTeam (req, res) {

    const filePathSubmit = 'images/teams'

    if (!req.body) return res.status(400).json({ error: 'Sem dados para ser gravados!'})

    const id = uuidv4();
    const { name, division, image, link} = req.body;

    if (!name) return res.status(400).json({ error: 'Necessário o envio da informação nome do time!'});
    if (!division) return res.status(400).json({ error: 'Necessário o envio da informação divisão!'});
    if (!image) return res.status(400).json({ error: 'Necessário o envio da informação imagem!'});

    await db(table).insert({idTeam: id, name, image: `${filePathSubmit}/${image}`, division, linkPage: link});
    
    return res.status(200).json({ success: true });

  }

  async listTeamsOptions (req, res) {
    
    const query = await db(table).select('idTeam', 'name');

    if (!query) return res.status(400).json({ error: 'Nenhum time encontrado'});

    return res.status(200).json(query);
  }

  async listTeamsCP (req, res) {
    
    const { page } = req.query;
    const currentPage = parseInt(page) || 1;

    const queryTotalPages = await db.from(table).count(TableAttr.id, {as: 'total'});

    if (!queryTotalPages) return res.status(200).json({ message: 'Não possui times cadastrados'});
    
    const totalRows =  queryTotalPages[0].total;
    const calcTotalPages = Math.ceil(totalRows / 10);
    const countItems = (currentPage * 10) - 10;

    const query = await db.from(table).select(TableAttr.id, TableAttr.name, TableAttr.division).limit(10).offset(countItems);

    if (!query) return res.status(400).json({ error: 'Ocorreu um erro ao buscar as notícias' });

    return res.status(200).json({ data: query, page: currentPage, totalPages: calcTotalPages, total: totalRows });
    
  }

  async deleteTeam (req, res) {
    const { id } = req.query;

    if (!id) return res.status(400).json({error: 'Não foi enviado o id para exclusão'});

    await db(table).where('idTeam', id).del();

    return res.status(200).json({success: true});
  }
}