var service = require("../services/service");

module.exports = {
    all: () => {
        return service.load(`SELECT u.fullname, u.username, u.id ,role.name as role_name FROM users u, role where u.role=role.id and role.name !='Admin'`);
    },
    all_role: () => {
        return service.load(`SELECT role.id as role_id, role.name as role_name FROM  role where role.name !='Admin'`);
    },
    single_editor: (userId) => {
        return service.load(`SELECT fullname,id as userId from users where id=${userId} AND role=3`);
    },
    change_role: (id, newRoles) => {
        var user = {
            id: id,
            role: newRoles,
        }
        return service.update(`users`, 'id', user);
    },
    getEditorTask: (editorId) => {
        return service.load(`Select c.id,c.name,ec.editor_id from category c left join editor_categorys ec on c.id = category_id and ec.editor_id=${editorId}`);
    }
}