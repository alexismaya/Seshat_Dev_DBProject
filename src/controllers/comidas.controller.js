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

const getComida = async (req, res) => {

    const { id } = req.params;
    const result = await pool.query('SELECT * FROM comidas WHERE id_comida = $1', [id]);

    res.json(result.rows[0]);

    try {
        const comida = await pool.query('')
    } catch (error) {
        console.log(error.message)
    }

}

const createComida = async (req, res) => {

    try {
        const { precio, receta, nombre_alimento, disponibilidad, nombre_categoria, descripcion, desc_categoria } = req.body;

        const result = await pool.query('INSERT INTO comidas (precio, receta, nombre_alimento, disponibilidad, nombre_categoria, descripcion, desc_categoria) VALUES ($1,$2,$3,$4,$5,$6,$7)', [
            precio,
            receta,
            nombre_alimento,
            disponibilidad,
            nombre_categoria,
            descripcion,
            desc_categoria,
        ])
    } catch (error) {
        console.log(error.message)
    }

}

module.exports = {
    getComidas,
    getComida,
    createComida
}