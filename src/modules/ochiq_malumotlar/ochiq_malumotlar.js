const model = require("./model")

module.exports = {
    New_Malumot: async (req, res) => {
        try {
            const { token } = req.body 
            let user = ""
            token ? user = verifyUser(token) : user = "not admin"
            if(user.isadmin == "admin") {
                const {
                    ochiq_malumot_text_uz,
                    ochiq_malumot_text_ru,
                    ochiq_malumot_text_krl,
                    ochiq_malumot_text_en,
                    ochiq_malumot_file_pdf,
                    ochiq_malumot_file_doc,
                    ochiq_malumot_file_xlsx,
                    ochiq_malumot_file_jpg
                } = req.body
                const rows = await model.New_Malumot(
                    ochiq_malumot_text_uz,
                    ochiq_malumot_text_ru,
                    ochiq_malumot_text_krl,
                    ochiq_malumot_text_en,
                    ochiq_malumot_file_pdf,
                    ochiq_malumot_file_doc,
                    ochiq_malumot_file_xlsx,
                    ochiq_malumot_file_jpg
                )
    
                if(rows) {
                    res.send(rows)
                }else { res.send("error")}
            }else {
                res.send("not admin")
            }
            
        }catch (e) {
            console.log(e)
        }
    },
    Malumotlar: async (req, res) => {
        try {
            const rows = await model.Malumotlar()
            res.send(rows)
        }catch (e) {
            console.log(e)
        }
    },
    Update_Malumotlar: async (req, res) => {
        try {
            const { token } = req.body 
            let user = ""
            token ? user = verifyUser(token) : user = "not admin"
            if(user.isadmin == "admin") {
                const {
                    ochiq_malumot_text_uz,
                    ochiq_malumot_text_ru,
                    ochiq_malumot_text_krl,
                    ochiq_malumot_text_en,
                    ochiq_malumot_file_pdf,
                    ochiq_malumot_file_doc,
                    ochiq_malumot_file_xlsx,
                    ochiq_malumot_file_jpg,
                    ochiq_malumot_id
                } = req.body
                const rows = await model.Update_Malumotlar(
                    ochiq_malumot_text_uz,
                    ochiq_malumot_text_ru,
                    ochiq_malumot_text_krl,
                    ochiq_malumot_text_en,
                    ochiq_malumot_file_pdf,
                    ochiq_malumot_file_doc,
                    ochiq_malumot_file_xlsx,
                    ochiq_malumot_file_jpg,
                    ochiq_malumot_id
                )
                res.send("ok")
            }else {
                res.send("not admin")
            }
        }catch (e) {
            console.log(e)
        }
    },
    Delete_malumotlar: async (req, res) => {
        try {
            const { token } = req.body 
            let user = ""
            token ? user = verifyUser(token) : user = "not admin"
            if(user.isadmin == "admin") {
                const {malumot_id} = req.body
                const rows = await model.Delete_Malumotlar(malumot_id)
                res.send("ok")
            }else {
                res.send("not admin")
            }
       
        }catch (e) {
            console.log(e)
        }
    }
}