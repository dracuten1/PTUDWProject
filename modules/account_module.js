var account = require('../services/service')

module.exports = {
    add: (entity) => {
        return account.add('users', entity);
    },
    singleByUserName: (username) => {
        return account.load(`select * from users where username = 
        '${username}' AND password is not NULL`);
    },
    singleFbId: (fbId) => {
        return account.load(`select * from users where facebookId = '${fbId}'`);
    },
    updateProfile:(entity)=>{
        return account.update('users', 'id', entity);
    }
}