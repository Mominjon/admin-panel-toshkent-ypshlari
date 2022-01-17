const { fetch, fetchAll } = require('../../lib/postgres')

const new_video_gallery = `
    INSERT INTO video_gallry (
        video_title_uz,
        video_title_ru,
        video_title_krl,
        video_title_en,
        video_1,
        video_2,
        video_3
    ) VALUES ($1, $2, $3, $4 ,$5 ,$6, $7) RETURNING *
`
const video_gallereys = `
    SELECT * FROM video_gallry
`
const video_gallery_one = `
    SELECT * FROM video_gallry WHERE video_id = $1
`
const update_video_gallery = `
    UPDATE video_gallry SET video_title_uz = $1,
    video_title_ru = $2,
    video_title_krl = $3,
    video_title_en = $4,
    video_1 = $5,
    video_2 = $6,
    video_3 = $7 WHERE video_id = $8
`
const delete_video_gallery = `
    DELETE FROM video_gallry WHERE video_id = $1
`
const new_Video_gallery = (
    video_title_uz,
    video_title_ru,
    video_title_krl,
    video_title_en,
    video_1,
    video_2,
    video_3) => fetch(new_video_gallery, 
        video_title_uz,
        video_title_ru,
        video_title_krl,
        video_title_en,
        video_1,
        video_2,
        video_3)
const Video_gallereys = () => fetchAll(video_gallereys)
const One_video_gallerey = (gallery_id) => fetch(video_gallery_one, gallery_id)

const Update_video_gallery = (
    video_title_uz,
    video_title_ru,
    video_title_krl,
    video_title_en,
    video_1,
    video_2,
    video_3,
    video_id
) => fetch(update_video_gallery, 
    video_title_uz,
    video_title_ru,
    video_title_krl,
    video_title_en,
    video_1,
    video_2,
    video_3,
    video_id)
const Delete_video_gallery = (gallery_id) => fetch(delete_video_gallery, gallery_id)

module.exports = {
    new_Video_gallery,
    Video_gallereys,
    One_video_gallerey,
    Update_video_gallery,
    Delete_video_gallery
}