const express = require("express");
const router = express.Router();
const methods = require("../../data/methods/authentication");
const bcrypt = require("bcrypt");
router.get("/", function(req, res) {
  res.json({ Status: "Sucess" });
});
router.post("/register", function(req, res) {
  methods
    .registerUser(req.body.info)
    .then(function(result) {
      if (result.success === true)
        res.json({
          success: true,
          status: result.status
        });
      else
        res.json({
          success: false,
          status: result.status
        });
    })
    .catch(function(err) {
      res.json({
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
      if (result.success === true) {
        // req.session.accessToken = result.token;
        res.json({
          "success": true,
          "token":result.token
        });
      } else {
        res.json({
          "success": false,
          "token":null

        });
      }
    })
    .catch(function(err) {
      res.json({
        "success": false,
        "error":err
      });
    });
});

module.exports = router;
