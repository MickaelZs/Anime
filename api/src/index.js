import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import animeController from './controller/animeController.js';

const server = express();
server.use(animeController);
server.use(cors());
server.use(express.json());
server.listen(process.env.PORT, () => console.log (`API ONLINE NA PORTA ${process.env.PORT}`));