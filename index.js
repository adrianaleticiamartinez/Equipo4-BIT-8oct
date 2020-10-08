const webServer = require('./services/web-server.js');

async function start() {
    
    console.log('Comenzando aplicacion');

    try {
        // Comenzar servidor
        console.log('Comenzando servidor web');
        await webServer.init();
    } catch (error) {

        //Si hay error colocarlo en la consola y salir de proceso.
        console.error(error);
        process.exit(-1);
    }
}

start();