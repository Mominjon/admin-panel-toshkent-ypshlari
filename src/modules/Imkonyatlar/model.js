const { fetch, fetchAll } = require('../../lib/postgres')

const new_imkonyat = `
    INSERT INTO Imkonyatlar (
        imkonyatlar_title_uz,
        imkonyatlar_title_ru,
        imkonyatlar_title_krl,
        imkonyatlar_title_en,
        imkonyatlar_short_text_uz,
        imkonyatlar_short_text_ru,
        imkonyatlar_short_text_krl,
        imkonyatlar_short_text_en,
        imkonyatlar_long_title_uz,
        imkonyatlar_long_title_ru,
        imkonyatlar_long_title_krl,
        imkonyatlar_long_title_en,
        imkonyatlar_date,
        imkonyatlar_img_1,
        imkonyatlar_img_2,
        imkonyatlar_img_3,
        imkonyatlar_img_4,
        imkonyatlar_img_5,
        imkonyatlar_video_link_1,
        imkonyatlar_video_link_2,
        imkonyatlar_video_link_3
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21) RETURNING *
`
const imkonyats = `
    SELECT * FROM Imkonyatlar
`
const one_imkonyat = `
    SELECT * FROM Imkonyatlar WHERE imkonyatlar_id = $1
`
const update_imkonyat = `
    UPDATE Imkonyatlar SET imkonyatlar_title_uz = $1, imkonyatlar_title_ru = $2, 
    imkonyatlar_title_krl = $3,
    imkonyatlar_title_en = $4,
    imkonyatlar_short_text_uz = $5,
    imkonyatlar_short_text_ru = $6,
    imkonyatlar_short_text_krl = $7,
    imkonyatlar_short_text_en = $8,
    imkonyatlar_long_title_uz = $9,
    imkonyatlar_long_title_ru = $10,
    imkonyatlar_long_title_krl = $11,
    imkonyatlar_long_title_en = $12,
    imkonyatlar_date = $13,
    imkonyatlar_img_1 = $14,
    imkonyatlar_img_2 = $15,
    imkonyatlar_img_3 = $16,
    imkonyatlar_img_4 = $17,
    imkonyatlar_img_5 = $18,
    imkonyatlar_video_link_1 = $19,
    imkonyatlar_video_link_2 = $20,
    imkonyatlar_video_link_3 = $21 WHERE imkonyatlar_id = $22
`
const delete_imkonyatlar = `
    DELETE FROM Imkonyatlar WHERE imkonyatlar_id = $1
`

const New_Imkonyat = (
    imkonyatlar_title_uz,
    imkonyatlar_title_ru,
    imkonyatlar_title_krl,
    imkonyatlar_title_en,
    imkonyatlar_short_text_uz,
    imkonyatlar_short_text_ru,
    imkonyatlar_short_text_krl,
    imkonyatlar_short_text_en,
    imkonyatlar_long_title_uz,
    imkonyatlar_long_title_ru,
    imkonyatlar_long_title_krl,
    imkonyatlar_long_title_en,
    imkonyatlar_date,
    imkonyatlar_img_1,
    imkonyatlar_img_2,
    imkonyatlar_img_3,
    imkonyatlar_img_4,
    imkonyatlar_img_5,
    imkonyatlar_video_link_1,
    imkonyatlar_video_link_2,
    imkonyatlar_video_link_3
) => fetch(new_imkonyat, 
    imkonyatlar_title_uz,           
    imkonyatlar_title_ru,
    imkonyatlar_title_krl,
    imkonyatlar_title_en,
    imkonyatlar_short_text_uz,
    imkonyatlar_short_text_ru,
    imkonyatlar_short_text_krl,
    imkonyatlar_short_text_en,
    imkonyatlar_long_title_uz,
    imkonyatlar_long_title_ru,
    imkonyatlar_long_title_krl,
    imkonyatlar_long_title_en,
    imkonyatlar_date,
    imkonyatlar_img_1,
    imkonyatlar_img_2,
    imkonyatlar_img_3,
    imkonyatlar_img_4,
    imkonyatlar_img_5,
    imkonyatlar_video_link_1,
    imkonyatlar_video_link_2,
    imkonyatlar_video_link_3
)

const Imkonyatlar = () => fetchAll(imkonyats)
const oneImkonyat = (imkon_id) => fetch(one_imkonyat, imkon_id)
const update_Imkon = (
    imkonyatlar_title_uz,
    imkonyatlar_title_ru,
    imkonyatlar_title_krl,
    imkonyatlar_title_en,
    imkonyatlar_short_text_uz,
    imkonyatlar_short_text_ru,
    imkonyatlar_short_text_krl,
    imkonyatlar_short_text_en,
    imkonyatlar_long_title_uz,
    imkonyatlar_long_title_ru,
    imkonyatlar_long_title_krl,
    imkonyatlar_long_title_en,
    imkonyatlar_date,
    imkonyatlar_img_1,
    imkonyatlar_img_2,
    imkonyatlar_img_3,
    imkonyatlar_img_4,
    imkonyatlar_img_5,
    imkonyatlar_video_link_1,
    imkonyatlar_video_link_2,
    imkonyatlar_video_link_3,
    imkonyatlar_id
) => fetch(update_imkonyat,
    imkonyatlar_title_uz,
    imkonyatlar_title_ru,
    imkonyatlar_title_krl,
    imkonyatlar_title_en,
    imkonyatlar_short_text_uz,
    imkonyatlar_short_text_ru,
    imkonyatlar_short_text_krl,
    imkonyatlar_short_text_en,
    imkonyatlar_long_title_uz,
    imkonyatlar_long_title_ru,
    imkonyatlar_long_title_krl,
    imkonyatlar_long_title_en,
    imkonyatlar_date,
    imkonyatlar_img_1,
    imkonyatlar_img_2,
    imkonyatlar_img_3,
    imkonyatlar_img_4,
    imkonyatlar_img_5,
    imkonyatlar_video_link_1,
    imkonyatlar_video_link_2,
    imkonyatlar_video_link_3,
    imkonyatlar_id
)
const delete_imkon = (imkon_id) => fetch(delete_imkonyatlar, imkon_id)

module.exports = {
    New_Imkonyat,
    Imkonyatlar,
    oneImkonyat,
    update_Imkon,
    delete_imkon
}