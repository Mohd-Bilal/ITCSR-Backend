
var multer = require('multer')
var fname
var storage = multer.diskStorage(
    {
        destination: './uploads/',
        filename: function ( req, file, cb ) {
           fname  = file
            cb( null, file.originalname); //saving file with original filename
        }
    }
);

var upload = multer( { storage: storage } );

var express = require('express')
var router = express.Router()

//for uploading a single file

router.post('/', upload.single('file'), function (req, res) {
    if(req.file !=null)
        res.send("success")
})

module.exports = router