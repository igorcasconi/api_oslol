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

    await db(table).insert({name, division, idChampionship: id, link, data: formattedDate});
    
    if (selectedTeams.length > 0) {
      selectedTeams.forEach(async (items) => {
        await db('fl_teams_championships').insert({idTeam: items.idTeam, idChampionship: id});
      });
    }

    return res.status(200).json({ success: true });

  }

}