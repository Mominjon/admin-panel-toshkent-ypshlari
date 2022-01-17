const { fetch, fetchAll } = require('../../lib/postgres')

const new_yanglik = `
    INSERT INTO Yangliklar (
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
        yangliklar_video_link_3
    ) VALUES ($1, $2, $3,$4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21) RETURNING *
`
const yangliklar = `
    SELECT * FROM Yangliklar
`
const one_yangliklar = `
    SELECT * FROM Yangliklar WHERE yanglik_id = $1
`
const update_yangliklar = `
    UPDATE Yangliklar SET yangliklar_title_uz = $1, yangliklar_title_ru = $2, 
    yangliklar_title_krl = $3,
    yangliklar_title_en = $4,
    yangliklar_short_text_uz = $5,
    yangliklar_short_text_ru = $6,
    yangliklar_short_text_krl = $7,
    yangliklar_short_text_en = $8,
    yangliklar_long_title_uz = $9,
    yangliklar_long_title_ru = $10,
    yangliklar_long_title_krl = $11,
    yangliklar_long_title_en = $12,
    yangliklar_date = $13,
    yangliklar_img_1 = $14,
    yangliklar_img_2 = $15,
    yangliklar_img_3 = $16,
    yangliklar_img_4 = $17,
    yangliklar_img_5 = $18,
    yangliklar_video_link_1 = $19,
    yangliklar_video_link_2 = $20,
    yangliklar_video_link_3 = $21 WHERE yanglik_id = $22
`
const delete_yangliklar = `
    DELETE FROM Yangliklar WHERE yanglik_id = $1
`

const New_Yanglik = (
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
        yanglik_id
) => fetch(new_yanglik, 
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
        yanglik_id
)

const Yangliklar = () => fetchAll(yangliklar)
const oneYanglik = (yanglik_id) => fetch(one_yangliklar, yanglik_id)
const update_Yanglik = (
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
        yanglik_id
) => fetch(update_yangliklar,
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
        yanglik_id
)
const delete_Yanglik = (yanglik_id) => fetch(delete_yangliklar, yanglik_id)

module.exports = {
    New_Yanglik,
    Yangliklar,
    oneYanglik,
    update_Yanglik,
    delete_Yanglik
}