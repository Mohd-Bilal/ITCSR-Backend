const methods = {};

methods.proposal = require('./proposal');
// methods.people = require('./people');
// methods.headsUnderProject = require('./heads_under_project');
methods.heads = require('./heads');
// methods.loginCreden
// tials = require('./login_credentials');
// methods.people = require('./people');
// methods.purchaseUnderProject = require('./purchase_under_project');
// methods.request = require('./request');
// methods.stocks = require('./stocks');

module.exports = methods;

//var proposal = require('./proposal');
var heads = require('./heads');


//TEST

//CREATE
// proposal.addProposals({
//   project_id:3,
//   file_no:"./",
//   name:"manga",
//   data:{},
//   start_date:"2201-12-18",
//   duration:1000

// }).then(function(result){
//   console.log(result);
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

// proposal.deleteProposal({project_id:1}).then(function(result){
// console.log(result);
// });

//TEST

//CREATE
// heads.addHeads({
//   head_id:0,
//   name:"machinery",
//   remark:{"a":"b", "c":"d"}

// }).then(function(result){
//   console.log(result);
// });

// //FIND BY ID
// heads.findById(1).then(function(result){
// console.log(result);
// });

// //GET ALL
// heads.getAllHeads().then(function(result){
//   result.forEach(function(row){
//     console.log(row.get('head_id'));
//   });
// });

heads.deleteHeads({head_id:0}).then(function(result){
console.log(result);
}).catch(function(result){
	console.log("Nothing to delete")
});