const { signUser, verifyUser } = require("../../lib/jwt")
const model = require("./model")
module.exports = {
    new_Tadbir: async (req, res) => {
        try {  
            const { token } = req.body 
            let user = ""
            token ? user = verifyUser(token) : user = "not admin"
            if(user.isadmin == "admin") {
                const {tadbir_title_uz, 
                    tadbir_title_ru, 
                    tadbir_title_krl, 
                    tadbir_title_en, 
                    tadbir_text_uz,
                    tadbir_text_ru,
                    tadbir_text_krl,
                    tadbir_text_en,
                    tadbir_img_1,
                    tadbir_img_2,
                    tadbir_img_3,
                    tadbir_img_4,
                    tadbir_img_5,
                    tadbir_video_link_1,
                    tadbir_video_link_2,
                    tadbir_video_link_3} = req.body
                const rows = await model.New_Tadbir(tadbir_title_uz, 
                    tadbir_title_ru, 
                    tadbir_title_krl, 
                    tadbir_title_en, 
                    tadbir_text_uz,
                    tadbir_text_ru,
                    tadbir_text_krl,
                    tadbir_text_en,
                    tadbir_img_1,
                    tadbir_img_2,
                    tadbir_img_3,
                    tadbir_img_4,
                    tadbir_img_5,
                    tadbir_video_link_1,
                    tadbir_video_link_2,
                    tadbir_video_link_3)
                if(rows) {
                    res.send("ok")
                }else {
                    res.send("error")
                }
            }else {
                res.send("not admin")
            }
           
        }catch(e) {
            console.log(e)
        }
    },
    Tadbirlar: async (req, res) => {
        try {
            const rows = model.Tadbirlar()
            res.send(rows)
        }catch (e) {
            console.log(e)
        }
    },
    one_Tadbir:async (req, res) => {
        try {
            const {tadbir_id} = req.body
            const rows = await model.one_Tadbir(tadbir_id)
            if(rows) {
                res.send(rows)
            }else {
                res.send("error")
            }
        }catch (e) {
            console.log(e)
        }
    },
    update_Tadbir:async (req, res)=> {
        try {
            const { token } = req.body 
            let user = ""
            token ? user = verifyUser(token) : user = "not admin"
            if(user.isadmin == "admin") {
                const { tadbir_title_uz, 
                    tadbir_title_ru, 
                    tadbir_title_krl, 
                    tadbir_title_en, 
                    tadbir_text_uz,
                    tadbir_text_ru,
                    tadbir_text_krl,
                    tadbir_text_en,
                    tadbir_img_1,
                    tadbir_img_2,
                    tadbir_img_3,
                    tadbir_img_4,
                    tadbir_img_5,
                    tadbir_video_link_1,
                    tadbir_video_link_2,
                    tadbir_video_link_3,
                    tadbir_id } = req.body
                const rows =await model.update_Tadbir(
                    tadbir_title_uz, 
                    tadbir_title_ru, 
                    tadbir_title_krl, 
                    tadbir_title_en, 
                    tadbir_text_uz,
                    tadbir_text_ru,
                    tadbir_text_krl,
                    tadbir_text_en,
                    tadbir_img_1,
                    tadbir_img_2,
                    tadbir_img_3,
                    tadbir_img_4,
                    tadbir_img_5,
                    tadbir_video_link_1,
                    tadbir_video_link_2,
                    tadbir_video_link_3,
                    tadbir_id
                )
    
                res.send("ok") 
            }else {
                res.send("not admin")
            }
            
        }catch (e) {
            console.log(e)
        }
    },
    delete_Tadbir: async (req, res) => {
        try  {
            const { token } = req.body 
            let user = ""
            token ? user = verifyUser(token) : user = "not admin"
            if(user.isadmin == "admin") {
                const {tadbir_id} = req.body
            const rows = await model.delete_Tadbir(tadbir_id)
            res.send("ok")
            }else {
                res.send("not admin")
            }
            
        }catch (e) {
            console.log(e)
        }
    }
}