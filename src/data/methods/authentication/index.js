const bcrypt = require('bcrypt')
const saltRounds = 10;
const jwt = require('jsonwebtoken')
const userCredentials = require('../../models/login_credentials')
const Promise = require('bluebird')
const key = require('')
var authenticationMethods = {}

authenticationMethods.authenticateUser = function (username,password) {
    return new Promise(function(resolve,reject){
    userCredentials.findOne({
        where:{
            username : username
        }
    }).then((result) => {
        if(result.length > 0){
            if(bcrypt.compareSync(password,result.password)){
                const token = jwt.sign({userId:result.people_id},)
                resolve("authenticated")
            }else{
                reject("Invalid username/password")
            }
        }
        else{
            reject(new Error())
        }
    }).catch((err) => {
        reject(err)
    });

    })
}

module.exports = authenticationMethods