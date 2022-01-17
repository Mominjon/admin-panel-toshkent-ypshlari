CREATE DATABASE toshkent_yoshlari;

CREATE TABLE admins (
    admin_id bigserial,
    admin_name VARCHAR(250) NOT NULL,
    admin_password VARCHAR(250) NOT NULL,
    isAdmin VARCHAR(250) DEFAULT 'admin'
);

CREATE TABLE Header (
    header_id bigserial,
    header_mode BIGINT NOT NULL,
    header_title_uz VARCHAR(1000) NOT NULL,
    header_title_ru VARCHAR(1000) NOT NULL,
    header_title_krl VARCHAR(1000) NOT NULL,
    header_title_en VARCHAR(1000) NOT NULL,
    header_img text
);

CREATE TABLE Yangliklar (
    yanglik_id bigserial,
    yangliklar_title_uz VARCHAR(1000) NOT NULL,
    yangliklar_title_ru VARCHAR(1000) NOT NULL,
    yangliklar_title_krl VARCHAR(1000) NOT NULL,
    yangliklar_title_en VARCHAR(1000) NOT NULL,
    yangliklar_short_text_uz text NOT NULL,
    yangliklar_short_text_ru text NOT NULL,
    yangliklar_short_text_krl text NOT NULL,
    yangliklar_short_text_en text NOT NULL,
    yangliklar_long_title_uz text NOT NULL,
    yangliklar_long_title_ru text NOT NULL,
    yangliklar_long_title_krl text NOT NULL,
    yangliklar_long_title_en text NOT NULL,
    yangliklar_date text,
    yangliklar_img_1 text DEFAULT 'false',
    yangliklar_img_2 text DEFAULT 'false',
    yangliklar_img_3 text DEFAULT 'false',
    yangliklar_img_4 text DEFAULT 'false',
    yangliklar_img_5 text DEFAULT 'false',
    yangliklar_video_link_1 text DEFAULT 'false',
    yangliklar_video_link_2 text DEFAULT 'false',
    yangliklar_video_link_3 text DEFAULT 'false'
);
CREATE TABLE Imkonyatlar (
    imkonyatlar_id bigserial,
    imkonyatlar_title_uz VARCHAR(1000) NOT NULL,
    imkonyatlar_title_ru VARCHAR(1000) NOT NULL,
    imkonyatlar_title_krl VARCHAR(1000) NOT NULL,
    imkonyatlar_title_en VARCHAR(1000) NOT NULL,
    imkonyatlar_short_text_uz text NOT NULL,
    imkonyatlar_short_text_ru text NOT NULL,
    imkonyatlar_short_text_krl text NOT NULL,
    imkonyatlar_short_text_en text NOT NULL,
    imkonyatlar_long_title_uz text NOT NULL,
    imkonyatlar_long_title_ru text NOT NULL,
    imkonyatlar_long_title_krl text NOT NULL,
    imkonyatlar_long_title_en text NOT NULL,
    imkonyatlar_date text,
    imkonyatlar_img_1 text DEFAULT 'false',
    imkonyatlar_img_2 text DEFAULT 'false',
    imkonyatlar_img_3 text DEFAULT 'false',
    imkonyatlar_img_4 text DEFAULT 'false',
    imkonyatlar_img_5 text DEFAULT 'false',
    imkonyatlar_video_link_1 text DEFAULT 'false',
    imkonyatlar_video_link_2 text DEFAULT 'false',
    imkonyatlar_video_link_3 text DEFAULT 'false'
);
CREATE TABLE Loyihalar (
    loyihalar_id bigserial,
    loyihalar_title_uz VARCHAR(1000) NOT NULL,
    loyihalar_title_ru VARCHAR(1000) NOT NULL,
    loyihalar_title_krl VARCHAR(1000) NOT NULL,
    loyihalar_title_en VARCHAR(1000) NOT NULL,
    loyihalar_short_text_uz text NOT NULL,
    loyihalar_short_text_ru text NOT NULL,
    loyihalar_short_text_krl text NOT NULL,
    loyihalar_short_text_en text NOT NULL,
    loyihalar_long_title_uz text NOT NULL,
    loyihalar_long_title_ru text NOT NULL,
    loyihalar_long_title_krl text NOT NULL,
    loyihalar_long_title_en text NOT NULL,
    loyihalar_date text,
    loyihalar_img_1 text DEFAULT 'false',
    loyihalar_img_2 text DEFAULT 'false',
    loyihalar_img_3 text DEFAULT 'false',
    loyihalar_img_4 text DEFAULT 'false',
    loyihalar_img_5 text DEFAULT 'false',
    loyihalar_video_link_1 text DEFAULT 'false',
    loyihalar_video_link_2 text DEFAULT 'false',
    loyihalar_video_link_3 text DEFAULT 'false',
    loyihalar_tag_uz VARCHAR(1000) NOT NULL,
    loyihalar_tag_ru VARCHAR(1000) NOT NULL,
    loyihalar_tag_krl VARCHAR(1000) NOT NULL,
    loyihalar_tag_en VARCHAR(1000) NOT NULL
);

CREATE TABLE Foto_gallary (
    gallary_id bigserial PRIMARY KEY ,
    gallary_title_uz text NOT NULL, 
    gallary_title_ru text NOT NULL, 
    gallary_title_krl text NOT NULL, 
    gallary_title_en text NOT NULL, 
    gallary_glavniy text NOT NULL,
    gallary_data text NOT NULL
);

CREATE TABLE Foto_gallary_foto (
    foto_id bigserial,
    foto text NOT NULL,
    foto_gallary INT REFERENCES Foto_gallary(gallary_id)
);

