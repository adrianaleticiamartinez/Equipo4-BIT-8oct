const oracledb = require('oracledb');
const config = {
    user: 'c##fgt',
    password: 'password',
    connectString: 'localhost:1521/orcl'
}

async function findID (id) {
    let connection;

    try {
        connection = await oracledb.getConnection(config);
        const result = await connection.execute(/*query*/
            `SELECT * FROM baseclientes WHERE idcliente = :id`, [id]
        )

        console.log(result.rows[0]);

    } catch (error) {
        console.log(error);
    } finally {
        if (connection) {
            await connection.close();
        }
    }
}

async function findUser(id, auth) {
    let connection;

    try {
        connection = await oracledb.getConnection(config);
        const result = await connection.execute(/*query*/
            `SELECT perfil FROM baseusuarios WHERE idusuario = :id AND auth = :auth`, [id, auth]
        )

        console.log(result.rows[0]);

    } catch (error) {
        console.log(error);
    } finally {
        if (connection) {
            await connection.close();
        }
    }
}

module.exports.findID = findID;
module.exports.findUser = findUser;