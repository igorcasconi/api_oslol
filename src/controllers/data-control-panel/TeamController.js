import { v4 as uuidv4 } from 'uuid';

import db from '../../database/connection'

export default class TeamController {

  async newTeam (req, res) {

    const filePathSubmit = 'images/teams'

    if (!req.body) return res.status(400).json({ error: 'Sem dados para ser gravados!'})

    const id = uuidv4();
    const { name, division, image, link} = req.body;

    if (!name) return res.status(400).json({ error: 'Necessário o envio da informação nome do time!'});
    if (!division) return res.status(400).json({ error: 'Necessário o envio da informação divisão!'});
    if (!image) return res.status(400).json({ error: 'Necessário o envio da informação imagem!'});

    await db('fl_teams').insert({idTeam: id, name, image: `${filePathSubmit}/${image}`, division, linkPage: link});
    
    return res.status(200).json({ success: true });

  }
}