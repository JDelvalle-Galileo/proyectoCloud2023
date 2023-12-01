const mysql = require("mysql");
const conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'Julio2412!',
    database: 'faw2023'
});

conn.connect((err) => {
    if(err){
        console.log("Error en conexión a mysqlServer");
    }else{
        console.log("Conexión satisfactoria");
    }
});

module.exports = conn;