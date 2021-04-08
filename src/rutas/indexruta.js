const express = require ('express');
const rutas = express.Router();

const {rendermostrar} =require('../controladores/indexcontroller')
rutas.get('/',rendermostrar);
module.exports= rutas;