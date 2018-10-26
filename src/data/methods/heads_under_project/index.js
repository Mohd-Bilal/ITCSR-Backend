const Promise = require('bluebird');

const models = require('../../models');
// const obtainInformation = require('./obtainInformation');

const headsUnderProjectMethods = {};

<<<<<<< HEAD
headsUnderProjectMethods.addNewExpense = (info) => {
  console.log('inside adding people');
  return new Promise((resolve, reject) => {
    models.people.create(info)
=======
headsUnderProjectMethods.addHeadsUnderProject = (info) => {
  console.log('inside adding heads under project');
  return new Promise((resolve, reject) => {
    models.heads_under_project.create(info)
>>>>>>> 2c46848d059cb415e24a84fdf0fb16ec41183fbc
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
<<<<<<< HEAD
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
=======
headsUnderProjectMethods.findById = (head_id) => {
  return new Promise((resolve, reject) => {
    models.heads_under_project.findAll({
      where:
      { head_id },

    }).then((heads) => {
      if (heads) {
        resolve(heads);
      } else {
        reject(new Error('Not a valid head id'));
>>>>>>> 2c46848d059cb415e24a84fdf0fb16ec41183fbc
      }
    }).catch((err) => {
      console.log(err);
      reject(err);
    });
  });
};

<<<<<<< HEAD
 peopleMethods.getAllPeople = () => new Promise((resolve,
  reject) => {
  models.people.findAll()
=======
headsUnderProjectMethods.getAllheads = () => new Promise((resolve,
  reject) => {
  models.heads.findAll()
>>>>>>> 2c46848d059cb415e24a84fdf0fb16ec41183fbc
    .then((result) => {
      resolve(result);
    })
    .catch((err) => {
      console.log(err);
      reject(err);
    });
});

<<<<<<< HEAD
 peopleMethods.updatePeople = (info, data) => new Promise((
  resolve, reject,
) => {
  models.people.update(data, {
    where: {
      people_id: info.people_id,
=======
headsUnderProjectMethods.updateheads = (info, data) => new Promise((
  resolve, reject
) => {
  models.heads.update(data, {
    where: {
      head_id: info.head_id,
>>>>>>> 2c46848d059cb415e24a84fdf0fb16ec41183fbc
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



<<<<<<< HEAD
 peopleMethods.deletePeople = info => new Promise((
  resolve,
  reject,
) => {
  models.people.destroy({
    where: {
      people_id: info.people_id,
=======
headsUnderProjectMethods.deleteheads = info => new Promise((
  resolve,reject) => {
  models.heads.destroy({
    where: {
      head_id: info.head_id,
>>>>>>> 2c46848d059cb415e24a84fdf0fb16ec41183fbc

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

<<<<<<< HEAD
module.exports =  peopleMethods;
=======
module.exports = headsUnderProjectMethods;
>>>>>>> 2c46848d059cb415e24a84fdf0fb16ec41183fbc
