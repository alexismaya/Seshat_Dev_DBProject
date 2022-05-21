const { Router } = require('express')
const { getComidas, getComida, createComida,updateComida,deleteComida } = require('../controllers/comidas.controller')

const router = Router();

router.get('/Comidas', getComidas)

router.get('/Comidas/:id',getComida)

router.post('/Comidas',createComida)

router.put('/Comidas/:id',updateComida)

router.delete('/Comidas/:id',deleteComida)

module.exports = router;