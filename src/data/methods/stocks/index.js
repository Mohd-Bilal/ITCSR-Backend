const Promise = require('bluebird');

const models = require('../../models');
// const obtainInformation = require('./obtainInformation');

const stocksMethods = {};

stocksMethods.addStocks = (info) => {
  console.log('inside adding stocks');
  return new Promise((resolve, reject) => {
    models.stocks.create(info)
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
stocksMethods.findById = (stock_id) => {
  // console.log('finding by id');
  return new Promise((resolve, reject) => {
    models.stocks.findAll({
      where:
      { stock_id },

    }).then((stocks) => {
      if (stocks) {
        resolve( stocks);
      } else {
        reject(new Error('Not a valid  stock'));
      }
    }).catch((err) => {
      console.log(err);
      reject(err);
    });
  });
};


 stocksMethods.getAllStocks = () => new Promise((resolve,
  reject) => {
  models.stocks.findAll()
    .then((result) => {
      resolve(result);
    })
    .catch((err) => {
      console.log(err);
      reject(err);
    });
});

 stocksMethods.updateStock = (info, data) => new Promise((
  resolve, reject,
) => {
  models.stocks.update(data, {
    where: {
      stock_id: info.stock_id,
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


 stocksMethods.deleteStock = info => new Promise((
  resolve,
  reject,
) => {
  models.stocks.destroy({
    where: {
      stock_id: info.stock_id,

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

module.exports =  stocksMethods;