const model = require("./model")

module.exports = {
    new_HududRahbari: async (req, res) => {
        try {
            const {
                hududiy_rahbar_img,
                hududiy_rahbar_name_uz,
                hududiy_rahbar_name_ru,
                hududiy_rahbar_name_krl,
                hududiy_rahbar_name_en,
                hududiy_rahbar_lavozim_uz,
                hududiy_rahbar_lavozim_ru,
                hududiy_rahbar_lavozim_krl,
                hududiy_rahbar_lavozim_en,
                hududiy_rahbar_link_telegram,
                hududiy_rahbar_link_instagram,
                hududiy_rahbar_link_facebook
            } = req.body
            const rows = await model.New_HududRahbari(
                hududiy_rahbar_img,
                hududiy_rahbar_name_uz,
                hududiy_rahbar_name_ru,
                hududiy_rahbar_name_krl,
                hududiy_rahbar_name_en,
                hududiy_rahbar_lavozim_uz,
                hududiy_rahbar_lavozim_ru,
                hududiy_rahbar_lavozim_krl,
                hududiy_rahbar_lavozim_en,
                hududiy_rahbar_link_telegram,
                hududiy_rahbar_link_instagram,
                hududiy_rahbar_link_facebook
            )
            if(rows) {
                res.send("ok")
            }else {
                res.send("error")
            }
        }catch (e) {
            res.send(e)
        }
    },
    Hudud_rahbarlari: async (req, res) => {
        try {
            const rows = await model.Hudud_rahbarlari()
            res.send(rows)
        }catch (e) {
            console.log(e)
        }
    },
    Update_Rahbar: async (req, res) => {
        try {
            const {hududiy_rahbar_img,
                hududiy_rahbar_name_uz,
                hududiy_rahbar_name_ru,
                hududiy_rahbar_name_krl,
                hududiy_rahbar_name_en,
                hududiy_rahbar_lavozim_uz,
                hududiy_rahbar_lavozim_ru,
                hududiy_rahbar_lavozim_krl,
                hududiy_rahbar_lavozim_en,
                hududiy_rahbar_link_telegram,
                hududiy_rahbar_link_instagram,
                hududiy_rahbar_link_facebook,
                hududiy_rahbar_id} = req.body

            const rows = await model.Update_HududRahbari(hududiy_rahbar_img,
                hududiy_rahbar_name_uz,
                hududiy_rahbar_name_ru,
                hududiy_rahbar_name_krl,
                hududiy_rahbar_name_en,
                hududiy_rahbar_lavozim_uz,
                hududiy_rahbar_lavozim_ru,
                hududiy_rahbar_lavozim_krl,
                hududiy_rahbar_lavozim_en,
                hududiy_rahbar_link_telegram,
                hududiy_rahbar_link_instagram,
                hududiy_rahbar_link_facebook,
                hududiy_rahbar_id)
        res.send("ok")
        }catch (e) {
            console.log(e)
        }
    },
    delete_Hudud_rahbari :async (req, res) => {
        try {
            const {rahbar_id} = req.body
            const rows = await model.delete_HududRahbari(rahbar_id)
            res.send("ok")
        }catch (e) {
            console.log(e)
        }
    }
}