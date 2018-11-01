
var multer = require('multer')

var storage = multer.diskStorage(
    {
        destination: './uploads/',
        filename: function ( req, file, cb ) {
           
            cb( null, file.originalname); //saving file with original filename
        }
    }
);

var upload = multer( { storage: storage } );

var express = require('express')
var router = express.Router()

//for uploading a single file

router.post('/', upload.single('file'), function (req, res) {
  console.log(req.file)
})

module.exports = router