var db = require('../utils/db');

module.exports = {
  all: () => {
    return db.load('SELECT c.name,c.id, COUNT(b.id) as num_of_blogs FROM category c LEFT JOIN (SELECT * FROM blog WHERE status = 1 ) as b ON c.id = b.cat_id GROUP BY c.name,c.id ');
  },

  allByCat : CategoryID => {
    return db.load(`
    SELECT b.id, b.title, u.username, b.status, b.cat_id
        FROM (SELECT * FROM blog WHERE cat_id = ${CategoryID} && status = 1 ) as b LEFT JOIN
        user u ON b.writer_id = u.id
        GROUP BY b.id, b.title, u.username, b.status, b.cat_id`
   );
  },

  single : id => {
    return db.load(`select b.id, b.title, b.content, c.name, u.username, b.cat_id
    from blog b, user u, category c
    where b.id = ${id}
          && c.id = b.cat_id
          && b.writer_id = u.id`);
  },

  allCat :() => {
    return db.load('select b.id, b.title, b.content, c.name, u.username, b.cat_id from blog b, user u, category c where  c.id = b.cat_id && b.writer_id = u.id && b.status = 1');
  }
};