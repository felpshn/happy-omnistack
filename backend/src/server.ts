import express from 'express';
import 'express-async-errors';
import path from 'path';
import cors from 'cors';

import './database/connection';
import routes from './routes';
import errorHandler from './errors/handler';


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

app.listen(3333);

// Métodos HTTP = GET, POST, PUT, DELETE
// GET = Buscando uma informação.
// POST = Criando uma informação.
// PUT = Editando uma informação.
// DELETE = Deletando uma informação.

// Parâmetros HTTP:
// Query Params: http://localhost:3333/users?search=felipe (Procurar por um recurso, no caso, um usuário com nome felipe)
// Route Params: http://localhost:3333/users/1 (Identificar um recurso, no caso, um usuário com id=1)
// Body: http://localhost:3333/users/1 (Mostra informações compostas, no caso, informações de um usuário com id=1)

// Database:
// SQL ~> Driver Nativo
// Knex & ORM ~> Facilita lidar com o banco de dados

//console.log(request.query);
//console.log(request.params);
//console.log(request.body);
