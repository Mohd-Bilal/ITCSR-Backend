const Promise = require('bluebird');

const models = require('../../models');
// const obtainInformation = require('./obtainInformation');

const loginCredentialsMethods = {};

loginCredentialsMethods.addLoginCredentials = (info) => {
  console.log('inside adding login credentials');
  return new Promise((resolve, reject) => {
    models.login_credentials.create(info)
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

// findid
loginCredentialsMethods.findById = (people_id) => {
  // console.log('finding by id');
  return new Promise((resolve, reject) => {
    models.login_credentials.findAll({
      where:
      { people_id },

    }).then((logincredentials) => {
      if (logincredentials) {
        resolve(logincredentials);
      } else {
        reject(new Error('Not a valid people id'));
      }
    }).catch((err) => {
      console.log(err);
      reject(err);
    });
  });
};

loginCredentialsMethods.getAllLoginCredentials = () => new Promise((resolve,reject) => {
  models.login_credentials.findAll()
    .then((result) => {
      resolve(result);
    })
    .catch((err) => {
      console.log(err);
      reject(err);
    });
});

loginCredentialsMethods.updateLoginCredentials = (info, data) => new Promise((resolve, reject) => {
  models.login_credentials.update(data, {
    where: {
      people_id: info.people_id,
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



loginCredentialsMethods.deleteLoginCredentials = info => new Promise((resolve,reject) => {
  models.login_credentials.destroy({
    where: {
      people_id: info.people_id,

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

module.exports = loginCredentialsMethods;