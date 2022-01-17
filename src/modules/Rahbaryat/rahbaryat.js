
const model = require("./model")

module.exports = {
    newRahbaryat: async (req, res) => {
        try {
            const {rahbar_img,
                rahbar_name_uz,
                rahbar_name_ru,
                rahbar_name_krl,
                rahbar_name_en,
                rahbar_lavozim_uz,
                rahbar_lavozim_ru,
                rahbar_lavozim_krl,
                rahbar_lavozim_en,
                rahbar_telefon,
                rahbar_pochta,
                rahbar_qabul_kunlari,
                rahbar_vazifalari_uz,
                rahbar_vazifalari_ru,
                rahbar_vazifalari_krl,
                rahbar_vazifalari_en,
                rahbar_faolyati_uz,
                rahbar_faolyati_ru,
                rahbar_faolyati_krl,
                rahbar_faolyati_en,
                rahbar_link_telegram,
                rahbar_link_instagram,
                rahbar_link_facebook} = req.body
            const rows = await model.new_Rahbar(rahbar_img,
                rahbar_name_uz,
                rahbar_name_ru,
                rahbar_name_krl,
                rahbar_name_en,
                rahbar_lavozim_uz,
                rahbar_lavozim_ru,
                rahbar_lavozim_krl,
                rahbar_lavozim_en,
                rahbar_telefon,
                rahbar_pochta,
                rahbar_qabul_kunlari,
                rahbar_vazifalari_uz,
                rahbar_vazifalari_ru,
                rahbar_vazifalari_krl,
                rahbar_vazifalari_en,
                rahbar_faolyati_uz,
                rahbar_faolyati_ru,
                rahbar_faolyati_krl,
                rahbar_faolyati_en,
                rahbar_link_telegram,
                rahbar_link_instagram,
                rahbar_link_facebook)
        if(rows) {
            res.send("ok")
        }else {
            res.send("error")
        }
        }catch (e) {
            console.log(e)
        }
    },
    Rahbaryat: async (req, res) => {
        try {
            const rows = await model.Rahbaryat()
            res.send(rows)
        }catch(e) {
            console.log(e)
        }
    },
    one_rahbar: async (req, res) => {
        try {
            const { rahbar_id } = req.body
            const rows = model.one_Rahbar(rahbar_id)
            if(rows) {
                res.send(rows)
            }else {
                res.send("error")
            }
        }catch (e) {
            console.log(e)
        }
    },
    update_rahbar: async (req, res) => {
        try {
            const {rahbar_img,
                rahbar_name_uz,
                rahbar_name_ru,
                rahbar_name_krl,
                rahbar_name_en,
                rahbar_lavozim_uz,
                rahbar_lavozim_ru,
                rahbar_lavozim_krl,
                rahbar_lavozim_en,
                rahbar_telefon,
                rahbar_pochta,
                rahbar_qabul_kunlari,
                rahbar_vazifalari_uz,
                rahbar_vazifalari_ru,
                rahbar_vazifalari_krl,
                rahbar_vazifalari_en,
                rahbar_faolyati_uz,
                rahbar_faolyati_ru,
                rahbar_faolyati_krl,
                rahbar_faolyati_en,
                rahbar_link_telegram,
                rahbar_link_instagram,
                rahbar_link_facebook,
                rahbar_id} = req.body
            const rows = await model.update_Rahbaryat(rahbar_img,
                rahbar_name_uz,
                rahbar_name_ru,
                rahbar_name_krl,
                rahbar_name_en,
                rahbar_lavozim_uz,
                rahbar_lavozim_ru,
                rahbar_lavozim_krl,
                rahbar_lavozim_en,
                rahbar_telefon,
                rahbar_pochta,
                rahbar_qabul_kunlari,
                rahbar_vazifalari_uz,
                rahbar_vazifalari_ru,
                rahbar_vazifalari_krl,
                rahbar_vazifalari_en,
                rahbar_faolyati_uz,
                rahbar_faolyati_ru,
                rahbar_faolyati_krl,
                rahbar_faolyati_en,
                rahbar_link_telegram,
                rahbar_link_instagram,
                rahbar_link_facebook,
                rahbar_id)
            res.send("ok")
        }catch (e) {
            console.log(e)
        }
    },
    delete_rahbaryat: async (req, res) => {
        try {
            const {rahbar_id} = req.body

            const rows = await model.delete_Rahbar(rahbar_id)
            res.send("ok")
        }catch (e) {
            console.log(e)
        }
    }
}