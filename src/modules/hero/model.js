const { fetch, fetchAll } = require('../../lib/postgres')

const new_table = `
    INSERT INTO Header (header_mode, header_title_uz, header_title_ru, header_title_krl, header_title_en, header_img) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *
`
const hero_table = `
    SELECT * FROM Header
`
const update_table = `
    UPDATE Header SET header_mode = $1 , header_title_uz = $2, header_title_ru = $3, header_title_krl = $4, header_title_en = $5, header_img = $6 WHERE header_id = $7
`

const delete_table = `
    DELETE FROM Header WHERE header_id = $1
`

const new_hero = (header_mode, header_title_uz, header_title_ru, header_title_krl, header_title_en, header_img) => fetch(new_table, header_mode, header_title_uz, header_title_ru, header_title_krl, header_title_en, header_img)

const heros = () => fetchAll(hero_table)

const update_hero = (header_mode, header_title_uz, header_title_ru, header_title_krl, header_title_en, header_img, header_id) => fetch(update_table, header_mode, header_title_uz, header_title_ru, header_title_krl, header_title_en, header_img, header_id)

const delete_hero = (hero_id) => fetch(delete_table, hero_id)

module.exports = {
    new_hero,
    heros,
    update_hero,
    delete_hero
}