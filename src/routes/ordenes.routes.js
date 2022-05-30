const { Router } = require('express')
const { getCantidadOrdenes, createOrden, agregaAlimento, getOrdenesEmpleadoXDia, getOrdenesRango, getPrecioTotal } = require('../controllers/ordenes.controllers')

const router = Router()

router.get('/CantOrdenes', getCantidadOrdenes)

router.get('/GetOrdenesEmpleado', getOrdenesEmpleadoXDia)

router.get('/OrdenesRango', getOrdenesRango)

router.get('/GetPrecioTotal/:id', getPrecioTotal)

router.post('/AgregarAlimentoOrden', agregaAlimento)

router.post('/CreateOrden', createOrden)

module.exports = router;