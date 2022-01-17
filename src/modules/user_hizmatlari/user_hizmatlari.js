const model = require("./model")
const { signUser, verifyUser } = require("../../lib/jwt")

module.exports = {
    Hisoblagich: async (req, res) => {
        try {
            
            const rows = await model.Hisoblagich()
            res.send(rows)
        }catch (e) {
            console.log(e)
        }
    },
    Update_Hisoblagich: async (req, res) => {
        try {
            const { token } = req.body 
            let user = ""
            token ? user = verifyUser(token) : user = "not admin"
            if(user.isadmin == "admin") {
                const {murojatlar,
                    korib_chiqildi,
                    korib_chiqilmoqda,
                    Rad_etilgan_murojatlar} = req.body
                const rows = await model.Update_Hisoblagich(murojatlar,
                    korib_chiqildi,
                    korib_chiqilmoqda,
                    Rad_etilgan_murojatlar)
                res.send("ok")
            }else {
                res.send("not admin")
            }
           
        }catch (e) {
            console.log(e)
        }
    },
    Habarlar: async (req, res) => {
        try {
            const rows = await model.Habarlar()

            res.json(rows)
        }catch (e) {
            console.log(e)
        }
    },
    New_Habar: async(req, res) => {
        try {

        }catch(e) {console.log(e)}
    }
}