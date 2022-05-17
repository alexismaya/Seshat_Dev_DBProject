const pool = require('../db')

const getComidas = async (req, res) => {

    try {

        const comidas = await pool.query('SELECT * FROM comidas')

        console.log(comidas)
        res.json(comidas.rows);

    } catch (error) {
        console.log(error.message);
    }

}

module.exports = {
    getComidas
}