CREATE TABLE video_gallry (
    video_id bigserial,
    video_title_uz VARCHAR(1000) NOT NULL,
    video_title_ru VARCHAR(1000) NOT NULL,
    video_title_krl VARCHAR(1000) NOT NULL,
    video_title_en VARCHAR(1000) NOT NULL,
    video_1 text DEFAULT 'false',
    video_2 text DEFAULT 'false',
    video_3 text DEFAULT 'false'
);

CREATE TABLE Tadbirlar (
    tadbir_id bigserial,
    tadbir_title_uz VARCHAR(1000) NOT NULL,
    tadbir_title_ru VARCHAR(1000) NOT NULL,
    tadbir_title_krl VARCHAR(1000) NOT NULL,
    tadbir_title_en VARCHAR(1000) NOT NULL,
    tadbir_text_uz text NOT NULL,
    tadbir_text_ru text NOT NULL,
    tadbir_text_krl text NOT NULL,
    tadbir_text_en text NOT NULL,
    tadbir_img_1 text DEFAULT 'false',
    tadbir_img_2 text DEFAULT 'false',
    tadbir_img_3 text DEFAULT 'false',
    tadbir_img_4 text DEFAULT 'false',
    tadbir_img_5 text DEFAULT 'false',
    tadbir_video_link_1 text DEFAULT 'false',
    tadbir_video_link_2 text DEFAULT 'false',
    tadbir_video_link_3 text DEFAULT 'false'
);

CREATE TABLE Rabaryat (
    rahbar_id bigserial ,
    rahbar_mode VARCHAR(20) NOT NULL,
    rahbar_img text NOT NULL,
    rahbar_name_uz VARCHAR(5000) NOT NULL, 
    rahbar_name_ru VARCHAR(5000) NOT NULL, 
    rahbar_name_krl VARCHAR(5000) NOT NULL, 
    rahbar_name_en VARCHAR(5000) NOT NULL, 
    rahbar_lavozim_uz text NOT NULL,
    rahbar_lavozim_ru text NOT NULL,
    rahbar_lavozim_krl text NOT NULL,
    rahbar_lavozim_en text NOT NULL,
    rahbar_telefon VARCHAR(200) NOT NULL,
    rahbar_pochta VARCHAR(500) NOT NULL,
    rahbar_qabul_kunlari VARCHAR(500) NOT NULL,
    rahbar_vazifalari_uz text NOT NULL,
    rahbar_vazifalari_ru text NOT NULL,
    rahbar_vazifalari_krl text NOT NULL,
    rahbar_vazifalari_en text NOT NULL,
    rahbar_faolyati_uz text NOT NULL,
    rahbar_faolyati_ru text NOT NULL,
    rahbar_faolyati_krl text NOT NULL,
    rahbar_faolyati_en text NOT NULL,
    rahbar_link_telegram VARCHAR(1000) NOT NULL,
    rahbar_link_instagram VARCHAR(1000) NOT NULL,
    rahbar_link_facebook VARCHAR(1000) NOT NULL
);
CREATE TABLE Hududiy_rahbarlar (
    hududiy_rahbar_id bigserial,
    hududiy_rahbar_img text NOT NULL,
    hududiy_rahbar_name_uz VARCHAR(5000) NOT NULL, 
    hududiy_rahbar_name_ru VARCHAR(5000) NOT NULL, 
    hududiy_rahbar_name_krl VARCHAR(5000) NOT NULL, 
    hududiy_rahbar_name_en VARCHAR(5000) NOT NULL, 
    hududiy_rahbar_lavozim_uz text NOT NULL,
    hududiy_rahbar_lavozim_ru text NOT NULL,
    hududiy_rahbar_lavozim_krl text NOT NULL,
    hududiy_rahbar_lavozim_en text NOT NULL,
    hududiy_rahbar_link_telegram VARCHAR(1000) NOT NULL,
    hududiy_rahbar_link_instagram VARCHAR(1000) NOT NULL,
    hududiy_rahbar_link_facebook VARCHAR(1000) NOT NULL
);

CREATE TABLE Murojatlar (
    id bigserial,
    murojatlar BIGINT DEFAULT 0,
    korib_chiqildi BIGINT DEFAULT 0,
    korib_chiqilmoqda BIGINT DEFAULT 0,
    Rad_etilgan_murojatlar BIGINT DEFAULT 0
);
INSERT INTO Murojatlar (murojatlar, korib_chiqildi, korib_chiqilmoqda, Rad_etilgan_murojatlar) VALUES (0,0,0,0);

CREATE TABLE yulduzli_bolalar (
    bola_id bigserial,
    bola_img text NOT NULL,
    bola_title_uz VARCHAR(500) NOT NULL,
    bola_title_ru VARCHAR(500) NOT NULL,
    bola_title_krl VARCHAR(500) NOT NULL,
    bola_title_en VARCHAR(500) NOT NULL,
    bola_name_uz VARCHAR(1000) NOT NULL,
    bola_name_ru VARCHAR(1000) NOT NULL,
    bola_name_krl VARCHAR(1000) NOT NULL,
    bola_name_en VARCHAR(1000) NOT NULL,
    bola_faolyati text NOT NULL,
    bola_kompanyasi text NOT NULL
);

CREATE TABLE ochiq_malumotlar (
    ochiq_malumot_id bigserial,
    ochiq_malumot_text_uz text NOT NULL,
    ochiq_malumot_text_ru text NOT NULL,
    ochiq_malumot_text_krl text NOT NULL,
    ochiq_malumot_text_en text NOT NULL,
    ochiq_malumot_file_pdf text DEFAULT 'false',
    ochiq_malumot_file_doc text DEFAULT 'false',
    ochiq_malumot_file_xlsx text DEFAULT 'false',
    ochiq_malumot_file_jpg text DEFAULT 'false'
);