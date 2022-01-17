const model = require("./model")

module.exports = {
    new_Yanglik: async (req, res) => {
        try {
            const {yangliklar_title_uz,
                yangliklar_title_ru,
                yangliklar_title_krl,
                yangliklar_title_en,
                yangliklar_short_text_uz,
                yangliklar_short_text_ru,
                yangliklar_short_text_krl,
                yangliklar_short_text_en,
                yangliklar_long_title_uz,
                yangliklar_long_title_ru,
                yangliklar_long_title_krl,
                yangliklar_long_title_en,
                yangliklar_date,
                yangliklar_img_1,
                yangliklar_img_2,
                yangliklar_img_3,
                yangliklar_img_4,
                yangliklar_img_5,
                yangliklar_video_link_1,
                yangliklar_video_link_2,
                yangliklar_video_link_3} = req.body

                const rows = await model.New_Yanglik(yangliklar_title_uz,
                    yangliklar_title_ru,
                    yangliklar_title_krl,
                    yangliklar_title_en,
                    yangliklar_short_text_uz,
                    yangliklar_short_text_ru,
                    yangliklar_short_text_krl,
                    yangliklar_short_text_en,
                    yangliklar_long_title_uz,
                    yangliklar_long_title_ru,
                    yangliklar_long_title_krl,
                    yangliklar_long_title_en,
                    yangliklar_date,
                    yangliklar_img_1,
                    yangliklar_img_2,
                    yangliklar_img_3,
                    yangliklar_img_4,
                    yangliklar_img_5,
                    yangliklar_video_link_1,
                    yangliklar_video_link_2,
                    yangliklar_video_link_3)
            if(rows) {
                res.send("ok")
            }else {
                res.send("error")
            }
        }catch (e) {
            console.log(e)
        }
    },
    Yangliklar: async (req, res) => {
        try {
            const rows = await model.Yangliklar()
            res.send(rows)
        }catch (e) {
            console.log(e)
        }
    },
    one_Yangliklar: async (req, res) => {
        try {
            const {yanglik_id} = req.body

            const rows = await model.oneYanglik(yanglik_id)
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
    update_yanglik: async (req, res) => {
        try {
            const { 
                yangliklar_title_uz,
                yangliklar_title_ru,
                yangliklar_title_krl,
                yangliklar_title_en,
                yangliklar_short_text_uz,
                yangliklar_short_text_ru,
                yangliklar_short_text_krl,
                yangliklar_short_text_en,
                yangliklar_long_title_uz,
                yangliklar_long_title_ru,
                yangliklar_long_title_krl,
                yangliklar_long_title_en,
                yangliklar_date,
                yangliklar_img_1,
                yangliklar_img_2,
                yangliklar_img_3,
                yangliklar_img_4,
                yangliklar_img_5,
                yangliklar_video_link_1,
                yangliklar_video_link_2,
                yangliklar_video_link_3,
                yanglik_id} = req.body 

                const rows = await model.update_Yanglik(
                    yangliklar_title_uz,
                    yangliklar_title_ru,
                    yangliklar_title_krl,
                    yangliklar_title_en,
                    yangliklar_short_text_uz,
                    yangliklar_short_text_ru,
                    yangliklar_short_text_krl,
                    yangliklar_short_text_en,
                    yangliklar_long_title_uz,
                    yangliklar_long_title_ru,
                    yangliklar_long_title_krl,
                    yangliklar_long_title_en,
                    yangliklar_date,
                    yangliklar_img_1,
                    yangliklar_img_2,
                    yangliklar_img_3,
                    yangliklar_img_4,
                    yangliklar_img_5,
                    yangliklar_video_link_1,
                    yangliklar_video_link_2,
                    yangliklar_video_link_3,
                    yanglik_id)

                    res.send("ok")
        }catch (e) {
            console.log(e)
        }
    },
    delete_table: async (req, res) => {
        try {
            const {yanglik_id} = req.body

            const rows = await model.delete_Yanglik(yanglik_id)
            
            res.send("ok")
        }catch (e) {
            console.log(e)
        }
    }
}