const express = require('express')

const hero = require("./hero/hero")
const file = require("./filse_upload/file_upload")
const imkonyatlar = require('./Imkonyatlar/imkonyatlar')
const yangliklar = require("./Yangliklar/yangliklar")
const Loyihalar = require("./Loyihalar/loyihalar")
const Foto_gallery = require("./Foto_galery/foto_galery")
const Video_gallery = require("./video_gallery/video_gallery")
const Tadbirlar = require("./Tadbirlar/tadbirlar")
const Rahbaryat = require("./Rahbaryat/rahbaryat")
const Hudud_rahbaryatlari = require("./Hududiy_rahbarlar/hududiy_rahbarlar")
const Yulduzlar = require("./Yulduzli_bolalar/yuduzli_bollar")
const Malumotlar = require("./ochiq_malumotlar/ochiq_malumotlar")
const admin = require("./admin/admin")
const router = express.Router()

router
    // upload start
    .post("/upload_img", file.upload_img)
    .post("/upload_files", file.upload_file_bac)
    // upload end
    //hero start 
    .post("/new_hero", hero.new_hero)
    .get("/heros", hero.heros)
    .post("/update_hero", hero.update_hero)
    .post("/delete_hero", hero.delete_hero)
    // hero end
    // Imkonyatlar start
    .post("/new_imkon", imkonyatlar.new_imkonyat)
    .get("/imkonyatlar", imkonyatlar.imkonyatlar)
    .post("/one_imkonyatlar", imkonyatlar.one_imkonyat)
    .post("/update_imkonyatlar", imkonyatlar.update_imkonyat)
    .post("/delete_imkonyatlar", imkonyatlar.delete_table)
    // IMkonyatlar end
    // yangliklar start
    .post("/new_yanglik", yangliklar.new_Yanglik)
    .get("/yangliklar", yangliklar.Yangliklar)
    .post("/one_yangliklar", yangliklar.one_Yangliklar)
    .post("/update_yangliklar", yangliklar.update_yanglik)
    .post("/delete_yanglik", yangliklar.delete_table)
    // yangliklar end
    // Loyihalar start 
    .post("/new_Loyihalar", Loyihalar.new_Loyihalar)
    .get("/loyihalar", Loyihalar.Loyihalar)
    .post("/one_loyihalar", Loyihalar.one_Loyiha)
    .post("/update_loyiha", Loyihalar.update_loyiha)
    .post("/delete_loyihalar", Loyihalar.delete_table)
    // Loyihalar end
    // Foto_gallery start
    .post("/new_gallery", Foto_gallery.new_gallery)
    .get("/gallereys", Foto_gallery.galleys)
    .post("/update_gallery", Foto_gallery.update_Gallerey)
    .post("/delete_gallery", Foto_gallery.Delete_Gallery)
    // gallery fotos
    .post("/new_gallery_fotos", Foto_gallery.new_gallery_foto)
    .post("/gallery_fotos", Foto_gallery.Gallerey_foto)
    .post("/gallery_fotos_delete", Foto_gallery.delete_gallery_foto)
    // Foto gallery end
    // video_gallery start
    .post("/new_video_gallery", Video_gallery.new_video_gallery)
    .get("/video_gallery", Video_gallery.video_gallerys)
    .post("/one_video_gallery", Video_gallery.one_video_gallery)
    .post("/update_video_gallery", Video_gallery.update_video_gallery)
    .post("/delete_video_gallery", Video_gallery.delete_video_gallery)
    // videoGallery end
    // Tadbirlar start
    .post("/new_tadbir", Tadbirlar.new_Tadbir)
    .get("/tadbirlar", Tadbirlar.Tadbirlar)
    .post("/one_tadbirlar", Tadbirlar.one_Tadbir)
    .post("/update_tadbirlar", Tadbirlar.update_Tadbir)
    .post("/delete_tadbir", Tadbirlar.delete_Tadbir)
    // tadbirlar end
    // Rahbaryat start
    .post("/new_rahbar", Rahbaryat.newRahbaryat)
    .get("/rahbarlar", Rahbaryat.Rahbaryat)
    .post("/one_rahbarlar", Rahbaryat.one_rahbar)
    .post("/update_rahbarlar", Rahbaryat.update_rahbar)
    .post("/delete_rahbar", Rahbaryat.delete_rahbaryat)
    // RAhbaryat end
    // Hududiy Rahbaryat
    .post("/new_hudud_rahbar", Hudud_rahbaryatlari.new_HududRahbari)
    .get("/rahbarlar_hudud", Hudud_rahbaryatlari.Hudud_rahbarlari)
    .post("/update_rahbarlar_hudud", Hudud_rahbaryatlari.Update_Rahbar)
    .post("/delete_rahbar_hudud", Hudud_rahbaryatlari.delete_Hudud_rahbari)
    // Hudud rahbarlari end
    // Yulduzli bollar start
    .post("/new_yulduz", Yulduzlar.New_Yulduz)
    .get("/yulduzlar", Yulduzlar.Yulduzlar)
    .post("/update_yulduz", Yulduzlar.Update_yulduzlar)
    .post("/delete_yulduz", Yulduzlar.delete_yulduz)
    // Yulduzlar end
    // ochiq_malumotlar start
    .post("/new_malumot", Malumotlar.New_Malumot)
    .get("/malumotlar", Malumotlar.Malumotlar)
    .post("/update_malumot", Malumotlar.Update_Malumotlar)
    .post("/delete_malumot", Malumotlar.Delete_malumotlar)
    // PROJECT END
    .post("/new_admin", admin.new_admin)
    .post("/admins", admin.admins)
    .post("/admin_login", admin.admin_login)
    .post("/delete_admin", admin.delete_admin)
module.exports = router