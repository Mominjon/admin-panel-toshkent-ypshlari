const { fetch, fetchAll } = require('../../lib/postgres')

const new_yulduz = `
    INSERT INTO yulduzli_bolalar (
        bola_img,
        bola_title_uz,
        bola_title_ru,
        bola_title_krl,
        bola_title_en,
        bola_name_uz,
        bola_name_ru,
        bola_name_krl,
        bola_name_en,
        bola_faolyati,
        bola_kompanyasi
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
`
const yuduzli_bollar = `
    SELECT * FROM  yulduzli_bolalar
`
const Update_yulduzli = `
    Update yulduzli_bolalar SET 
    bola_img = $1,
    bola_title_uz = $2,
    bola_title_ru = $3,
    bola_title_krl = $4,
    bola_title_en = $5,
    bola_name_uz = $6,
    bola_name_ru = $7,
    bola_name_krl= $8,
    bola_name_en = $9,
    bola_faolyati = $10,
    bola_kompanyasi = $11 WHERE bola_id = $12
`
const delete_yulduz = `
    DELETE FROM yulduzli_bolalar WHERE bola_id = $1
`
const New_yulduz = (bola_img,
    bola_title_uz,
    bola_title_ru,
    bola_title_krl,
    bola_title_en,
    bola_name_uz,
    bola_name_ru,
    bola_name_krl,
    bola_name_en,
    bola_faolyati,
    bola_kompanyasi) => fetch(new_yulduz, 
        bola_img,
        bola_title_uz,
        bola_title_ru,
        bola_title_krl,
        bola_title_en,
        bola_name_uz,
        bola_name_ru,
        bola_name_krl,
        bola_name_en,
        bola_faolyati,
        bola_kompanyasi)
const Yulduzlar = () => fetchAll(yuduzli_bollar)
const Update_Yulduz = (
    bola_img,
    bola_title_uz,
    bola_title_ru,
    bola_title_krl,
    bola_title_en,
    bola_name_uz,
    bola_name_ru,
    bola_name_krl,
    bola_name_en,
    bola_faolyati,
    bola_kompanyasi,
    bola_id
) => fetch(Update_yulduzli, 
    bola_img,
    bola_title_uz,
    bola_title_ru,
    bola_title_krl,
    bola_title_en,
    bola_name_uz,
    bola_name_ru,
    bola_name_krl,
    bola_name_en,
    bola_faolyati,
    bola_kompanyasi,
    bola_id)
const Delete_Yulduz = (yulduz_id) => fetch(delete_yulduz, yulduz_id)

module.exports = {
    New_yulduz,
    Yulduzlar,
    Update_Yulduz,
    Delete_Yulduz 
}