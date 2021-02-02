var knex = require('knex')({
  client: 'mysql',
  connection: {
      host : process.env.DATABASE_URL,
      user : process.env.DATABASE_USER,
      password : process.env.DATABASE_PASS,
      database : process.env.DATABASE_NAME 
   }
});

module.exports = knex