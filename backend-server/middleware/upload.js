const path = require('path');
const multer = require('multer');
const { request } = require('express');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {

        cb(null, 'public/aswstorage/')

    },
    filename: (req, file, cb) => {

        let fileName = ''
        if (file.fieldname === 'img') {
            fileName = 'img_' + Date.now() + '-' + Math.round(Math.random() * 1E9)
        } else {
            fileName = 'aud_' + Date.now() + '-' + Math.round(Math.random() * 1E9)

        }
        cb(null, fileName + path.extname(file.originalname))



    }

})

const fileFilter = (req, file, cb) => {


    // ===> Field Filter to check extention

    // const whitelist = []
    // console.log("F name =>", file.fieldname)

    // if (file.fieldname === 'img') {
    //     whitelist.concat('image/png',
    //         'image/jpeg',
    //         'image/jpg',
    //         'image/webp'
    //     )
    // } else {
    //     whitelist.concat('audio/mpeg',
    //         'audio/jpeg',
    //         'audio/jpg',
    //         'audio/webp'
    //     )

    // }


    // if (!whitelist.includes(file.mimetype)) {
    //     return cb(new Error('file is not allowed'))
    // }

    cb(null, true)


}


const upload = multer({ storage: storage, fileFilter: fileFilter, })

exports.upload = upload