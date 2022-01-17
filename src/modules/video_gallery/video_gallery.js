const model = require("./model")

module.exports = {
    new_video_gallery: async (req, res) => {
        try {
            const {
                video_title_uz,
                video_title_ru,
                video_title_krl,
                video_title_en,
                video_1,
                video_2,
                video_3
            } = req.body
            const rows = await model.new_Video_gallery(video_title_uz,
                video_title_ru,
                video_title_krl,
                video_title_en,
                video_1,
                video_2,
                video_3)
            if(rows) {
                res.send("ok")
            }else {
                res.send("error")
            }
        }catch (e) {
            console.log(e)
        }
    },
    video_gallerys: async (req, res) => {
        try {
            const rows = await model.Video_gallereys()
            res.send(rows)
        }catch (e) {
            console.log(e)
        }
    },
    one_video_gallery: async (req, res) => {
        try {
            const {gallery_id} = req.body
            const rows = await model.One_video_gallerey(gallery_id)
            if(rows) {
                res.send(rows)
            }else {
                res.send("collum not found")
            }
        }catch (e){
            console.log(e)
        }
    },
    update_video_gallery: async (req, res) => {
        try {
            const {
                video_title_uz,
                video_title_ru,
                video_title_krl,
                video_title_en,
                video_1,
                video_2,
                video_3,
                video_id  
            } = req.body
            const rows = await model.Update_video_gallery(video_title_uz,
                video_title_ru,
                video_title_krl,
                video_title_en,
                video_1,
                video_2,
                video_3,
                video_id )
        res.send("ok")
        }catch(e) {
            console.log(e)
        }
    },
    delete_video_gallery: async (req, res) => {
        try {
            const {gallery_id} = req.body
            const rows = await model.Delete_video_gallery(gallery_id)
            res.send("ok")
        }catch (e) {
            console.log(e)
        }
    }
}