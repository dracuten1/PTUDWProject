var db = require('../utils/db');

module.exports = {
  all: () => {
    return db.load('SELECT c.name,c.id, COUNT(b.id) as num_of_blogs FROM category c LEFT JOIN (SELECT * FROM blog WHERE status = 1 ) as b ON c.id = b.category_id GROUP BY c.name,c.id ');
  },

  // allByCat : CategoryID => {
  //   return db.load(`
  //   SELECT b.id, b.title, u.username, b.status, b.category_id as cat_id 
  //       FROM (SELECT * FROM blog WHERE category_id = ${CategoryID} && status = 1 ) as b LEFT JOIN
  //       users u ON b.writer_id = u.id
  //       GROUP BY b.id, b.title, u.username, b.status, b.category_id`
  //  );
  // },

  // allByCat : CategoryID => {
  //   return db.load(`
  //   select b.id, b.title, b.content, c.name, u.username, b.category_id as cat_id from blog b, users u, category c where  c.id = b.category_id && b.writer_id = u.id && b.status = 1 && c.id = ${CategoryID}
  //  `);
  // },

  pageByCat : (CategoryID, limit, offset) => {
    return db.load(`
    select b.id, b.title, b.content, c.name, u.username, b.category_id as cat_id from blog b, users u, category c where  c.id = b.category_id && b.writer_id = u.id && b.status = 1 && c.id = ${CategoryID} limit ${limit} offset ${offset}
   `);
  },

  countByCat : CategoryID => {
    return db.load(`
    select count(*) as total from blog where category_id = ${CategoryID} && status = 1
   `);
  },

  allUnknow : () => {
    return db.load('SELECT bs.id, COUNT(b.status) as total FROM blog_status bs LEFT JOIN blog b ON b.status = bs.id GROUP BY bs.id'
   );
  },

  single : id => {
    return db.load(`select b.id, b.title, b.content, c.name, u.username, b.category_id as cat_id
    from blog b, users u, category c
    where b.id = ${id}
          && c.id = b.category_id
          && b.writer_id = u.id`);
  },

  allCat :() => {
    return db.load('select b.id, b.title, b.content, c.name, u.username, b.category_id as cat_id from blog b, users u, category c where  c.id = b.category_id && b.writer_id = u.id && b.status = 1');
  },

  updateStatus : (id, newStatus) => {
    return db.updateStatus(`update blog set status = ${newStatus} where id = ${id} `);
  },

  allApplied : () => {
    return db.load(' SELECT b.id, b.title, u.username, b.status, b.category_id as cat_id FROM (SELECT * FROM blog WHERE status = 2 ) as b LEFT JOIN users u ON b.writer_id = u.id GROUP BY b.id, b.title, u.username, b.status, b.category_id'   );
  },
  
  allDenied : () => {
    return db.load(' SELECT b.id, b.title, u.username, b.status, b.category_id as cat_id FROM (SELECT * FROM blog WHERE status = 3 ) as b LEFT JOIN users u ON b.writer_id = u.id GROUP BY b.id, b.title, u.username, b.status, b.category_id'   );
  },
};