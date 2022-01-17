const { fetch, fetchAll } = require('../../lib/postgres')

const new_tadbir = `
    INSERT INTO Tadbirlar (
        tadbir_title_uz, 
        tadbir_title_ru, 
        tadbir_title_krl, 
        tadbir_title_en, 
        tadbir_text_uz,
        tadbir_text_ru,
        tadbir_text_krl,
        tadbir_text_en,
        tadbir_img_1,
        tadbir_img_2,
        tadbir_img_3,
        tadbir_img_4,
        tadbir_img_5,
        tadbir_video_link_1,
        tadbir_video_link_2,
        tadbir_video_link_3
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $11, $12, $13, $14, $15, $16)  RETURNING *
`
const tadbirlar = `
    SELECT * FROM Tadbirlar
`
const one_tadbir = `
    SELECT * FROM Tadbirlar WHERE tadbir_id = $1
`
const update_tadbir = `
    UPDATE Tadbirlar SET 
    tadbir_title_uz = $1,
    tadbir_title_ru = $2,
    tadbir_title_krl = $3,
    tadbir_title_en = $4,
    tadbir_text_uz = $5,
    tadbir_text_ru = $6,
    tadbir_text_krl = $7,
    tadbir_text_en = $8,
    tadbir_img_1 = $9,
    tadbir_img_2 = $10,
    tadbir_img_3 = $11,
    tadbir_img_4 = $12,
    tadbir_img_5 = $13,
    tadbir_video_link_1 = $14,
    tadbir_video_link_2= $15,
    tadbir_video_link_3 = $16 WHERE tadbir_id = $17
`
const delete_tadbir = `
    DELETE FROM Tadbirlar WHERE tadbir_id = $1
`
const New_Tadbir = (
        tadbir_title_uz, 
        tadbir_title_ru, 
        tadbir_title_krl, 
        tadbir_title_en, 
        tadbir_text_uz,
        tadbir_text_ru,
        tadbir_text_krl,
        tadbir_text_en,
        tadbir_img_1,
        tadbir_img_2,
        tadbir_img_3,
        tadbir_img_4,
        tadbir_img_5,
        tadbir_video_link_1,
        tadbir_video_link_2,
        tadbir_video_link_3
) => fetch(new_tadbir, 
    tadbir_title_uz, 
        tadbir_title_ru, 
        tadbir_title_krl, 
        tadbir_title_en, 
        tadbir_text_uz,
        tadbir_text_ru,
        tadbir_text_krl,
        tadbir_text_en,
        tadbir_img_1,
        tadbir_img_2,
        tadbir_img_3,
        tadbir_img_4,
        tadbir_img_5,
        tadbir_video_link_1,
        tadbir_video_link_2,
        tadbir_video_link_3)
const Tadbirlar = () => fetchAll(tadbirlar)
const one_Tadbir = (tadbir_id) => fetch(one_tadbir, tadbir_id)

const update_Tadbir = (
    tadbir_title_uz, 
        tadbir_title_ru, 
        tadbir_title_krl, 
        tadbir_title_en, 
        tadbir_text_uz,
        tadbir_text_ru,
        tadbir_text_krl,
        tadbir_text_en,
        tadbir_img_1,
        tadbir_img_2,
        tadbir_img_3,
        tadbir_img_4,
        tadbir_img_5,
        tadbir_video_link_1,
        tadbir_video_link_2,
        tadbir_video_link_3,
        tadbir_id
)=> fetch(update_tadbir,
    tadbir_title_uz, 
        tadbir_title_ru, 
        tadbir_title_krl, 
        tadbir_title_en, 
        tadbir_text_uz,
        tadbir_text_ru,
        tadbir_text_krl,
        tadbir_text_en,
        tadbir_img_1,
        tadbir_img_2,
        tadbir_img_3,
        tadbir_img_4,
        tadbir_img_5,
        tadbir_video_link_1,
        tadbir_video_link_2,
        tadbir_video_link_3,
        tadbir_id 
    )
const delete_Tadbir = (tadbir_id) => fetch(delete_tadbir, tadbir_id)

module.exports = {
    New_Tadbir,
    Tadbirlar,
    one_Tadbir,
    update_Tadbir,
    delete_Tadbir
}