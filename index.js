const webServer = require('./services/web-server.js');
const database = require('./services/database.js');
const vistaModificada = require('./scriptDatos.js');
const { type } = require('os');

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
        const restringidos = ['APELLIDOPATERNO', 'APELLIDOMATERNO', 'FECHANACIMIENTO', 'NACIONALIDAD', 'RFC', 'TIPOID', 'NUMEROID', 'EMAIL'];
        const noRestringido = ['IDCLIENTE', 'NOMBRE', 'SEXO', 'SEGMENTO', 'CUENTA'];

        console.log('Comenzando base de datos');
        
        const usuario = database.findUser('AndArt', 'qwerty');
        const cliente = database.findIDTodo('BF000002999');
        // const cliente = database.findIDRes('BF000002999');

        //console.log(usuario);

        if (usuario[0] != '' || usuario[0] != null) {
            if (usuario == 'Manager') {
                console.log('USUARIO: Manager');
                const cliente = database.findIDTodo('BF000002999');
            }

            if (usuario == 'Restringido') {
                const cliente = database.findIDRes('BF000002999');
            }
        }

    } catch (error) {
        console.log(error);
        process.exit(-1);
    }
}

start();