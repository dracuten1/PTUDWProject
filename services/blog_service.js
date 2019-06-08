var mysql = require('mysql');

var createConnection = () => {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'ptudw_db'
    });
}
module.exports = {
    all: sql => {
        return new Promise((resolve, reject) => {
            var connection = createConnection();
            connection.connect((err) => {
                if (err) console.log(err);
                else console.log('Connection successed!');

            });

            connection.query(sql,(err,rows,fiedl)=>
            {
                if(err) reject(err);
                else
                resolve(rows);
            });
            connection.end();
        })
    }
}