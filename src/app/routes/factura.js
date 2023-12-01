const conn = require("../../config/database");

module.exports = (app) => {
    //GET
    app.get('/holamundo', (req,res) => {
        res.json({saludo: "Hola Mundo!!"});
    });

    app.get('/factura', (req, res) => {
        let consulta = "select id, producto, cantidad, precio from factura";
        conn.query(consulta, (err, rows, cols) => {
            if(err) {
                res.status(500).json({status: 0, mensaje: "Error al consultar factura"});
            }else{
                res.json({status: 1, mensaje: "Datos obtenidos de factura: ", value:rows});
            }
        });
    });


    app.get('/factura/:id', (req, res) => {
        let consulta = `select id, producto, cantidad, precio from factura where id = ${req.params.id}`;
        conn.query(consulta, (err, rows, cols) => {
            if(err) {
                res.status(500).json({status: 0, mensaje: "Error al consultar factura"});
            }else if(rows.length > 0){
                res.json({status: 1, mensaje: "Datos obtenidos de factura: ", value:rows[0]});
            }else{
                res.status(400).json({status: 0, mensaje: `No se encontró el id ${req.params.id}`});
            }
        });
    });
    
    

    //POST
    app.post('/factura', (req, res) => {
        let consulta = `INSERT INTO factura(producto, cantidad, precio) values('${req.body.producto}',${req.body.cantidad}, ${req.body.precio})`;
        conn.query(consulta, (err, rows, cols) => {
            if(err) {
                res.status(500).json({status: 0, mensaje: "No se pudo insertar"});
            }else{
                res.json({status: 1, mensaje: "Insertado satisfactoriamente"});
            }
        });
    });



    //PUT -> UPDATE
    app.put("/factura/:id", (req, res) => {
        let consulta = `update factura set producto = '${req.body.producto}', cantidad = ${req.body.cantidad}, precio = ${req.body.precio} where id = ${req.params.id}`
        conn.query(consulta, (err, rows, cols) => {
            if(err){
                res.status(500).json({status: 0, mensaje: "No se pudo actualizar"});
            }else{
                res.json({status: 1, mensaje: `Modificado satisfactoriamente id = ${req.params.id}`});
            }
        })
    });




    //DELETE

    app.delete('/factura/:deleteID', (req, res) => {
        let consulta = `delete from factura where id = ${req.params.deleteID}`;
        conn.query(consulta, (err, rows, cols) => {
            if(err) {
                res.status(500).json({status: 0, mensaje: "No se pudo eliminar"});
            }else{
                res.json({status: 1, mensaje: `Eliminado satisfactoriamente id = ${req.params.deleteID}`});
            }
        });
    });
}