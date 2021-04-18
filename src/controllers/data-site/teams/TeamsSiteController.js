import db from '../../../database/connection';

const table = 'fl_teams'

const queryTeamList = 'SELECT F.idTeam, F.image as logoImage, F.name as teamName, F.idChampionship, D.name as lastChampionship, F.victorys, F.defeats, D.division FROM ' +
'(SELECT A.idTeam, A.name, A.image, ' +
'(SELECT B.idChampionship FROM fl_teams_championships AS B WHERE B.idTeam = A.idTeam ' +
'ORDER BY B.createdAt DESC LIMIT 1) AS idChampionship, ' +
'(SELECT B.victorys FROM fl_teams_championships AS B WHERE B.idTeam = A.idTeam ' +
'ORDER BY B.createdAt DESC LIMIT 1) AS victorys, ' +
'(SELECT B.defeats FROM fl_teams_championships AS B WHERE B.idTeam = A.idTeam ' +
'ORDER BY B.createdAt DESC LIMIT 1) AS defeats ' +
'FROM fl_teams AS A) AS F JOIN fl_championships AS D ON F.idChampionship = D.idChampionship ';

export default class NewsSiteController {

  async listTeams (req, res) {
    const { page, filter } = req.query;
    const currentPage = parseInt(page) || 1;

    const queryTotalPages = await db.from(table).count('idTeam', {as: 'total'});

    if (queryTotalPages <= 0) return res.status(200).json({ message: 'Não possui notícias'});
    
    const totalRows =  queryTotalPages[0].total;
    const calcTotalPages = Math.ceil(totalRows / 10);
    const countItems = (currentPage * 10) - 10;

    let query;
    
    if (filter) {
      query = await db.raw(queryTeamList + `WHERE F.name LIKE "%${filter}%" OR D.name LIKE "%${filter}%" ` + `LIMIT 10 OFFSET ${countItems}`)
      .then(resp => resp[0])
      .catch(err => { console.log(err) });

    } else {
      query = await db.raw(queryTeamList + 'LIMIT ? OFFSET ?', [10, countItems])
      .then(resp => resp[0])
      .catch(err => { console.log(err) });
    }

    if (!query) return res.status(400).json({ error: 'Ocorreu um erro ao buscar os times' });

    return res.status(200).json({ data: query, page: currentPage, totalPages: calcTotalPages, total: totalRows });
  }
}