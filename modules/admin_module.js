var request = require('../services/service')

module.exports = {
    add: (entity) => {
        return account.add('users', entity);
    },
    loadBlogs: (options) => {
        sql = "select * from blogs";
    },
    singleByUserName: (username) => {
        return account.load(`select * from users where username = 
        '${username}' AND password is not NULL`);
    },
    singleFbId: (fbId) => {
        return account.load(`select * from users where facebookId = '${fbId}'`);
    }
}