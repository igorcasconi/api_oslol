import jwt from 'jsonwebtoken'
import md5 from 'blueimp-md5'

import db from '../../database/connection'
export default class LoginController {

  async authenticate (req, res) {

    if (!req.body.email || !req.body.password) return res.status(400).json({error: 'Usuário ou senha está vazio!'});

    const email = req.body.email;
    const pass = md5(req.body.password);

    const query = await db('fl_users')
    .where('users_email', '=', email)
    .where('users_pass', '=', pass).select('*').limit(1);

    if (query == '') return res.status(400).json({error: 'Usuário ou senha incorreto!'});

    const token = jwt.sign({data: query[0]?.users_email}, process.env.PRIVATE_KEY, {
      expiresIn: '24h'
    })

    return res.status(200).json({...query[0], token: token});
  }
}