var service = require("../services/service");

module.exports = {
    all: () => {
        return service.load(`SELECT u.fullname, u.username, u.id ,role.name as role_name FROM users u, role where u.role=role.id and role.name !='Admin'`);
    },
    all_role: () => {
        return service.load(`SELECT role.id as role_id, role.name as role_name FROM  role where role.name !='Admin'`);
    },
    change_role: (id, newRoles) => {
        var user = {
            id: id,
            role: newRoles,
        }
        return service.update(`users`, 'id', user);
    },
    deleteU: (id) => {
        return service.delete(`users`, 'id', id);
    },
}