const { fetch, fetchAll } = require('../../lib/postgres')

const new_gallery = `
    INSERT INTO Foto_gallary (
        gallary_title_uz,
        gallary_title_ru,
        gallary_title_krl,
        gallary_title_en,
        gallary_glavniy,
        gallary_data
    ) VAlUES ($1,$2, $3, $4, $5, $6)  RETURNING *
`
const gallerys = `
    SELECT * FROM Foto_gallary
`

const update_gallery = `
    UPDATE Foto_gallary SET  
    gallary_title_uz = $1,
    gallary_title_ru = $2,
    gallary_title_krl = $3,
    gallary_title_en = $4,
    gallary_glavniy = $5,
    gallary_data = $6 WHERE gallary_id = $7
`
const delete_gallery = `
    DELETE FROM Foto_gallary WHERE gallary_id = $1
`


const new_gallery_foto = `
    INSERT INTO Foto_gallary_foto (
        foto,
        foto_gallary
    ) VALUES ($1, $2) RETURNING *
`
const delete_galleru_foto = `
    DELETE FROM Foto_gallary_foto WHERE foto_id = $1
`
const gallery_fotos = `
        SELECT * FROM Foto_gallary_foto WHERE foto_gallary = $1
`
const new_gallery_Foto = (
    foto,
    foto_gallary) =>
    fetch(new_gallery_foto, 
        foto,
        foto_gallary)
const delete_Gallery_Foto = (foto_id) => fetch(
    delete_galleru_foto,
    foto_id
)
const Gallery_fotos = (foto_gallary) => fetchAll(gallery_fotos, foto_gallary)

const new_Gallery = (
    gallary_title_uz,
    gallary_title_ru,
    gallary_title_krl,
    gallary_title_en,
    gallary_glavniy,
    gallary_data) =>
    fetch(new_gallery, 
        gallary_title_uz,
        gallary_title_ru,
        gallary_title_krl,
        gallary_title_en,
        gallary_glavniy,
        gallary_data);
const Galereys = () => fetchAll(gallerys)
const Update_galereys = (
    gallary_title_uz,
    gallary_title_ru,
    gallary_title_krl,
    gallary_title_en,
    gallary_glavniy,
    gallary_data,
    gallary_id
)=> fetch(update_gallery, 
    gallary_title_uz,
    gallary_title_ru,
    gallary_title_krl,
    gallary_title_en,
    gallary_glavniy,
    gallary_data,
    gallary_id);
const Delete_Gallery = (gallery_id) => fetch(delete_gallery, gallery_id)

module.exports = {
    new_Gallery,
    Galereys,
    Update_galereys,
    Delete_Gallery,
    new_gallery_Foto,
    delete_Gallery_Foto,
    Gallery_fotos
}