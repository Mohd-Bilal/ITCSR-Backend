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
headsUnderProjectMethods.findById = (project_id) => {
  // console.log('finding by id');
  return new Promise((resolve, reject) => {
    models.proposal.findAll({
      where:
      { project_id },

    }).then((proposals) => {
      if (proposals) {
        resolve(proposals);
      } else {
        reject(new Error('Not a valid proposal id'));
      }
    }).catch((err) => {
      console.log(err);
      reject(err);
    });
  });
};

headsUnderProjectMethods.getAllProposals = () => new Promise((resolve,
  reject) => {
  models.proposal.findAll()
    .then((result) => {
      resolve(result);
    })
    .catch((err) => {
      console.log(err);
      reject(err);
    });
});

headsUnderProjectMethods.updateProposal = (info, data) => new Promise((
  resolve, reject,
) => {
  models.proposal.update(data, {
    where: {
      project_id: info.project_id,
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



headsUnderProjectMethods.deleteProposal = info => new Promise((
  resolve,
  reject,
) => {
  models.proposal.destroy({
    where: {
      project_id: info.project_id,

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