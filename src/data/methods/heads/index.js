const Promise = require('bluebird');

const models = require('../../models');
// const obtainInformation = require('./obtainInformation');
const Sequelize = require('sequelize');
var { sequelize } = models;

const headsMethods = {};
const Op = Sequelize.Op;

headsMethods.addHeads = (info) => {
  console.log('inside adding heads');
  return new Promise((resolve, reject) => {
    models.heads.create(info)
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};


headsMethods.addHeadsWithParameters = (head_info, parameter_info) => {
  console.log('inside adding heads');

  return new Promise((resolve, reject) => {
    sequelize.transaction(function (t) {

      return models.heads.create(head_info,{transaction:t})
        .then(function (result) {
          var head_id = result.get("head_id");
          console.log("created HEAD id:"+head_id);
          // console.log();
          for (let i = 0; i < parameter_info.length; i++) {
            parameter_info[i]["head_id"]=head_id;
          }
          return models.parameters_under_heads.bulkCreate(parameter_info,{transaction:t})
            .then((result) => {
              console.log("created parameters under HEAD");
              return result;
              // resolve(result);
            });

          
        });
    })
    .then(function (result) {
      console.log("transaction done");
      resolve(result);
    })
      .catch(function (err) {
        console.log("transaction failed");
        reject(err);
      });
  });

};

// findid
headsMethods.findById = (head_id) => {
  // console.log('finding by id');
  return new Promise((resolve, reject) => {
    models.heads.findAll({
      where:
        { head_id },

    }).then((headss) => {
      if (headss) {
        resolve(headss);
      } else {
        reject(new Error('Not a valid head id'));
      }
    }).catch((err) => {
      console.log(err);
      reject(err);
    });
  });
};

headsMethods.getMultipleHeads = (head_ids) => new Promise((resolve, reject) => {
  models.heads.findAll({
    where: {
      head_id: {
        [Op.or]: head_ids
      }
    },

  }).then((head_info) => {
    if (head_info) {
      resolve(head_info);
    } else {
      reject(new Error('Not a valid head id'));
    }
  }).catch((err) => {
    console.log(err);
    reject(err);
  });
}
)

headsMethods.getAllHeads = () => new Promise((resolve, reject) => {
  models.heads.findAll()
    .then((result) => {
      resolve(result);
    })
    .catch((err) => {
      console.log(err);
      reject(err);
    });
});

headsMethods.updateHeads = (info, data) => new Promise((resolve, reject) => {
  models.heads.update(data, {
    where: {
      head_id: info
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



headsMethods.deleteHeads = info => new Promise((resolve, reject) => {
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

module.exports = headsMethods;