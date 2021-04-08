const express = require ('express');

const rutas = express.Router();

const {rendermostrar} =require('../controladores/regitrocontroller')
rutas.get('/Registro',rendermostrar);
rutas.post('/Registro',rendermostrar);
module.exports= rutas;