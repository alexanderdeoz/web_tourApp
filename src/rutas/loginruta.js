const express = require ('express');

const rutas = express.Router();

const {rendermostrar} =require('../controladores/logincontroller')
rutas.get('/login',rendermostrar);
rutas.post('/login',rendermostrar);
module.exports= rutas;