import dotenv from 'dotenv'

dotenv.config({path: '../.env'});
import express from 'express';
import routes from './routes';
import cors from 'cors'

const app = express();
const port = process.env.PORT || 5000
const host = '0.0.0.0';

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, host, () => {
  console.log('Aplicação rodando na porta 4000')
});
