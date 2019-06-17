var db = require('../utils/db');

module.exports = {
  // Lấy các Category & số blog đang chờ duyệt
  all: () => {
    return db.load('SELECT c.name,c.id, COUNT(b.id) as num_of_blogs FROM category c LEFT JOIN (SELECT * FROM blog WHERE status = 1 ) as b ON c.id = b.category_id GROUP BY c.name,c.id ');
  },
  // Lấy page & số page các blog theo CategoryID
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

  // Lấy số lượng bài báo đang chờ duyệt, đã duyệt, đã từ chối
  allUnknow : () => {
    return db.load('SELECT bs.id, COUNT(b.status) as total FROM blog_status bs LEFT JOIN blog b ON b.status = bs.id GROUP BY bs.id'
   );
  },

  // Lấy thông tin 1 blog theo id
  single : id => {
    return db.load(`select b.id, date_format(b.date_publish, '%d/%m/%Y') as date_publish, b.reason, b.title, b.content, c.name, u.username, b.category_id as cat_id
    from blog b, users u, category c
    where b.id = ${id}
          && c.id = b.category_id
          && b.writer_id = u.id`);
  },

  // // Lấy tất cả các bài báo đang chờ duyệt
  // allCat :() => {
  //   return db.load('select c.name, b.id, b.title, b.content, c.name, u.username, b.category_id as cat_id from blog b, users u, category c where  c.id = b.category_id && b.writer_id = u.id && b.status = 1');
  // },

  // Update status của blog 
  updateStatus : (id, newStatus, dpb) => {
    if (newStatus == 2)
    return db.updateStatus(`update blog set status = ${newStatus}, date_publish = '${dpb}' where id = ${id} `);
    else
    return db.updateStatus(`update blog set status = ${newStatus} where id = ${id} `);
  },

  // Update reason của blog 
  updateReason : (id, newReason) => {
    return db.updateStatus(`update blog set reason = ${newReason} where id = ${id} `);
  },

  // Lấy page & số page các blog đã duyệt
  pageApplied : (limit, offset) => {
    return db.load(`
    select b.id, b.title, u.username, date_format(b.date_publish, '%d/%m/%Y') as date_publish, c.name from blog b, users u, category c where b.status = 2 && c.id = b.category_id && u.id = b.writer_id limit ${limit} offset ${offset}
   `);
  },
  countApplied : () => {
    return db.load(`
    select count(*) as total from blog where status = 2
   `);
  },

  // Lấy page & số page các blog đã từ chối
  pageDenied : (limit, offset) => {
    return db.load(`
    select b.id, b.title, u.username, c.name from blog b, users u, category c where b.status = 3 && c.id = b.category_id && u.id = b.writer_id limit ${limit} offset ${offset}
   `);
  },
  countDenied: () => {
    return db.load(`
    select count(*) as total from blog where status = 3
   `);
  },

  // Lấy page & số page tất cả blog đang chờ duyệt
  pageChecking : (limit, offset) => {
    return db.load(`
    select b.id, b.title, u.username, c.name, b.category_id as cat_id from blog b, users u, category c where b.status = 1 && c.id = b.category_id && u.id = b.writer_id limit ${limit} offset ${offset}
   `);
  },
  countChecking: () => {
    return db.load(`
    select count(*) as total from blog where status = 1
   `);
  },
};