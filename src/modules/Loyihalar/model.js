const { fetch, fetchAll } = require('../../lib/postgres')

const new_Loyihalar = `
    INSERT INTO Loyihalar (
        loyihalar_title_uz,
        loyihalar_title_ru,
        loyihalar_title_krl,
        loyihalar_title_en,
        loyihalar_short_text_uz,
        loyihalar_short_text_ru,
        loyihalar_short_text_krl,
        loyihalar_short_text_en,
        loyihalar_long_title_uz,
        loyihalar_long_title_ru,
        loyihalar_long_title_krl,
        loyihalar_long_title_en,
        loyihalar_date,
        loyihalar_img_1,
        loyihalar_img_2,
        loyihalar_img_3,
        loyihalar_img_4,
        loyihalar_img_5,
        loyihalar_video_link_1,
        loyihalar_video_link_2,
        loyihalar_video_link_3,
        loyihalar_tag_uz,
        loyihalar_tag_ru,
        loyihalar_tag_krl,
        loyihalar_tag_en
    ) VALUES ($1, $2, $3,$4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25) RETURNING *
`
const loyihalar = `
    SELECT * FROM Loyihalar
`
const one_Loyihalar = `
    SELECT * FROM Loyihalar WHERE loyihalar_id = $1
`
const update_Loyiha = `
    UPDATE Loyihalar SET loyihalar_title_uz = $1, loyihalar_title_ru = $2, 
    loyihalar_title_krl = $3,
    loyihalar_title_en = $4,
    loyihalar_short_text_uz = $5,
    loyihalar_short_text_ru = $6,
    loyihalar_short_text_krl = $7,
    loyihalar_short_text_en = $8,
    loyihalar_long_title_uz = $9,
    loyihalar_long_title_ru = $10,
    loyihalar_long_title_krl = $11,
    loyihalar_long_title_en = $12,
    loyihalar_date = $13,
    loyihalar_img_1 = $14,
    loyihalar_img_2 = $15,
    loyihalar_img_3 = $16,
    loyihalar_img_4 = $17,
    loyihalar_img_5 = $18,
    loyihalar_video_link_1 = $19,
    loyihalar_video_link_2 = $20,
    loyihalar_video_link_3 = $21,
    loyihalar_tag_uz = $22,
    loyihalar_tag_ru = $23,
    loyihalar_tag_krl = $24,
    loyihalar_tag_en = $25 WHERE loyihalar_id = $26
`
const delete_Loyihalar = `
    DELETE FROM Loyihalar WHERE loyihalar_id = $1
`

const New_Loyihalar = (
    loyihalar_title_uz,
        loyihalar_title_ru,
        loyihalar_title_krl,
        loyihalar_title_en,
        loyihalar_short_text_uz,
        loyihalar_short_text_ru,
        loyihalar_short_text_krl,
        loyihalar_short_text_en,
        loyihalar_long_title_uz,
        loyihalar_long_title_ru,
        loyihalar_long_title_krl,
        loyihalar_long_title_en,
        loyihalar_date,
        loyihalar_img_1,
        loyihalar_img_2,
        loyihalar_img_3,
        loyihalar_img_4,
        loyihalar_img_5,
        loyihalar_video_link_1,
        loyihalar_video_link_2,
        loyihalar_video_link_3,
        loyihalar_tag_uz,
        loyihalar_tag_ru,
        loyihalar_tag_krl,
        loyihalar_tag_en
) => fetch(new_Loyihalar, 
    loyihalar_title_uz,
        loyihalar_title_ru,
        loyihalar_title_krl,
        loyihalar_title_en,
        loyihalar_short_text_uz,
        loyihalar_short_text_ru,
        loyihalar_short_text_krl,
        loyihalar_short_text_en,
        loyihalar_long_title_uz,
        loyihalar_long_title_ru,
        loyihalar_long_title_krl,
        loyihalar_long_title_en,
        loyihalar_date,
        loyihalar_img_1,
        loyihalar_img_2,
        loyihalar_img_3,
        loyihalar_img_4,
        loyihalar_img_5,
        loyihalar_video_link_1,
        loyihalar_video_link_2,
        loyihalar_video_link_3,
        loyihalar_tag_uz,
        loyihalar_tag_ru,
        loyihalar_tag_krl,
        loyihalar_tag_en
)

const Loyihalar = () => fetchAll(loyihalar)
const oneLoyihalar = (loyiha_id) => fetch(one_Loyihalar, loyiha_id)
const Update_Loyiha = (
    loyihalar_title_uz,
    loyihalar_title_ru,
    loyihalar_title_krl,
    loyihalar_title_en,
    loyihalar_short_text_uz,
    loyihalar_short_text_ru,
    loyihalar_short_text_krl,
    loyihalar_short_text_en,
    loyihalar_long_title_uz,
    loyihalar_long_title_ru,
    loyihalar_long_title_krl,
    loyihalar_long_title_en,
    loyihalar_date,
    loyihalar_img_1,
    loyihalar_img_2,
    loyihalar_img_3,
    loyihalar_img_4,
    loyihalar_img_5,
    loyihalar_video_link_1,
    loyihalar_video_link_2,
    loyihalar_video_link_3,
    loyihalar_tag_uz,
    loyihalar_tag_ru,
    loyihalar_tag_krl,
    loyihalar_tag_en,
    loyihalar_id
) => fetch(
    update_Loyiha,
    loyihalar_title_uz,
    loyihalar_title_ru,
    loyihalar_title_krl,
    loyihalar_title_en,
    loyihalar_short_text_uz,
    loyihalar_short_text_ru,
    loyihalar_short_text_krl,
    loyihalar_short_text_en,
    loyihalar_long_title_uz,
    loyihalar_long_title_ru,
    loyihalar_long_title_krl,
    loyihalar_long_title_en,
    loyihalar_date,
    loyihalar_img_1,
    loyihalar_img_2,
    loyihalar_img_3,
    loyihalar_img_4,
    loyihalar_img_5,
    loyihalar_video_link_1,
    loyihalar_video_link_2,
    loyihalar_video_link_3,
    loyihalar_tag_uz,
    loyihalar_tag_ru,
    loyihalar_tag_krl,
    loyihalar_tag_en,
    loyihalar_id
)
const delete_Loyiha = (loyiha_id) => fetch(delete_Loyihalar, loyiha_id)

module.exports = {
    New_Loyihalar,
    Loyihalar,
    oneLoyihalar,
    Update_Loyiha,
    delete_Loyiha
}