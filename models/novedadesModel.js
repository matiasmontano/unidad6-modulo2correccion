const { query } = require('express');
var pool = require('./bd');

//listado
async function getNovedades() {
    var query = "select * from novedades";
    var rows = await pool.query(query);
    return rows;
}
//borrar
async function deleteNovedadbyId(id) {
    var query = "delete from novedades where id = ?";
    var rows = await pool.query(query, [id]);
    return rows;
}

//insert

async function insertNovedad(obj) {
    try {
        var query = 'insert into novedades set ?';
        var rows = await pool.query(query, [obj]);
        return rows;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
}

//modificar que traiga los datos de una novedad por id 

async function getNovedadById(id) {
    var query = "select * from novedades where id = ? ";
    var rows = await pool.query(query, [id]);
    return rows[0]
}

//modificar update

async function modificarNovedadById(obj, id) {
    try {
        var query = "update novedades set ? where id = ?";
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        throw error;
    }
}



module.exports = { getNovedades, deleteNovedadbyId, insertNovedad, getNovedadById, modificarNovedadById }
