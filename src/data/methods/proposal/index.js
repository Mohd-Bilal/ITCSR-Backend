const Promise = require('bluebird');

const models = require('../../models');
// const obtainInformation = require('./obtainInformation');

const proposalMethods = {};

proposalMethods.addProposals = (info,t) => {
  return new Promise((resolve, reject) => {
    models.proposal.create(info,{transaction:t})
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
proposalMethods.findById = (project_id) => {
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

proposalMethods.getAllProposals = () => new Promise((resolve,reject) => {
  models.proposal.findAll()
    .then((result) => {
      resolve(result);
    })
    .catch((err) => {
      console.log(err);
      reject(err);
    });
});



proposalMethods.updateProposal = (info, data) => new Promise((resolve, reject) => {

  models.proposal.update(data, {
    where: {
      project_id: info,
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



proposalMethods.deleteProposal = info => new Promise((resolve,reject) => {
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

module.exports = proposalMethods