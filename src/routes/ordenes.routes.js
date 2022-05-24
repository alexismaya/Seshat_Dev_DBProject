const { Router } = require('express')
const { getCantidadOrdenes } = require('../controllers/ordenes.controllers')

const router = Router()

router.get('/CantOrdenes', getCantidadOrdenes)

module.exports = router;