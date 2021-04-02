import { v4 as uuidv4 } from 'uuid';

import db from '../../database/connection'

const table = 'fl_players';
export default class TeamController {

  async newPlayer (req, res) {

    const filePathSubmit = 'http://oeslol.cf/images/player'

    if (!req.body) return res.status(400).json({ error: 'Sem dados para ser gravados!'})

    const id = uuidv4();
    const { name, nickname, document, team, dateOfBirth, image, city, state } = req.body;

    if (!name) return res.status(400).json({ error: 'Necessário o envio da informação nome do jogador!'});
    if (!nickname) return res.status(400).json({ error: 'Necessário o envio da informação apelido de jogo!'});
    if (!document) return res.status(400).json({ error: 'Necessário o envio da informação do Documento de Identificação!'});
    if (!city) return res.status(400).json({ error: 'Necessário o envio da informação Cidade!'});
    if (!state) return res.status(400).json({ error: 'Necessário o envio da informação Estado!'});
    if (!team) return res.status(400).json({ error: 'Necessário o envio da informação do Time do Jogador!'});
    if (!dateOfBirth) return res.status(400).json({ error: 'Necessário o envio da informação de data de nascimento!'});
    if (!image) return res.status(400).json({ error: 'Necessário o envio da informação imagem!'});

    await db(table).insert({idPlayer: id, name, image: `${filePathSubmit}/${image}`, document, idTeam: team, nickname, dateOfBirth, city, state });
    
    return res.status(200).json({ success: true });

  }

  async listTeamsOptions (req, res) {
    
    const query = await db(table).select('idPlayer', 'name');

    if (!query) return res.status(400).json({ error: 'Nenhum player encontrado'});

    return res.status(200).json(query);
  }

  async listPlayersCP (req, res) {
    
    const { page } = req.query;
    const currentPage = parseInt(page) || 1;

    const queryTotalPages = await db.from(table).count('idPlayer', {as: 'total'});

    if (!queryTotalPages) return res.status(200).json({ message: 'Não possui notícias'});
    
    const totalRows =  queryTotalPages[0].total;
    const calcTotalPages = Math.ceil(totalRows / 10);
    const countItems = (currentPage * 10) - 10;

    const query = await db.from(table)
    .join('fl_teams', 'fl_players.idTeam', 'fl_teams.idTeam')
    .select('fl_players.idPlayer', 'fl_players.nickname', {playerName: 'fl_players.name'}, {teamName: 'fl_teams.name'})
    .limit(10).offset(countItems);

    if (!query) return res.status(400).json({ error: 'Ocorreu um erro ao buscar as notícias' });

    return res.status(200).json({ data: query, page: currentPage, totalPages: calcTotalPages, total: totalRows });
    
  }

  async deletePlayer (req, res) {
    const { id } = req.query;

    if (!id) return res.status(400).json({error: 'Não foi enviado o id para exclusão'});

    await db(table).where('idPlayer', id).del();

    return res.status(200).json({success: true});
  }
}