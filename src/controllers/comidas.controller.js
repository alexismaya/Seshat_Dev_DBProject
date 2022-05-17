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

const getComida = async (req,res) => {

    const {id} = req.params;
    const result = await pool.query('SELECT * FROM comidas WHERE id_comida = $1',[id]);

    res.json(result.rows[0]);

    try {
        const comida = await pool.query('')
    } catch (error) {
        console.log(error.message)
    }

}

module.exports = {
    getComidas,
    getComida
}