"use strict";

const http = require("http");
const { getNombre, suma } = require("./operaciones");

console.log("RESULTADO", suma(5, 6));
console.log("PERSONA", getNombre());

const server = http.createServer(function (req, res) {
    res.writeHead(301, { "Content-type": "text/html", "profe":"Rafa" });
    res.end("<h1>Hola mundo, desde Colombia</h1>");
})

server.listen(8080);
console.log("Servidor corriendo en el puerto 8080...");