const {Pool} = require('pg');

const conexion = new Pool({
    host: 'containers-us-west-108.railway.app',
    user: 'postgres',
    password: 'vXQX93lNwtVtjOhCWTbe',
    database: 'railway',
    port: 6960
});

async function alumnos(req,res){
    let respuesta_base = await conexion.query("SELECT * FROM alumnos WHERE id_alumno = 1")
    res.status(200).json(respuesta_base.rows)
}

async function crearAlumno(req,res){
    console.log(req.body)
    let {nombre,
        apellido,
        correo,
        comida_favorita,
        } = req.body

    let respuesta_base = await conexion.query(`INSERT INTO 
    alumnos(nombre,apellido,correo,comida_favorita)
    VALUES($1,$2,$3,$4)`,[nombre,apellido,correo,comida_favorita])
    res.status(200).json(respuesta_base)
    
}

module.exports = {
    alumnos,
    crearAlumno,
}