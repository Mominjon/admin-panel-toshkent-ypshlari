const { fetch, fetchAll } = require('../../lib/postgres')


const new_hududrahbari = `
    INSERT INTO Hududiy_rahbarlar (
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
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)  RETURNING *
`
const hududiy_rahbarlar = `
        SELECT * FROM Hududiy_rahbarlar
`
const update_rahbar = `
    UPDATE Hududiy_rahbarlar SET 
    hududiy_rahbar_img = $1,
    hududiy_rahbar_name_uz = $2,
    hududiy_rahbar_name_ru = $3,
    hududiy_rahbar_name_krl = $4,
    hududiy_rahbar_name_en = $5,
    hududiy_rahbar_lavozim_uz = $6,
    hududiy_rahbar_lavozim_ru = $7,
    hududiy_rahbar_lavozim_krl = $8,
    hududiy_rahbar_lavozim_en = $9,
    hududiy_rahbar_link_telegram = $10,
    hududiy_rahbar_link_instagram = $11,
    hududiy_rahbar_link_facebook = $12 WHERE hududiy_rahbar_id = $13
`
const delete_hudu_rahbari = `
    DELETE FROM Hududiy_rahbarlar WHERE hududiy_rahbar_id = $1
`
const New_HududRahbari = (
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
) => fetch(new_hududrahbari,
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
        hududiy_rahbar_link_facebook)
const Hudud_rahbarlari = () => fetchAll(hududiy_rahbarlar)

const Update_HududRahbari = (
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
        hududiy_rahbar_link_facebook,
        hududiy_rahbar_id
) => fetch(update_rahbar , 
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
        hududiy_rahbar_link_facebook,
        hududiy_rahbar_id)
const delete_HududRahbari = (rahbar_id) => fetch(delete_hudu_rahbari, rahbar_id)

module.exports = {
    New_HududRahbari,
    Hudud_rahbarlari,
    Update_HududRahbari,
    delete_HududRahbari
}