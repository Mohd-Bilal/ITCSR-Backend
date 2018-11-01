const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const models = require("../../models");
const methods = require('../../methods/login_credentials')
const Promise = require("bluebird");
const key = require("../../../config/api.json").API_SECRET;
var authenticationMethods = {};
authenticationMethods.registerUser = function(info) {
  
  return new Promise(function(resolve, reject) {
      console.log(methods)
      bcrypt.hash(info.password,saltRounds,function(err,hash){
        info.password = hash
        methods.addLoginCredentials(info).then(function(result){
          resolve({"success":true,"status":result})
      }).catch(function(err){
          reject({"success":false,"status":err})
      })
      })
      
  })
};
authenticationMethods.authenticateUser = function(username, password) {
  return new Promise(function(resolve, reject) {
    models.login_credentials
      .findOne({
        where: {
          username: username
        }
      })
      .then(result => {
        if (result) {
          bcrypt.compare(password,result.password,function(err,res){
            if(res === true){
              console.log("correct password-bcrypt");
              const token = jwt.sign({id:result.user_id},key,{ expiresIn: '1h' })
              resolve({"success":true,"token":token})
            }else{
              console.log("wrong password-bcrypt");
              
              reject({"success":false,"token":null})
            }
          })
        } else {
          
          reject(new Error());
        }
      })
      .catch(err => {
        reject(err);
      });
  });
};

module.exports = authenticationMethods;
