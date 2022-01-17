const model = require("./model")
const { signUser, verifyUser } = require("../../lib/jwt")

module.exports = {
    New_Yulduz: async (req, res) => {
        try {
            const { token } = req.body 
            let user = ""
            token ? user = verifyUser(token) : user = "not admin"
            if(user.isadmin == "admin") {
                const {
                    bola_img,
                    bola_title_uz,
                    bola_title_ru,
                    bola_title_krl,
                    bola_title_en,
                    bola_name_uz,
                    bola_name_ru,
                    bola_name_krl,
                    bola_name_en,
                    bola_faolyati,
                    bola_kompanyasi
                } = req.body
                const rows = await model.New_yulduz(
                    bola_img,
                    bola_title_uz,
                    bola_title_ru,
                    bola_title_krl,
                    bola_title_en,
                    bola_name_uz,
                    bola_name_ru,
                    bola_name_krl,
                    bola_name_en,
                    bola_faolyati,
                    bola_kompanyasi
                )
                if(rows) {
                    res.send(rows)
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
    Yulduzlar: async (req, res) => {
        try {
            const rows = await model.Yulduzlar()

            res.send(rows)
        }catch (e) {
            console.log(e)
        }
    },
    Update_yulduzlar: async (req, res) => {
        try {
            const { token } = req.body 
            let user = ""
            token ? user = verifyUser(token) : user = "not admin"
            if(user.isadmin == "admin") {
                const {
                    bola_img,
                    bola_title_uz,
                    bola_title_ru,
                    bola_title_krl,
                    bola_title_en,
                    bola_name_uz,
                    bola_name_ru,
                    bola_name_krl,
                    bola_name_en,
                    bola_faolyati,
                    bola_kompanyasi,
                    bola_id
                } = req.body
    
                const rows = await model.Update_Yulduz(
                    bola_img,
                    bola_title_uz,
                    bola_title_ru,
                    bola_title_krl,
                    bola_title_en,
                    bola_name_uz,
                    bola_name_ru,
                    bola_name_krl,
                    bola_name_en,
                    bola_faolyati,
                    bola_kompanyasi,
                    bola_id
                )
                res.send("ok")
            }else {
                res.send("not admin")
            }
            
        }catch (e) {
            console.log(e)
        }
    },
    delete_yulduz: async (req, res) => {
        try {
            const { token } = req.body 
            let user = ""
            token ? user = verifyUser(token) : user = "not admin"
            if(user.isadmin == "admin") {
                const {yulduz_id} = req.body
                const rows = await model.Delete_Yulduz(yulduz_id)
                res.send("ok")
            }else {
                res.send("not admin")
            }
     
        }catch (e) {
            console.log(e)
        }
    }
}