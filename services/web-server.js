const express = require('express');
const http = require('http');

function init() {
    //Crear nueva Promise para verificar si se inicializo el servidor correctamente.

    return new Promise((resolve, reject) => {
        const app = express();
        httpServer = http.createServer(app);
        app.use('/api/:id?', function(req, res) {
            //Function TODO
            console.log(req.originalUrl);
        });

        httpServer.listen(process.env.HTTP_PORT || 3000)
        // Resolver:
        .on ('listening', () => {
            console.log(`Web Server funcionando en localhost:${process.env.HTTP_PORT || 3000}`);
            resolve();
        })
        // Rechazo:
        .on ('error', (error) => reject(error));
    });
}

module.exports.init = init;