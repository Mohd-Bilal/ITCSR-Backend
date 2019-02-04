var multer = require("multer");
var fname;
var fs = require("fs");
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    var proposalLocation = "./uploads/" + req.body.piid;
    if (!fs.existsSync(proposalLocation)) fs.mkdirSync(proposalLocation);

    cb(null, proposalLocation + "/");
  },
  filename: function(req, file, cb) {
    fname = file;
    var proposalLocation = "./uploads/" + req.body.path;
    if (!fs.existsSync(proposalLocation)) fs.mkdirSync(proposalLocation);

    //saving file with original filename}

    cb(null, file.originalname);
  }
});

var upload = multer({ storage: storage });

var express = require("express");
var router = express.Router();

//for uploading a single file

router.post("/", upload.array("file"), function(req, res) {
  if (req.files != null) res.send("success");
});

module.exports = router;
