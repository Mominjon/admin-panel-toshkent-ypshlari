const { fetch, fetchAll } = require('../../lib/postgres')

const hisoblagich = `
    SELECT * FROM Murojatlar WHERE id = 1
`
const update_hisoblagich = `
    UPDATE Murojatlar SET 
    murojatlar = $1,
    korib_chiqildi = $2,
    korib_chiqilmoqda = $3,
    Rad_etilgan_murojatlar = $4 WHERE id = 1
`
const Hisoblagich = () => fetchAll(hisoblagich)

const Update_Hisoblagich = (
    murojatlar,
    korib_chiqildi,
    korib_chiqilmoqda,
    Rad_etilgan_murojatlar
) => fetch(update_hisoblagich, 
    murojatlar,
    korib_chiqildi,
    korib_chiqilmoqda,
    Rad_etilgan_murojatlar)
 


const new_habar = `
    INSERT INTO habarlar (
        habar_userName,
        habar_userEmail,
        habar_userTelefon,
        habar_mavzusi,
        habar_text,
        habar_date) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *
`

const habarlar = `
    SElECT * FROM habarlar
`
const day = new Date().getDay() 
const month =  new Date().getMonth()+ 1
const year = new Date().getFullYear()

const datas = day + "-" + month + "-"+ year

const New_Habar = (
    habar_userName,
    habar_userEmail,
    habar_userTelefon,
    habar_mavzusi,
    habar_text) => fetch(new_habar, 
        habar_userName,
        habar_userEmail,
        habar_userTelefon,
        habar_mavzusi,
        habar_text, datas)

const Habarlar = () => fetchAll(habarlar)

module.exports = {
    Hisoblagich,
    Update_Hisoblagich,
    New_Habar,
    Habarlar
}