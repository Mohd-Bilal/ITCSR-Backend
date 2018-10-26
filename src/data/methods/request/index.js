const Promise = require('bluebird');

const models = require('../../models');
// const obtainInformation = require('./obtainInformation');
const methods = require('../../methods/heads_under_project')

const requestMethods = {};

requestMethods.addRequest = function(info){
  return new Promise(function(resolve,reject){
    methods.findById(info.head_id)
    .then(function(result){
      console.log(result);
  }).catch(function(err){
    reject(err);
  });
  });
  

}
// findid
requestMethods.findById = (request_id) => {
  // console.log('finding by id');
  return new Promise((resolve, reject) => {
    models.request.findAll({
      where:
      { request_id },

    }).then((requests) => {
      if (requests) {
        resolve(requests);
      } else {
        reject(new Error('Not a valid request id'));
      }
    }).catch((err) => {
      console.log(err);
      reject(err);
    });
  });
};

requestMethods.getAllRequests = () => new Promise((resolve,reject) => {
  models.request.findAll()
    .then((result) => {
      resolve(result);
    })
    .catch((err) => {
      console.log(err);
      reject(err);
    });
});

requestMethods.updateRequest = (info, data) => new Promise((resolve, reject) => {
  models.request.update(data, {
    where: {
      request_id: info.request_id,
    },
  })
    .then((updated) => {
      if (updated > 0) {
        resolve(updated);
      } else {
        reject(new Error());
        // throw ('err')
      }
    }).catch((error) => {
      reject(error);
    });
});



requestMethods.deleteRequest = info => new Promise((resolve,reject) => {
  models.request.destroy({
    where: {
      request_id: info.request_id,

    },
  }).then((deleted) => {
    if (deleted === 0) {
      console.log('error deleted 0');
      reject(new Error());
    } else {
      resolve(deleted);
    }
  }).catch((err) => {
    reject(err);
  });
});

module.exports = requestMethods;