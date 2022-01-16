import { databaseUniversity } from "../../../utils/constants";

export default class ConstantsController {
  async loginConstant(req, res) {
    const { ra, password } = req.body.data;

    if (!ra || !password)
      return res.status(400).json({ error: "Usuário ou senha está vazio!" });

    const raFound = databaseUniversity.find((user) => user.ra === ra);
    const correctPassword = raFound.password === password;

    if (!raFound || !correctPassword)
      return res.status(400).json({ error: "Usuário e/ou senha incorretos!" });

    return res.status(200).json({ data: raFound });
  }
}
