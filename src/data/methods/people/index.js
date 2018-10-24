const Promise = require('bluebird');

const models = require('../../models');
// const obtainInformation = require('./obtainInformation');

const peopleMethods = {};

peopleMethods.addPeople = (info) => {
  console.log('inside adding people');
  return new Promise((resolve, reject) => {
    models.people.create(info)
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
peopleMethods.findById = (people_id) => {
  // console.log('finding by id');
  return new Promise((resolve, reject) => {
    models.people.findAll({
      where:
      { people_id },

    }).then((people) => {
      if (people) {
        resolve(people);
      } else {
        reject(new Error('Not a valid  person id'));
      }
    }).catch((err) => {
      console.log(err);
      reject(err);
    });
  });
};

 peopleMethods.getAllPeople = () => new Promise((resolve,
  reject) => {
  models.people.findAll()
    .then((result) => {
      resolve(result);
    })
    .catch((err) => {
      console.log(err);
      reject(err);
    });
});

 peopleMethods.updatePeople = (info, data) => new Promise((
  resolve, reject,
) => {
  models.people.update(data, {
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



 peopleMethods.deletePeople = info => new Promise((
  resolve,
  reject,
) => {
  models.people.destroy({
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

module.exports =  peopleMethods;