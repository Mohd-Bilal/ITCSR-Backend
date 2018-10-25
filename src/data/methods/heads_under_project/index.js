const Promise = require('bluebird');

const models = require('../../models');
// const obtainInformation = require('./obtainInformation');

const headsUnderProjectMethods = {};

headsUnderProjectMethods.addHeadsUnderProject = (info) => {
  console.log('inside adding heads under project');
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
headsUnderProjectMethods.findById = (head_id) => {
  // console.log('finding by id');
  return new Promise((resolve, reject) => {
    models.heads_under_project.findAll({
      where:
      { head_id },

    }).then((heads) => {
      if (heads) {
        resolve(heads);
      } else {
        reject(new Error('Not a valid head id'));
      }
    }).catch((err) => {
      console.log(err);
      reject(err);
    });
  });
};

headsUnderProjectMethods.getAllheads = () => new Promise((resolve,
  reject) => {
  models.heads.findAll()
    .then((result) => {
      resolve(result);
    })
    .catch((err) => {
      console.log(err);
      reject(err);
    });
});

headsUnderProjectMethods.updateheads = (info, data) => new Promise((
  resolve, reject
) => {
  models.heads.update(data, {
    where: {
      head_id: info.head_id,
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



headsUnderProjectMethods.deleteheads = info => new Promise((
  resolve,reject) => {
  models.heads.destroy({
    where: {
      head_id: info.head_id,

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

module.exports = headsUnderProjectMethods;