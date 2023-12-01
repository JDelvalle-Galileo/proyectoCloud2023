const conn = require("../../config/database");

module.exports = (app) => {
    //GET
    app.get('/comics', (req, res) => {
        let consulta = `select id, nombre, impresion, sinopsis, editorial, emailUsuario from comics;`;
        conn.query(consulta, (err, rows, cols) => {
            if(err) {
                res.status(500).json({status: 0, mensaje: "No se pudo consultar la base de datos."});
            }else{
                res.json({status: 1, mensaje: "Lista de comics: ", comics: rows});
            }
        });
    });

    app.get('/comics/:id', (req, res) => {
        let consulta = `select id, nombre, impresion, sinopsis, editorial, emailUsuario from comics where id = ${req.params.id}`;
        conn.query(consulta, (err, rows, cols) => {
            if(err) {
                res.status(500).json({status: 0, mensaje: "No se pudo consultar la base de datos."});
            }else{
                res.json({status: 1, mensaje: "Lista de comics: ", comics: rows});
            }
        });
    });



    //PUT -> UPDATE
    app.put("/insertar_comic", (req, res) => {
        let consulta = `insert into comics(nombre, impresion, sinopsis, editorial, emailUsuario) 
        values ("${req.body.nombre}", "${req.body.impresion}",
         "${req.body.sinopsis}", "${req.body.editorial}", "${req.body.emailUsuario}");`
        conn.query(consulta, (err, rows, cols) => {
            if(err){
                res.status(500).json({status: 0, mensaje: "No se pudo insertar"});
            }else{
                res.json({status: 1, mensaje: `Se guardó correctamente el comic ${req.body.nombre}`});
            }
        })
    });

    app.put("/update_comic", (req, res) => {
        let consulta = `update comics set nombre = "${req.body.nombre}", impresion = "${req.body.impresion}", sinopsis = "${req.body.sinopsis}",
        editorial = "${req.body.editorial}" where id = "${req.body.id}"`
        conn.query(consulta, (err, rows, cols) => {
            if(err){
                res.status(500).json({status: 0, mensaje: "No se pudo insertar"});
            }else{
                res.json({status: 1, mensaje: `Se editó correctamente el comic ${req.body.nombre}`});
            }
        })
    });




    //DELETE

    app.delete('/comics/:deleteID', (req, res) => {
        let consulta = `delete from comics where id = ${req.params.deleteID}`;
        conn.query(consulta, (err, rows, cols) => {
            if(err) {
                res.status(500).json({status: 0, mensaje: "No se pudo eliminar"});
            }else{
                res.json({status: 1, mensaje: `Eliminado satisfactoriamente id = ${req.params.deleteID}`});
            }
        });
    });
}