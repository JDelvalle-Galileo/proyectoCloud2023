const conn = require("../../config/database");

module.exports = (app) => {
    //GET
    app.get('/usuarios', (req, res) => {
        let consulta = `select id, email, nombre, fecha_nacimiento, sexo from usuarios`;
        conn.query(consulta, (err, rows, cols) => {
            if(err) {
                res.status(500).json({status: 0, mensaje: "No se pudo consultar la base de datos."});
            }else{
                res.json({status: 1, mensaje: "Lista de usuarios: ", usuarios: rows});
            }
        });
    });


    //POST
    app.post('/usuario_valido', (req, res) => {
        let consulta = `select id, email, nombre, fecha_nacimiento, sexo from usuarios where email = '${req.body.email}' and password = md5('${req.body.password}')`;
        conn.query(consulta, (err, rows, cols) => {
            if(err) {
                res.status(500).json({status: 0, mensaje: "No se pudo consultar la base de datos."});
            }else if(rows.length >= 1){
                res.json({status: 1, mensaje: "Usuario Válido", usuario: rows, usuario_valido: 1});
            }else{
                res.json({status: 1, mensaje: "Usuario No Válido", usuario: rows, usuario_valido: 0});
            }
        });
    });



    //PUT -> UPDATE
    app.put("/insertar_usuario", (req, res) => {
        let consulta = `insert into usuarios(email, password, nombre, fecha_nacimiento, sexo) 
        values ('${req.body.email}', md5('${req.body.password}'), '${req.body.nombre}', '${req.body.fecha_nacimiento}', '${req.body.sexo}');`
        conn.query(consulta, (err, rows, cols) => {
            if(err){
                res.status(500).json({status: 0, mensaje: "No se pudo insertar"});
            }else{
                res.json({status: 1, mensaje: `Se guardó correctamente el usuario ${req.body.nombre}`});
            }
        })
    });
}