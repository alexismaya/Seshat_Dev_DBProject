const { Router } = require('express')
const { getComidas } = require('../controllers/comidas.controller')

const router = Router();

router.get('/Comidas', getComidas)

module.exports = router;