const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const models = require("../../models");
const methods = require("../../methods/login_credentials");
const Promise = require("bluebird");
const key = require("../../../config/api.json").API_SECRET;
const { sequelize } = require("../../models");
var authenticationMethods = {};
authenticationMethods.registerUser = function(info) {
  return new Promise(function(resolve, reject) {
    bcrypt.hash(info.password, saltRounds, function(err, hash) {
      return sequelize
        .transaction(function(t) {
          var people = {};
          people.people_id = info.people_id;
          people.name = info.name;
          people.designation = info.designation;
          people.privilege = info.privilege;
          people.date = info.date;
          people.status = info.status;
          return models.people
            .create(people, { transaction: t })
            .then(function(people) {
              var login_credentials = {};
              login_credentials.people_id = info.people_id;
              login_credentials.username = info.username;
              login_credentials.password = hash;
              return models.login_credentials
                .create(login_credentials, {
                  transaction: t
                })
                .then(function(result) {
                  resolve({ success: true });
                })
                .catch(function(err) {
                  reject({ success: false });
                });
            })
            .catch(function(err) {
              reject({ success: false });
            });
        })
        .then(function(result) {
          resolve({ success: true });
        })
        .catch(function(err) {
          reject({ success: false });
        });
    });
  });
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
          bcrypt.compare(password, result.password, function(err, res) {
            if (res === true) {
              console.log("correct password-bcrypt");
              models.people
                .findOne({
                  where: {
                    people_id: result.people_id
                  }
                })
                .then(success => {
                  const token = jwt.sign(
                    {
                      id: result.people_id,
                      privilege: success.privilege,
                      name: success.name
                    },
                    key,
                    { expiresIn: "1h" }
                  );
                  const privilege = success.privilege;
                  const user_id = result.people_id;
                  var decoded = jwt.decode(token, { complete: true });
                  console.log(user_id + " " + privilege);

                  resolve({
                    success: true,
                    token: token,
                    privilege: privilege,
                    user_id: user_id
                  });
                })
                .catch(err => {
                  reject({ error: err });
                });
            } else {
              console.log("wrong password-bcrypt");

              reject({ success: false, token: null });
            }
          });
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
