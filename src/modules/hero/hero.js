const model = require("./model")
const { signUser, verifyUser } = require("../../lib/jwt")

module.exports = {
    new_hero: async (req, res) => {
        try {
            const { token } = req.body 
            let user = ""
            token ? user = verifyUser(token) : user = "not admin"
            if(user.isadmin == "admin") {
                const {hero_mode, hero_title_uz, hero_title_ru, hero_title_krl, hero_title_en, hero_img} = req.body
                const rows = await model.new_hero(hero_mode, hero_title_uz, hero_title_ru, hero_title_krl, hero_title_en, hero_img)
    
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
            const { token } = req.body 
            let user = ""
            token ? user = verifyUser(token) : user = "not admin"
            if(user.isadmin == "admin") {
                const {hero_mode, hero_title_uz, hero_title_ru, hero_title_krl, hero_title_en, hero_img, hero_id} = req.body
                const rows = await model.update_hero(Number(hero_mode), hero_title_uz, hero_title_ru, hero_title_krl, hero_title_en, hero_img, hero_id)
        
                res.send("ok")
            }else {
                res.send("not admin")
            }
            
            
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