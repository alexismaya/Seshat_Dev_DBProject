const { Router } = require('express')
const { getEmpleados, getEmpleado, createEmpleado, updateEmpleado, deleteEmpleado } = require('../controllers/empleados.controller')

const router = Router()

router.get('/Empleados', getEmpleados)

router.get('/Empleados/:name', getEmpleado)

router.post('/Empleados', createEmpleado)

router.put('/Empleado/:name', updateEmpleado)

router.delete('/Empleado/:name', deleteEmpleado)

module.exports = router;