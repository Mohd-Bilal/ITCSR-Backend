const Promise = require('bluebird');

const models = require('../../models');
// const obtainInformation = require('./obtainInformation');

const purchaseUnderProjectMethods = {};

purchaseUnderProjectMethods.addPurchaseUnderProject = (info) => {
  console.log('inside adding purchase under project');
  return new Promise((resolve, reject) => {
    models.purchase_under_project.create(info)
      .then((result) => {
        resolve(result);

      }).catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

// findid
purchaseUnderProjectMethods.findById = (order_no) => {
  // console.log('finding by id');
  return new Promise((resolve, reject) => {
    models.purchase_under_project.findAll({
      where:
      { order_no },

    }).then((result) => {
      if (result) {
        resolve( result);
      } else {
        reject(new Error('Not a valid order no'));
      }
    }).catch((err) => {
      console.log(err);
      reject(err);
    });
  });
};

 purchaseUnderProjectMethods.getAllPurchaseUnderProject = () => new Promise((resolve,reject) => {
  models.purchase_under_project.findAll()
    .then((result) => {
      resolve(result);
    })
    .catch((err) => {
      console.log(err);
      reject(err);
    });
});

 purchaseUnderProjectMethods.updatePurchaseUnderProject= (info, data) => new Promise((resolve, reject) => {
  models.purchase_under_project.update(data, {
    where: {
      order_no: info.order_no,
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



 purchaseUnderProjectMethods.deletePurchaseUnderProject = info => new Promise((resolve,reject) => {
  models.purchase_under_project.destroy({
    where: {
      order_no: info.order_no,

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

module.exports =  purchaseUnderProjectMethods;