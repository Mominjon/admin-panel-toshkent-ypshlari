const multer = require('multer');
const path = require('path');

const url = "http://localhost:8000"


const storage = multer.diskStorage({
    destination: __dirname +  "../../../../images/",
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1000000000
    },

    fileFilter: function (req, file, cb) {
        return cb(null, true);
    }
}).single('myImage');


const storage2 = multer.diskStorage({
    destination: __dirname +  "../../../../files/",
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

const upload_file = multer({
    storage: storage2,
    limits: {
        fileSize: 1000000000000
    },

    fileFilter: function (req, file, cb) {
        return cb(null, true);
    }
}).single('myfiles');

module.exports = {
    upload_img: async(req, res) => {
        try {
            upload(req, res, async(err) => {
                if (err) {
                    console.log(err.message)
                } else {
                    if (req.file == undefined) {
                        console.log("bosh files")
                    } else {                       
                        let img = url + `images/${req.file.filename}`
                        res.send(img)
                    }
                }
            });
        }catch(e) {
            console.log(e.message)
        }
    },
    upload_file_bac: async (req,res) => {
        try {
            upload_file(req, res, async(err) => {
                if (err) {
                    console.log(err.message)
                } else {
                    if (req.file == undefined) {
                        console.log("bosh files")
                    } else {                       
                        let img = url + `files/${req.file.filename}`
                        res.send(img)
                    }
                }
            });
        }catch (e)  {
            console.log(e)
        }
    }
}