import { v4 as uuidv4 } from 'uuid';

import db from '../../database/connection'

export default class TeamController {

  async newPlayer (req, res) {

    const filePathSubmit = 'images/player'

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

    await db('fl_players').insert({idPlayer: id, name, image: `${filePathSubmit}/${image}`, document, idTeam: team, nickname, dateOfBirth, city, state });
    
    return res.status(200).json({ success: true });

  }
}