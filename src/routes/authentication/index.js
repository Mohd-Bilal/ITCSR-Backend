const express = require("express");
const router = express.Router();
const methods = require("../../data/methods/authentication");
const bcrypt = require("bcrypt");
// router.get("/", function(req, res) {
//   res.json({ Status: "Sucess" });
// });
router.post("/register", function(req, res) {
  methods
    .registerUser(req.body)
    .then(function(result) {
      console.log("registration started result:"+result);
      if (result.success === true)
        return res.json({
          success: true,
          status: result.status
        });
      else
        return res.json({
          success: false,
          status: result.status
        });
    })
    .catch(function(err) {
      return res.json({
        success: false,
        status: err
      });
    });
});

router.post("/login", function(req, res) {
  const username = req.body.username;
  const password = req.body.password;
  methods
    .authenticateUser(username, password)
    .then(function(result) {
      console.log(result.success);
      if (result.success === true) {
        console.log("received token ")
        // console.log(req.session);
        return res.json({
          "success": true,
          "token":result.token
        });
      } else {
        return res.json({
          "success": false,
          "err":"authenticateUser method returned false"
        });
      }
    })
    .catch(function(err) {
      return res.json({
        "success": false,
        "error":err
      });
    });
});

module.exports = router;
