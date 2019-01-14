const Promise = require('bluebird');

const models = require('../../models');
// const obtainInformation = require('./obtainInformation');
const Sequelize = require('sequelize')
const Op = Sequelize.Op
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

proposalMethods.getAllProjectsUnderPI = (PI_ID) => new Promise((resolve,reject) => {
  models.proposal.findAll({
    where :{
      principal_investigator_id:PI_ID
    }
  })
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

proposalMethods.getProposalNamesWithIDs = function (project_ids) {
  return new Promise((resolve, reject) => {
    models.proposal
      .findAll(
        {
        raw:true,
        attributes: ['project_id', 'name'],
        where: {
          project_id: {
            [Op.or]: project_ids
          }
        }
      })
      .then(function (result) {
        
        if (result.length === 0) reject(new Error());
        else resolve(result);
      })
      .catch(function (err) {
        reject(err);
      });
  });
}

proposalMethods.getProposalDataWithIDs = function (project_ids,pi_id) {
  return new Promise((resolve, reject) => {
    models.proposal
      .findAll(
        {
        raw:true,
        attributes: ['project_id', 'name'],
        where: {
          project_id: {
            [Op.or]: project_ids
          },
          principal_investigator_id:pi_id
        }
      })
      .then(function (result) {
        
        if (result.length === 0) reject(new Error());
        else resolve(result);
      })
      .catch(function (err) {
        reject(err);
      });
  });
}
module.exports = proposalMethods