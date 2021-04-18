import { v4 as uuidv4 } from 'uuid';

import db from '../../database/connection';

const table = 'fl_championships';

export default class ChampionshipController {

  async createChampionship (req, res) {

    if (!req.body) return res.status(400).json({ error: 'Sem dados para ser gravados!'});

    const id = uuidv4();
    const { name, link, division, date, selectedTeams } = req.body;
    const formattedDate = date.replace('T', ' ').replace('Z', '')

    if (!name) return res.status(400).json({ error: 'Necessário o envio da informação nome do campeonato!'});
    if (!division) return res.status(400).json({ error: 'Necessário o envio da informação da divisão do campeonato!'});
    if (!selectedTeams) return res.status(400).json({ error: 'Necessário o envio da informação times para campeonato!'});
    if (!date) return res.status(400).json({ error: 'Necessário o envio da informação data do campeonato!'});

    await db(table).insert({name, division, idChampionship: id, link, date: formattedDate});
    
    if (selectedTeams.length > 0) {
      selectedTeams.forEach(async (items) => {
        await db('fl_teams_championships').insert({idTeam: items.idTeam, idChampionship: id, victorys: 0, defeats: 0});
      });
    }

    return res.status(200).json({ success: true });

  }

  async listChampionshipCP (req, res) {
    
    const { page } = req.query;
    const currentPage = parseInt(page) || 1;

    const queryTotalPages = await db.from(table).count('idChampionship', {as: 'total'});

    if (!queryTotalPages) return res.status(200).json({ message: 'Não possui notícias'});
    
    const totalRows =  queryTotalPages[0].total;
    const calcTotalPages = Math.ceil(totalRows / 10);
    const countItems = (currentPage * 10) - 10;

    const query = await db.from(table).select('idChampionship', 'name', 'division', 'date').limit(10).offset(countItems);

    if (!query) return res.status(400).json({ error: 'Ocorreu um erro ao buscar as notícias' });

    return res.status(200).json({ data: query, page: currentPage, totalPages: calcTotalPages, total: totalRows });
    
  }

  async deleteChampionship (req, res) {
    const { id } = req.query;

    if (!id) return res.status(400).json({error: 'Não foi enviado o id para exclusão'});

    await db(table).where('idChampionship', id).del();
    await db('fl_teams_championships').where('idChampionship', id).del();

    return res.status(200).json({success: true});
  }

}