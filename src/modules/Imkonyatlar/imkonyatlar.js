const model = require("./model")
const { signUser, verifyUser } = require("../../lib/jwt")

module.exports = {
    new_imkonyat: async (req, res) => {
        try {
            const { token } = req.body 
            let user = ""
            token ? user = verifyUser(token) : user = "not admin"
            if(user.isadmin == "admin") {
                const {
                    imkonyatlar_title_uz,
                    imkonyatlar_title_ru,
                    imkonyatlar_title_krl,
                    imkonyatlar_title_en,
                    imkonyatlar_short_text_uz,
                    imkonyatlar_short_text_ru,
                    imkonyatlar_short_text_krl,
                    imkonyatlar_short_text_en,
                    imkonyatlar_long_title_uz,
                    imkonyatlar_long_title_ru,
                    imkonyatlar_long_title_krl,
                    imkonyatlar_long_title_en,
                    imkonyatlar_date,
                    imkonyatlar_img_1,
                    imkonyatlar_img_2,
                    imkonyatlar_img_3,
                    imkonyatlar_img_4,
                    imkonyatlar_img_5,
                    imkonyatlar_video_link_1,
                    imkonyatlar_video_link_2,
                    imkonyatlar_video_link_3} = req.body
    
                    const rows = await model.New_Imkonyat(imkonyatlar_title_uz,
                        imkonyatlar_title_ru,
                        imkonyatlar_title_krl,
                        imkonyatlar_title_en,
                        imkonyatlar_short_text_uz,
                        imkonyatlar_short_text_ru,
                        imkonyatlar_short_text_krl,
                        imkonyatlar_short_text_en,
                        imkonyatlar_long_title_uz,
                        imkonyatlar_long_title_ru,
                        imkonyatlar_long_title_krl,
                        imkonyatlar_long_title_en,
                        imkonyatlar_date,
                        imkonyatlar_img_1,
                        imkonyatlar_img_2,
                        imkonyatlar_img_3,
                        imkonyatlar_img_4,
                        imkonyatlar_img_5,
                        imkonyatlar_video_link_1,
                        imkonyatlar_video_link_2,
                        imkonyatlar_video_link_3)
                if(rows) {
                    res.send("ok")
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
    imkonyatlar: async (req, res) => {
        try {
            const rows = await model.Imkonyatlar()
            res.send(rows)
        }catch (e) {
            console.log(e)
        }
    },
    one_imkonyat: async (req, res) => {
        try {
          
            const {imkon_id} = req.body

            const rows = await model.oneImkonyat(imkon_id)
            if(rows) {
                res.send(rows)
            }else {
                res.send("error")
            }
        }
        catch(e){
            console.log(e)
        }
    },
    update_imkonyat: async (req, res) => {
        try {
            const { token } = req.body 
            let user = ""
            token ? user = verifyUser(token) : user = "not admin"
            if(user.isadmin == "admin") {
                const {imkonyatlar_title_uz,
                    imkonyatlar_title_ru,
                    imkonyatlar_title_krl,
                    imkonyatlar_title_en,
                    imkonyatlar_short_text_uz,
                    imkonyatlar_short_text_ru,
                    imkonyatlar_short_text_krl,
                    imkonyatlar_short_text_en,
                    imkonyatlar_long_title_uz,
                    imkonyatlar_long_title_ru,
                    imkonyatlar_long_title_krl,
                    imkonyatlar_long_title_en,
                    imkonyatlar_date,
                    imkonyatlar_img_1,
                    imkonyatlar_img_2,
                    imkonyatlar_img_3,
                    imkonyatlar_img_4,
                    imkonyatlar_img_5,
                    imkonyatlar_video_link_1,
                    imkonyatlar_video_link_2,
                    imkonyatlar_video_link_3,
                    imkonyatlar_id } = req.body 
    
                    const rows = await model.update_Imkon(imkonyatlar_title_uz,
                        imkonyatlar_title_ru,
                        imkonyatlar_title_krl,
                        imkonyatlar_title_en,
                        imkonyatlar_short_text_uz,
                        imkonyatlar_short_text_ru,
                        imkonyatlar_short_text_krl,
                        imkonyatlar_short_text_en,
                        imkonyatlar_long_title_uz,
                        imkonyatlar_long_title_ru,
                        imkonyatlar_long_title_krl,
                        imkonyatlar_long_title_en,
                        imkonyatlar_date,
                        imkonyatlar_img_1,
                        imkonyatlar_img_2,
                        imkonyatlar_img_3,
                        imkonyatlar_img_4,
                        imkonyatlar_img_5,
                        imkonyatlar_video_link_1,
                        imkonyatlar_video_link_2,
                        imkonyatlar_video_link_3,
                        imkonyatlar_id)
    
                        res.send("ok")
            }else {
                res.send("not admin")
            }
            
        }catch (e) {
            console.lo(e)
        }
    },
    delete_table: async (req, res) => {
        try {
            const { token } = req.body 
            let user = ""
            token ? user = verifyUser(token) : user = "not admin"
            if(user.isadmin == "admin") {
                const {imkon_id} = req.body

                const rows = await model.delete_imkon(imkon_id)
                
                res.send("ok")
            }else {
                res.send("not admin")
            }
           
        }catch (e) {
            console.log(e)
        }
    }
}