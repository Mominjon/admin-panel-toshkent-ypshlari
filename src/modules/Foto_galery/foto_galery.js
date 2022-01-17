const model = require("./model")

module.exports = {
    new_gallery: async (req, res) => {
        try {
            const {gallary_title_uz,
                gallary_title_ru,
                gallary_title_krl,
                gallary_title_en,
                gallary_glavniy,
                gallary_data} = req.body

            const rows = await model.new_Gallery(gallary_title_uz,
                gallary_title_ru,
                gallary_title_krl,
                gallary_title_en,
                gallary_glavniy,
                gallary_data)
            if(rows) {
                res.send("ok")
            }else {
                res.send("error")
            }
        }catch (e) {
            console.log(e)
        }
    },
    galleys: async (req, res) => {
        try {
            const rows = await model.Galereys()
            res.send(rows)
        }catch(e) {
            console.log(e)
        }
    },
    update_Gallerey: async (req, res) => {
        try{
            const {gallary_title_uz,
                gallary_title_ru,
                gallary_title_krl,
                gallary_title_en,
                gallary_glavniy,
                gallary_data,
                gallary_id} = req.body
            const rows = await model.Update_galereys(gallary_title_uz,
                gallary_title_ru,
                gallary_title_krl,
                gallary_title_en,
                gallary_glavniy,
                gallary_data,
                gallary_id)
            res.send("ok")
        }catch (e) {
            console.log(e)
        }
    },
    Delete_Gallery: async (req, res) => {
        try {
            const { gallery_id } = req.body
            const rows = await model.Delete_Gallery(gallery_id)
            res.send("ok")
        }catch (e) {
            console.log(e)
        }
    },

    // gallery Fotos

    Gallerey_foto : async (req, res) => {
        try {
            const {gallery_id} = req.body
            const rows = await model.Gallery_fotos(gallery_id)
            if(rows) {
                res.send(rows)
            }else {
                res.send("error")
            }
        }catch (e) {
            console.log(e)
        }
    },
    new_gallery_foto: async (req, res) => {
        try {
            const { foto, foto_gallary} = req.body

            const rows = await model.new_gallery_Foto(foto, foto_gallary)

            if(rows) {
                res.send("ok")
            }else {
                res.send("error")
            }
        }catch (e) {
            console.log(e)
        }
    },
    delete_gallery_foto: async (req, res) => {
        try {
            const { foto_id } = req.body
            const rows =await model.delete_Gallery_Foto( foto_id)
            res.send("ok")
        }catch (e) {
            console.log(e)
        }
    }
}