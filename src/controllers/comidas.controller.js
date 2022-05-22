const pool = require('../db')

const getComidas = async (req, res) => {

    try {

        const comidas = await pool.query('SELECT * FROM menu_categoria')

        console.log(comidas)
        res.json(comidas.rows);

    } catch (error) {
        console.log(error.message);
    }

}

const getComida = async (req, res) => {

    const { id } = req.params;
    const result = await pool.query('SELECT * FROM menu_categoria WHERE id_identificador = $1', [id]);

    res.json(result.rows[0]);

}

const createComida = async (req, res) => {

    try {
        const { precio, receta, nombre_alimento, disponibilidad, nombre_categoria, descripcion, desc_categoria } = req.body;


        const result = await pool.query('INSERT INTO menu_categoria (precio, receta, nombre_alimento, disponibilidad, nombre_categoria, descripcion, desc_categoria) VALUES ($1,$2,$3,$4,$5,$6,$7)', [
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

const updateComida = async (req, res) => {

    try {
        const { id } = req.params;
        const { precio, receta, nombre_alimento, disponibilidad, nombre_categoria, descripcion, desc_categoria } = req.body;
        const result = await pool.query('UPDATE menu_categoria SET precio= $1, receta= $2, nombre_alimento= $3,disponibilidad= $4,nombre_categoria= $5, descripcion= $6,desc_categoria= $7 WHERE id_identificador= $8 RETURNING *', [
            precio, 
            receta, 
            nombre_alimento, 
            disponibilidad, 
            nombre_categoria, 
            descripcion, 
            desc_categoria, 
            id
        ]);

        if (result.rows.length == 0)
            return res.status(404).json({
                message: "Task not found",
            });

        console.log(result)

        
        return res.json(result.rows[0])
        


    } catch (error) {
        console.log(error.message)
    }

}

const deleteComida = async (req,res) => {

    try {
        const {id} = req.params
        const result = pool.query('DELETE FROM menu_categoria WHERE id_comida= $1',[id])
        return res.sendStatus(204); // sin devolución pero todo en orden :)
    } catch (error) {
        console.log(error.message)
    }

}

module.exports = {
    getComidas,
    getComida,
    createComida,
    updateComida,
    deleteComida
}
