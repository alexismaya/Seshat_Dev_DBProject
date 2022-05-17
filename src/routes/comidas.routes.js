const { Router } = require('express')
const { getComidas, getComida } = require('../controllers/comidas.controller')

const router = Router();

router.get('/Comidas', getComidas)

router.get('/Comidas/:id',getComida)

module.exports = router;