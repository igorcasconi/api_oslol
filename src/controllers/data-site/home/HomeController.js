import db from '../../../database/connection'

export default class HomeController {

  async listNews (request, response) {

    const list = await db.select('*').from('fl_news');

    return response.json(list)
  }
}