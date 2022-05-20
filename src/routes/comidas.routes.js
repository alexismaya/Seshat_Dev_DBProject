const { Router } = require('express')
const { getComidas, getComida, createComida } = require('../controllers/comidas.controller')

const router = Router();

router.get('/Comidas', getComidas)

router.get('/Comidas/:id',getComida)

router.post('/Comidas',createComida)

module.exports = router;