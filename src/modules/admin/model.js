const { fetch, fetchAll } = require("../../lib/postgres")

const newAdmin = `
    INSERT INTO admins (
        admin_name,
        admin_password,
        isAdmin
    ) VALUES ($1, $2, $3) RETURNING *
`
const admin_login = `
    SELECT * FROM admins WHERE admin_name = $1 AND admin_password = $2
`
const admins = `
SELECT * FROM admins
`

const delete_admin = `
    DELETE FROM admins WHERE  admin_id = $1
`
const New_Admin = (admin_name ,admin_password, isAdmin) => fetch(newAdmin, admin_name,
    admin_password,
    isAdmin)
const Admin_Login = (admin_name, admin_password) => fetch(admin_login,admin_name, admin_password )
const Admins = () => fetchAll(admins)
const delete_Admin = (admin_id) => fetch(delete_admin, admin_id)
module.exports = {
    New_Admin,
    Admin_Login,
    Admins,
    delete_Admin
}