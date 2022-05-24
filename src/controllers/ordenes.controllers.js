const pool = require('../db')

const getCantidadOrdenes = async (req,res) => {
    const result = await pool.query('SELECT count(*) FROM orden')

    res.json(result.rows[0]) 
}

module.exports = {
    getCantidadOrdenes
}