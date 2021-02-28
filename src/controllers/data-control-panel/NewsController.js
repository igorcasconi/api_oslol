import { v4 as uuidv4 } from 'uuid';

import db from '../../database/connection'

export default class NewsController {

  async addNews (req, res) {

    if (!req.body) return res.status(400).json({ error: 'Sem dados para ser gravados!'});

    const id = uuidv4();
    const { title, text, date } = req.body;
    const formattedDate = date.replace('T', ' ').replace('Z', '')

    await db.from('fl_news').insert({ idNews: id, title, text, date: formattedDate });

    return res.status(200).json({ success: true });

  }
}