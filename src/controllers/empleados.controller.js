const pool = require('../db')

const getEmpleados = async (req, res) => {

    try {

        const empleados = await pool.query('SELECT * FROM empleado')

        console.log(empleados)
        res.json(empleados.rows)

    } catch (error) {
        console.log(error.message)
    }

}

const getEmpleado = async (res, req) => {

    try {
        const { id } = req.params
        const empleado = await pool.query('SELECT * FROM empleado WHERE num_empleado= $1', [id])

        res.json(empleado.rows[0])
    } catch (error) {
        console.log(error.message)
    }

}

const createEmpleado = async (req, res) => {

    try {
        const { edad, sueldo, fecha_nacimiento, rfc_empleado, nombre, ap_paterno, ap_materno, calle, numero, colonia, codigo_postal, estado } = req.body
        const result = await pool.query('INSERT INTO empleado (edad,sueldo,fecha_nacimiento,rfc_empleado,nombre,ap_paterno,ap_materno,calle,numero,colonia,codigo_postal,estado) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)', [
            edad, sueldo, fecha_nacimiento, rfc_empleado, nombre, ap_paterno, ap_materno, calle, numero, colonia, codigo_postal, estado
        ])
    } catch (error) {
        console.log(error.message)
    }

}

const updateEmpleado = async (req, res) => {

    try {
        const { id } = req.params
        const { edad, sueldo, fecha_nacimiento, rfc_empleado, nombre, ap_paterno, ap_materno, calle, numero, colonia, codigo_postal, estado } = req.body
        const result = await pool.query('UPDATE empleado SET edad= $1, sueldo= $2, fecha_nacimiento=$3,rfc_empleado=$4,nombre=$5,ap_paterno=$6,ap_materno=$7,calle=$8,numero=$9,colonia=$10,codigo_postal=$11,estado=12 WHERE num_empleado=$13', [
            edad, sueldo, fecha_nacimiento, rfc_empleado, nombre, ap_paterno, ap_materno, calle, numero, colonia, codigo_postal, estado, num_empleado
        ])
        return res.json(result.rows[0])
    } catch (error) {
        console.log(error.message)
    }

}

const deleteEmpleado = async (req, res) => {

    try {
        const { id } = req.params
        const result = pool.query('DELETE FROM empleado WHERE num_empleado=$1', [id])
        return res.sendStatus(204); // sin devolución pero todo en orden :)
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    getEmpleados,
    getEmpleado,
    createEmpleado,
    updateEmpleado,
    deleteEmpleado,
}