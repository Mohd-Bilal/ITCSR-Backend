const Promise = require('bluebird');
var heads = require('./heads');
const models = require('../models');

var Sequelize = require('sequelize');

var {sequelize} = models;
var proposal = require('./proposal');
var people = require('./people');
var request = require('./request');
var headsUnderProject = require('./heads_under_project');
var purchaseUnderProject = require('./purchase_under_project');
var parametersUnderHead = require('./parameters_under_heads')

// var fs = require('fs');
 


//TEST

// CREATE
// return sequelize.transaction(function(t){
  
//   return proposal.addProposals({
//   project_id:3,
//   file_no:"./",
//   name:"manga",
//   data:{},
//   start_date:"2201-12-18",
//   duration:1000
// },t).then(function(result){
//   return result;
// });
// }).then(function(result){
//   console.log("transaction kazhinj");
// })
// .catch(function(err){
//   console.log("transaction moonj");

// });
  // proposal.getAllProjectsUnderPI(1)
  // .then(function(result){
  //   console.log(result);
  // })
  // .catch(function(result){
  //   console.log(result);
  // })

// proposal.addProposals({
//   project_id:1,
//   file_no:"./",
//   name:"manga",
//   data:{},
//   start_date:"2201-12-18",
//   duration:1000

// }).then(function(result){
//   console.log(result);
// });

// proposal.updateProposal({
// 	project_id:3,
//   file_no:"./",
//   name:"manga",
//   data:{},
//   start_date:"2201-12-18",
//   duration:1000
// },
// {
// 	project_id:3,
//   file_no:"blah",
//   name:"mazznga",
//   data:{},
//   start_date:"2201-12-18",
//   duration:1000

// }).then(function(result){
// 	console.log(result);
// });

//FIND BY ID
// proposal.findById(3).then(function(result){
// console.log(result);
// });

//GET ALL
// proposal.getAllProposals().then(function(result){
//   result.forEach(function(row){
//     console.log(row.get('project_id'));
//   });
// });
//DELETE
// proposal.deleteProposal({project_id:1}).then(function(result){
// console.log(result);
// });

//TEST

//CREATE
// heads.addHeads({
//   // head_id:1,
//   name:"travel",
//   remark:{"a":"b", "c":"d"}

// }).then(function(result){
//   console.log(result);
// });

// //FIND BY ID
// heads.getMultipleHeads([1]).then(function(result){
// // console.log(result);
// result.forEach(function(row){
//   console.log(row.get('name'));
// });
// })
// .catch(re=>{
//   console.log(re);
//   console.log("evidem")
// });

// //GET ALL
// heads.getAllHeads().then(function(result){
  // result.forEach(function(row){
  //   console.log(row.get('head_id'));
  // });
// });
  // headsUnderProject.getAllHeadsUnderProject(1).then(function(result){
  //   console.log(result);
  // })
  // .catch(function(err){
  //   console.log(result);
  // })
// headsUnderProject.updateSpent(1,1,20).then(function(result){
//   console.log(result)
// });
// heads.deleteHeads({head_id:0}).then(function(result){
// console.log(result);
// }).catch(function(result){
// 	console.log("Nothing to delete")
// });
// PEOPLE TEST

// people.addPeople({
//   people_id:3,
//   name:"aashaan",
//   designation:"principal_investigator",
//   privilege:2,
//   date:"2018-03-03",
//   status:1
// }).then(function(result){
//   console.log(result.get('name'))
// });

// people.findById(1).then(function(result){
//   console.log(result);
// });

// people.getAllPeople().then(function(result){
//   console.log(result);
// });

// people.findById(1).then(function(result){
//   console.log(result);
// });

//DELETE
// people.deletePeople({people_id:1}).then(function(result){
// console.log(result);
// });

//CREATE
// request.addRequest({
//     request_id:60,
//     project_id : 1,
//     head_id:1,
//     description: "First request is being submitted",
//     date: "2018-02-11",
//     approval_level: 0,
//     estimated_amount : 10.00,
//     remark: {}
//   }).then(function(result){
//     console.log(result);
//   })
//   .catch(function(err){
//     console.log("fund exceeded");
//   });
  
  // //FIND BY ID
  // request.findById(1).then(function(result){
  // console.log(result);
  // });
  
//   GET ALL
//   request.getAllRequests().then(function(result){
//     result.forEach(function(row){
//       console.log(row.get('request_id'));
//     });
//   });
//    DELETE
//   request.deleteRequest({request_id:0}).then(function(result){
//   console.log(result);
//   });
//   //UPDATE REQUEST
//   request.updateRequest({request_id:0,
//     project_id : 1,
//     description: "First request is being submitted",
//     date: "2018-02-11",
//     approval_level: 0,
//     estimated_amount : 1200.00,
//     remark: {}},
//     {request_id:0,
//     project_id : 1,
//     description: "First request is being submitted",
//     date: "2018-02-11",
//     approval_level: 2,
//     estimated_amount : 1200.00,
//     remark: {}}).then(function(result){
//   console.log(result);
//   });
  
  // headsUnderProject.addNewHeadUnderProject({
  //     project_id:1,
  //     head_id:1,
  //     fund:200,
  //     spent:0
  // }).then(function(result){
  //     console.log(result);
  // });     
  
//   FIND BY ID
//   headsUnderProject.findById(1,1).then(function(result){
//   console.log(result);
//   });


  // ADD PURCHASE UNDER PROJECT
//   purchaseUnderProject.addPurchaseUnderProject({
//     order_no:1,
//     project_id:1,
//     head_id:1,
//     data:{},
//     price:100,
//     date_of_purchase:"2201-12-18",
//     count:1
//   }).then(function(result){
//     console.log(result);
//   });

  //FIND BY ID
//   purchaseUnderProject.findById(1).then(function(result){
//   console.log(result);
//   });

//  // GET ALL
//   purchaseUnderProject.getAllPurchaseUnderProject().then(function(result){
//     result.forEach(function(row){
//       console.log(row.get('order_no'));
//     });
//   });

//UPDATE PURCHASE UNDER PROJECT
// purchaseUnderProject.updatePurchaseUnderProject({
//     order_no:1,
//     project_id:1,
//     head_id:1,
//     data:{},
//     price:100,
//     date_of_purchase:"2201-12-18",
//     count:1
//     },
//     {order_no:1,
//         project_id:1,
//         head_id:1,
//         data:{},
//         price:150,
//         date_of_purchase:"2201-12-18",
//         count:1
//     }).then(function(result){
//   console.log(result);
//   });

  //DELETE
//   purchaseUnderProject.deletePurchaseUnderProject({order_no:1}).then(function(result){
//   console.log(result);
//   });


//CREATE MULTIPLE
// var info=[]
// var head={};
// var head2={}
// head.head_id=2;
// head.parameter_id=11;
// head.parameter_name="kas"
// info.push(head);
// head2.head_id=1;
// head2.parameter_id=91;
// head2.parameter_name="as"
// info.push(head2)
// parametersUnderHead.bulkCreate(info)
// .then(res=>{
//   console.log(res);
// })
// .catch(err=>{
//   console.log(err);
// })