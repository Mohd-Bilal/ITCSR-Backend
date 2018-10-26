const Promise = require('bluebird');

const models = require('../../models');
// const obtainInformation = require('./obtainInformation');

const headsUnderProjectMethods = {};

headsUnderProjectMethods.addNewHeadUnderProject = (info) => {
  console.log('inside adding head under project');
  return new Promise((resolve, reject) => {
    models.heads_under_project.create(info)
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
headsUnderProjectMethods.findById = (project_id,head_id) => {
  // console.log('finding by id');
  return new Promise((resolve, reject) => {
    models.heads_under_project.findAll({
      where:
      { project_id,
        head_id
      },

    }).then((result) => {
      if (result) {
        resolve(result);
      } else {
        reject(new Error('Not a valid  id'));
      }
    }).catch((err) => {
      console.log(err);
      reject(err);
    });
  });
};

 headsUnderProjectMethods.getAllHeadsUnderProject= () => new Promise((resolve,
  reject) => {
  models.heads_under_project.findAll()
    .then((result) => {
      resolve(result);
    })
    .catch((err) => {
      console.log(err);
      reject(err);
    });
});

 headsUnderProjectMethods.updateHeadsUnderProject = (info, data) => new Promise((
  resolve, reject
) => {
  models.heads_under_project.update(data, {
    where: {
      project_id: info.project_id,
      head_id: info.head_id
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



 headsUnderProjectMethods.deleteHeadsUnderProject = info => new Promise((resolve,reject) => {
  models.heads_under_project.destroy({
    where: {
      head_id: info.head_id,
      project_id: info.project_id

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

module.exports =  headsUnderProjectMethods;