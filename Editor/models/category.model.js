var db = require('../utils/db');

module.exports = {
  // Lấy các Category & số blogs đang chờ duyệt
  all: () => {
    return db.load('SELECT c.name,c.id, COUNT(b.id_blog) as num_of_blogs FROM category c LEFT JOIN (SELECT * FROM blogs WHERE status = 1 ) as b ON c.id = b.category_id GROUP BY c.name,c.id ');
  },
  // Lấy page & số page các blog theo CategoryID
  pageByCat: (CategoryID, limit, offset) => {
    return db.load(`
    select b.id_blog AS id, b.title, b.content, c.name, u.username, b.category_id as cat_id from blogs b, users u, category c where  c.id = b.category_id && b.writer_id = u.id && b.status = 1 && c.id = ${CategoryID} limit ${limit} offset ${offset}
   `);
  },
  countByCat: CategoryID => {
    return db.load(`
    select count(*) as total from blogs where category_id = ${CategoryID} && status = 1
   `);
  },

  // Lấy số lượng bài báo đang chờ duyệt, đã duyệt, đã từ chối
  allUnknow: () => {
    return db.load('SELECT bs.id, COUNT(b.status) as total FROM blog_status bs LEFT JOIN blogs b ON b.status = bs.id GROUP BY bs.id');
  },

  // Lấy thông tin 1 blog theo id
  single: id => {
    return db.load(`select b.id_blog AS id, date_format(b.date_publish, '%d/%m/%Y') as date_publish, b.reason, b.title, b.content, c.name, u.username, b.category_id as cat_id
    from blogs b, users u, category c
    where b.id_blog = ${id}
          && c.id = b.category_id
          && b.writer_id = u.id`);
  },

  // // Lấy tất cả các bài báo đang chờ duyệt
  // allCat :() => {
  //   return db.load('select c.name, b.id, b.title, b.content, c.name, u.username, b.category_id as cat_id from blog b, users u, category c where  c.id = b.category_id && b.writer_id = u.id && b.status = 1');
  // },

  // Update status của blog 
  updateStatus: (id, newStatus, dpb) => {
    if (newStatus == 2)
      return db.updateStatus(`update blogs set status = ${newStatus}, date_publish = '${dpb}' where id = ${id} `);
    else
      return db.updateStatus(`update blogs set status = ${newStatus} where id = ${id} `);
  },

  // Update reason của blog 
  updateReason: (id, newReason) => {
    return db.updateStatus(`update blogs set reason = ${newReason} where id = ${id} `);
  },

  // Lấy page & số page các blog đã duyệt
  pageApplied: (limit, offset) => {
    return db.load(`
    select b.id_blog AS id, b.title, u.username, date_format(b.date_publish, '%d/%m/%Y') as date_publish, c.name from blogs b, users u, category c where b.status = 2 && c.id = b.category_id && u.id = b.writer_id limit ${limit} offset ${offset}
   `);
  },
  countApplied: () => {
    return db.load(`
    select count(*) as total from blogs where status = 2
   `);
  },

  // Lấy page & số page các blogs đã từ chối
  pageDenied: (limit, offset) => {
    return db.load(`
    select b.id_blog AS id, b.title, u.username, c.name from blogs b, users u, category c where b.status = 3 && c.id = b.category_id && u.id = b.writer_id limit ${limit} offset ${offset}
   `);
  },
  countDenied: () => {
    return db.load(`
    select count(*) as total from blogs where status = 3
   `);
  },

  // Lấy page & số page tất cả blogs đang chờ duyệt
  pageChecking: (limit, offset) => {
    return db.load(`
    select b.id_blog AS id, b.title, u.username, c.name, b.category_id as cat_id from blogs b, users u, category c where b.status = 1 && c.id = b.category_id && u.id = b.writer_id limit ${limit} offset ${offset}
   `);
  },
  countChecking: () => {
    return db.load(`
    select count(*) as total from blogss where status = 1
   `);
  },
};