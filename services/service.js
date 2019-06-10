var mysql = require('mysql')

var createConnection = () => {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'ptudw_db'

    });
}
module.exports = {
    load: sql => {
        return new Promise((resolve, reject) => {
            var connection = createConnection();
            connection.connect((err) => {
                if (err) console.log(err);
                else console.log('Connection successed!');

            });
            connection.query(sql, (error, rows, fields) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(rows);
                }
                connection.end();
            });
        });
    },
    add: (tableName, entity) => {
        return new Promise((resolve, reject) => {
            var connection = createConnection();
            connection.connect((err) => {
                if (err) console.log(err);
                else console.log('Connection successed!');

            });

            var sql = 'INSERT INTO ' + tableName + ' set ?';

            connection.query(sql, entity, (err, rows) => {
                if (err) reject(err);
                else
                    resolve(rows.insertId);
            });
            connection.end();
        })
    }
}