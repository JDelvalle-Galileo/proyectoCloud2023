const app = require("./config/server");
require("./app/routes/usuarios")(app);
require("./app/routes/comics")(app);

app.listen(app.get("port"), () => {
  console.log(`Ejecutando servidor en el puerto ${app.get("port")}`);
});
