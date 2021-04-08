const express = require ('express');
const rutas = express.Router();

const {rendermostrar} =require('../controladores/games.controller')
rutas.get('/games',rendermostrar);
rutas.post('/games');
module.exports= rutas;