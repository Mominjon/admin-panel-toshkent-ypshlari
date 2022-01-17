const model = require("./model")

module.exports = {
    new_hero: async (req, res) => {
        try {
            const {hero_mode, hero_title_uz, hero_title_ru, hero_title_krl, hero_title_en, hero_img} = req.body
            const rows = await model.new_hero(hero_mode, hero_title_uz, hero_title_ru, hero_title_krl, hero_title_en, hero_img)

            if(rows) {
                res.send("ok")
            }else {
                res.send("error")
            }
        }catch (e) {
            console.log(e)
        }
    },
    heros : async (req, res) => {
        try {
            const rows = await model.heros()
            res.send(rows)
        }catch (e) {
            console.log(e)
        }
    },
    update_hero: async (req, res) => {
        try {
            const {hero_mode, hero_title_uz, hero_title_ru, hero_title_krl, hero_title_en, hero_img, hero_id} = req.body
            const rows = await model.update_hero(Number(hero_mode), hero_title_uz, hero_title_ru, hero_title_krl, hero_title_en, hero_img, hero_id)
       
            res.send("ok")
            
        }catch (e) {
            console.log(e)
        }
    },
    delete_hero: async (req, res) => {
        try {
            const {hero_id} = req.body
            const rows = await model.delete_hero(hero_id)
            
            res.send("ok")
        }catch (e) {
            console.log(e)
        }
    }
}