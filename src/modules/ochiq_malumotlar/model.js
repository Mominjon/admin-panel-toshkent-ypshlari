const { fetch, fetchAll } = require("../../lib/postgres");

const new_malumot = `
    INSERT INTO ochiq_malumotlar (
        ochiq_malumot_text_uz,
        ochiq_malumot_text_ru,
        ochiq_malumot_text_krl,
        ochiq_malumot_text_en,
        ochiq_malumot_file_pdf,
        ochiq_malumot_file_doc,
        ochiq_malumot_file_xlsx,
        ochiq_malumot_file_jpg
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)  RETURNING *
`
const malumotlar =`
    SELECT * FROM ochiq_malumotlar 
`
const update_malumotlar = `
    UPDATE ochiq_malumotlar SET 
    ochiq_malumot_text_uz = $1,
    ochiq_malumot_text_ru = $2,
    ochiq_malumot_text_krl = $3,
    ochiq_malumot_text_en = $4,
    ochiq_malumot_file_pdf = $5,
    ochiq_malumot_file_doc = $6,
    ochiq_malumot_file_xlsx = $7,
    ochiq_malumot_file_jpg = $8 WHERE ochiq_malumot_id = $9
`
const delete_malumot = `
    DELETE FROM ochiq_malumotlar WHERE ochiq_malumot_id = $1
`
const New_Malumot = (
    ochiq_malumot_text_uz,
    ochiq_malumot_text_ru,
    ochiq_malumot_text_krl,
    ochiq_malumot_text_en,
    ochiq_malumot_file_pdf,
    ochiq_malumot_file_doc,
    ochiq_malumot_file_xlsx,
    ochiq_malumot_file_jpg
) => fetch(new_malumot, 
    ochiq_malumot_text_uz,
    ochiq_malumot_text_ru,
    ochiq_malumot_text_krl,
    ochiq_malumot_text_en,
    ochiq_malumot_file_pdf,
    ochiq_malumot_file_doc,
    ochiq_malumot_file_xlsx,
    ochiq_malumot_file_jpg)
const Malumotlar = () => fetchAll(malumotlar)
const Update_Malumotlar = (
    ochiq_malumot_text_uz,
    ochiq_malumot_text_ru,
    ochiq_malumot_text_krl,
    ochiq_malumot_text_en,
    ochiq_malumot_file_pdf,
    ochiq_malumot_file_doc,
    ochiq_malumot_file_xlsx,
    ochiq_malumot_file_jpg,
    ochiq_malumot_id
) => fetch(update_malumotlar,
    ochiq_malumot_text_uz,
    ochiq_malumot_text_ru,
    ochiq_malumot_text_krl,
    ochiq_malumot_text_en,
    ochiq_malumot_file_pdf,
    ochiq_malumot_file_doc,
    ochiq_malumot_file_xlsx,
    ochiq_malumot_file_jpg,
    ochiq_malumot_id)

const Delete_Malumotlar = (malumot_id) => fetch(delete_malumot, malumot_id)
module.exports = {
    New_Malumot,
    Malumotlar,
    Update_Malumotlar,
    Delete_Malumotlar
}