const oracledb = require('oracledb');
const config = {
    user: 'c##fgt',
    password: 'password',
    connectString: 'localhost:1521/orcl'
}

async function findIDTodo (id) {
    let connection;
    const opts = [];
    opts.outFormat = oracledb.OBJECT;
    opts.autoCommit = true;

    try {
        connection = await oracledb.getConnection(config);
        const result = await connection.execute(/*query*/
            `SELECT * FROM baseclientes WHERE idcliente = :id`, [id], opts
        );

        console.log(result.rows[0]);

    } catch (error) {
        console.log(error);
    } finally {
        if (connection) {
            await connection.close();
        }
    }

    return result;
}

async function findIDRes (id) {
    let connection;
    const opts = [];
    opts.outFormat = oracledb.OBJECT;
    opts.autoCommit = true;

    try {
        connection = await oracledb.getConnection(config);
        const result = await connection.execute(/*query*/
            `SELECT idCliente, nombre, sexo, segmento, cuenta FROM baseclientes WHERE idcliente = :id`, [id], opts
        );

        console.log(result.rows[0]);

    } catch (error) {
        console.log(error);
    } finally {
        if (connection) {
            await connection.close();
        }
    }

    return result;
}

async function findUser(id, auth) {
    let connection;

    try {
        connection = await oracledb.getConnection(config);
        const result = await connection.execute(/*query*/
            `SELECT perfil FROM baseusuarios WHERE idusuario = :id AND auth = :auth`, [id, auth]
        );

        console.log(result.rows[0]);

    } catch (error) {
        console.log(error);
    } finally {
        if (connection) {
            await connection.close();
        }
        // return result;
    }
}

module.exports.findIDTodo = findIDTodo;
module.exports.findIDRes = findIDRes;
module.exports.findUser = findUser;