const model = require("./model")
const { signUser, verifyUser } = require("../../lib/jwt")

module.exports = {
    new_Loyihalar: async (req, res) => {
        try {
            const { token } = req.body 
            let user = ""
            token ? user = verifyUser(token) : user = "not admin"
            if(user.isadmin == "admin") {
                const {loyihalar_title_uz,
                    loyihalar_title_ru,
                    loyihalar_title_krl,
                    loyihalar_title_en,
                    loyihalar_short_text_uz,
                    loyihalar_short_text_ru,
                    loyihalar_short_text_krl,
                    loyihalar_short_text_en,
                    loyihalar_long_title_uz,
                    loyihalar_long_title_ru,
                    loyihalar_long_title_krl,
                    loyihalar_long_title_en,
                    loyihalar_date,
                    loyihalar_img_1,
                    loyihalar_img_2,
                    loyihalar_img_3,
                    loyihalar_img_4,
                    loyihalar_img_5,
                    loyihalar_video_link_1,
                    loyihalar_video_link_2,
                    loyihalar_video_link_3,
                    loyihalar_tag_uz,
                    loyihalar_tag_ru,
                    loyihalar_tag_krl,
                    loyihalar_tag_en} = req.body
    
                    const rows = await model.New_Loyihalar(loyihalar_title_uz,
                        loyihalar_title_ru,
                        loyihalar_title_krl,
                        loyihalar_title_en,
                        loyihalar_short_text_uz,
                        loyihalar_short_text_ru,
                        loyihalar_short_text_krl,
                        loyihalar_short_text_en,
                        loyihalar_long_title_uz,
                        loyihalar_long_title_ru,
                        loyihalar_long_title_krl,
                        loyihalar_long_title_en,
                        loyihalar_date,
                        loyihalar_img_1,
                        loyihalar_img_2,
                        loyihalar_img_3,
                        loyihalar_img_4,
                        loyihalar_img_5,
                        loyihalar_video_link_1,
                        loyihalar_video_link_2,
                        loyihalar_video_link_3,
                        loyihalar_tag_uz,
                        loyihalar_tag_ru,
                        loyihalar_tag_krl,
                        loyihalar_tag_en)
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
    Loyihalar: async (req, res) => {
        try {
            const rows = await model.Loyihalar()
            res.send(rows)
        }catch (e) {
            console.log(e)
        }
    },
    one_Loyiha: async (req, res) => {
        try {
            
            const {loyiha_id} = req.body

            const rows = await model.oneLoyihalar(loyiha_id)
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
    update_loyiha: async (req, res) => {
        try {
            const { token } = req.body 
            let user = ""
            token ? user = verifyUser(token) : user = "not admin"
            if(user.isadmin == "admin") {
                const {loyihalar_title_uz,
                    loyihalar_title_ru,
                    loyihalar_title_krl,
                    loyihalar_title_en,
                    loyihalar_short_text_uz,
                    loyihalar_short_text_ru,
                    loyihalar_short_text_krl,
                    loyihalar_short_text_en,
                    loyihalar_long_title_uz,
                    loyihalar_long_title_ru,
                    loyihalar_long_title_krl,
                    loyihalar_long_title_en,
                    loyihalar_date,
                    loyihalar_img_1,
                    loyihalar_img_2,
                    loyihalar_img_3,
                    loyihalar_img_4,
                    loyihalar_img_5,
                    loyihalar_video_link_1,
                    loyihalar_video_link_2,
                    loyihalar_video_link_3,
                    loyihalar_tag_uz,
                    loyihalar_tag_ru,
                    loyihalar_tag_krl,
                    loyihalar_tag_en,
                    loyihalar_id} = req.body 
    
                    const rows = await model.Update_Loyiha(loyihalar_title_uz,
                        loyihalar_title_ru,
                        loyihalar_title_krl,
                        loyihalar_title_en,
                        loyihalar_short_text_uz,
                        loyihalar_short_text_ru,
                        loyihalar_short_text_krl,
                        loyihalar_short_text_en,
                        loyihalar_long_title_uz,
                        loyihalar_long_title_ru,
                        loyihalar_long_title_krl,
                        loyihalar_long_title_en,
                        loyihalar_date,
                        loyihalar_img_1,
                        loyihalar_img_2,
                        loyihalar_img_3,
                        loyihalar_img_4,
                        loyihalar_img_5,
                        loyihalar_video_link_1,
                        loyihalar_video_link_2,
                        loyihalar_video_link_3,
                        loyihalar_tag_uz,
                        loyihalar_tag_ru,
                        loyihalar_tag_krl,
                        loyihalar_tag_en,
                        loyihalar_id)
    
                        res.send("ok")
            }else {
                res.send("not admin")
            }
            
        }catch (e) {
            console.log(e)
        }
    },
    delete_table: async (req, res) => {
        try {
            const { token } = req.body 
            let user = ""
            token ? user = verifyUser(token) : user = "not admin"
            if(user.isadmin == "admin") {
                const {loyiha_id} = req.body

                const rows = await model.delete_Loyiha(loyiha_id)
                
                res.send("ok")
            }else {
                res.send("not admin")
            }
        
        }catch (e) {
            console.log(e)
        }
    }
}