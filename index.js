const webServer = require('./services/web-server.js');
const database = require('./services/database.js');

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

    // Bloque try catch para inicializar base de datos
    try {
        console.log('Comenzando base de datos');
        const result = database.findID('BF000002999');
        const usuario = database.findUser('AndArt', 'qwerty');
    } catch (error) {
        console.log(error);
        process.exit(-1);
    }
}

start();