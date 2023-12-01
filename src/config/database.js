const mysql = require("mysql");
const conn = mysql.createConnection({
    host: 'juliodelvalle.mysql.database.azure.com',
    user: 'juliodelvalle',
    password: 'user12345!',
    database: 'proyectocloud'
});

conn.connect((err) => {
    if(err){
        console.log("Error en conexión a mysqlServer");
        console.log(err);
    }else{
        console.log("Conexión satisfactoria");
    }
});

module.exports = conn;