const Promise = require('bluebird');

const models = require('../../models');
// const obtainInformation = require('./obtainInformation');

const headsMethods = {};

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
headsMethods.getHeadNames =(head_ids)=> new Promise((resolve,reject)=>{
  head_ids.forEach(element => {
    var head = headsMethods.findById(element);
    console.log(head);
  });
  }).then(function(res){
    console.log(res);
  })
  .catch(function(err){
    console.log(err);
  });
  

headsMethods.getAllHeads = () => new Promise((resolve,reject) => {
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



headsMethods.deleteHeads = info => new Promise((resolve,reject) => {
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