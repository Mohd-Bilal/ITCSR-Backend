const Promise = require('bluebird');

const models = require('../../models');
// const obtainInformation = require('./obtainInformation');
const methods = require('../../methods/');
const Sequelize = require('sequelize');

const Op = Sequelize.Op;


const requestMethods = {};


function dictionarification(json){
  var result = {};
  json.forEach(function(row){
    
    result[row.project_id] = row.name;
  });
  // console.log(result);
  return result;
}

requestMethods.addRequest = function(info){
  // const fund;
  // const spent;

  return new Promise(function(resolve,reject){

    methods.headsUnderProject.findById(info.project_id,info.head_id)
    .then(function(result){
      var fund,spent;
      //bad implementation, change!
      // console.log("result is:"+result);
      result.forEach(function(row){
          console.log(row.get('project_id'));
          fund = row.get('fund');
          spent = row.get('spent');
          console.log("fund:"+fund);
          console.log("spent:"+spent)
          if(info.estimated_amount<(fund-spent)){
            console.log("inside if fund ok")
            console.log("resolved");
            return ;
          }
          else{
            console.log("rejected");
            throw new Error("amount larger than allowed value");  
        }
      });

  })
  .then(function(){
    console.log("Inserting into requests");
    models.request.create(info)
    .then((result) => {
      resolve(result);
    })
    .catch((err) => {
      console.log(err);
      reject(err);
    });
  })
  .catch(function(err){
    reject(err);
  });
  });
  

}
// findid
requestMethods.findById = (request_id) => {
  // console.log('finding by id');
  return new Promise((resolve, reject) => {
    models.request.findAll({
      where:
      { request_id },

    }).then((requests) => {
      if (requests) {
        resolve(requests);
      } else {
        reject(new Error('Not a valid request id'));
      }
    }).catch((err) => {
      console.log(err);
      reject(err);
    });
  });
};

requestMethods.getAllRequests = () => new Promise((resolve,reject) => {
  models.request.findAll({raw:true})
    .then((result) => {
      resolve(result);
    })
    .catch((err) => {
      console.log(err);
      reject(err);
    });
});


requestMethods.getAllRequestsUnderPI = (pi_id) => new Promise((resolve,reject) => {
  models.request.findAll({
    where: {
      principal_investigator_id: {
        [Op.or]: pi_id
      }
    },raw:true})
    .then((result) => {
      resolve(result);
    })
    .catch((err) => {
      console.log(err);
      reject(err);
    });
});

requestMethods.approve = (request_id) => new Promise((resolve,reject) => {
  models.request.increment('approval_level',{where:{request_id}})
    .then((result) => {
      console.log("inside then")
      resolve(result);
    })
    .catch((err) => {
      console.log("In error")
      console.log(err);
      reject(err);
    });
});

requestMethods.reject = (request_id) => new Promise((resolve,reject) => {
  models.request.decrement('approval_level',{where:{request_id}})
    .then((result) => {
      console.log("inside then")
      resolve(result);
    })
    .catch((err) => {
      console.log("In error")
      console.log(err);
      reject(err);
    });
});


requestMethods.updateRequest = (info, data) => new Promise((resolve, reject) => {
  models.request.update(data, {
    where: {
      request_id: info.request_id,
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



requestMethods.deleteRequest = info => new Promise((resolve,reject) => {
  models.request.destroy({
    where: {
      request_id: info.request_id,

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

requestMethods.getAllRequestsForDashboard = function(){
  var proposalIDs = [];
  return new Promise((resolve,reject)=>{
    this.getAllRequests()
    .then(function(requests_result){
        // console.log(requests_result)
        requests_result.forEach(function(row){
          proposalIDs.push(row.project_id)   
        });
        
        methods.proposal.getProposalNamesWithIDs(proposalIDs)
        .then(function(project_result){
          console.log("Got project_result");
          project_result = dictionarification(project_result);
          for (let i = 0; i < requests_result.length; i++) {
            requests_result[i]["name"]=project_result[requests_result[i].project_id];
          }
          // console.log(requests_result);
          resolve(requests_result);
        })
        .catch(function(err){
          console.log("ERROR:"+err);
          reject(err);
        });
        
    })
    .catch(function(err){
      reject(err);
    })
  })
}

requestMethods.getAllRequestsUnderPIForDashboard = function(pi_id){
  var proposalIDs = [];
  return new Promise((resolve,reject)=>{
    this.getAllRequests()
    .then(function(requests_result){
        // console.log(requests_result)
        var final_res=[]
        requests_result.forEach(function(row){
          proposalIDs.push(row.project_id)   
        });
        
        methods.proposal.getProposalDataWithIDs(proposalIDs,pi_id)
        .then(function(project_result){
          console.log("Got project_result");
          project_result = dictionarification(project_result);
          for (let i = 0; i < requests_result.length; i++) {
            requests_result[i]["name"]=project_result[requests_result[i].project_id];
            if(project_result[requests_result[i].project_id]!=null){
              console.log(requests_result[i]);
              final_res.push(requests_result[i])
            }
          }
          console.log(requests_result);
          // resolve(requests_result);
          resolve(final_res);
        })
        .catch(function(err){
          console.log("ERROR:"+err);
          reject(err);
        });
        
    })
    .catch(function(err){
      reject(err);
    })
  })
}
module.exports = requestMethods;