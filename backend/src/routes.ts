import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController';


const routes = Router();
const upload = multer(uploadConfig);

// Arquitetura MVC:
// [M]odel => Representação de uma entidade/tabela (dados de um usuário, ou no caso, orfanato) no banco.
// [V]iews => Como as coisas são visualizadas/ficam disponíveis para o front-end.
// [C]ontrollers => Onde ficam a lógica das rotas.

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);

export default routes;
