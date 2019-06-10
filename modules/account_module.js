var account=require('../services/service')

module.exports={
    add:(entity)=>{
        return account.add('users',entity);
    },
    singleByUserName: (username) => {

        return account.load('select * from users where username = '+'\''+ username+'\'');
      },
    
}