const model = require("./model")
const { signUser, verifyUser } = require("../../lib/jwt")

module.exports = {
    new_admin: async (req, res) => {
        try {
            const { token } = req.body 
            let user = ""
            token ? user = verifyUser(token) : user = "not admin"
            if(user.isadmin == "admin") {
                const {admin_name, admin_password} = req.body

                const rows = await model.New_Admin(admin_name, admin_password, "admin")
                if(rows) {
                    res.send(signUser(rows))
                }else {
                    res.send("error")
                }
            }else {
                res.send("not admin")
            }
        }catch (e) {
            console.log(e)
        }
    },
    admins: async (req, res) => {
        try {
            const { token } = req.body 
            let user = ""
            token ? user = verifyUser(token) : user = "not admin"
            if(user.isadmin == "admin") {
                const rows = await model.Admins()
                res.send(rows)
            }else {
                res.send("not admin")
            }
        }catch (e) {
            console.log(e)
        }
    },
    admin_login: async (req, res) => {
        try {
                const {admin_name, admin_password} = req.body
                const rows = await model.Admin_Login(admin_name, admin_password)
                res.send(signUser(rows))
        }catch (e) {
            console.log(e)
        }
    },
    delete_admin: async (req, res) => {
        try {
            const { token } = req.body 
            let user = ""
            token ? user = verifyUser(token) : user = "not admin"
            if(user.isadmin == "admin") {
                const {admin_id} = req.body

                const rows = await model.delete_Admin(admin_id)
               
                res.send("ok")
            }else {
                res.send("not admin")
            }
        }catch (e) {
            console.log(e)
        }
    }
}