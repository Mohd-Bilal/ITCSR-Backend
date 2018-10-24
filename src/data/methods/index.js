const methods = {};

methods.proposal = require('./proposal');
// methods.people = require('./people');
// methods.headsUnderProject = require('./heads_under_project');
// methods.heads = require('./heads');
// methods.loginCreden
// tials = require('./login_credentials');
// methods.people = require('./people');
// methods.purchaseUnderProject = require('./purchase_under_project');
// methods.request = require('./request');
// methods.stocks = require('./stocks');

module.exports = methods;

var proposal = require('./proposal');


//TEST
 
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

// proposal.findById(3).then(function(result){
// console.log(result);
// });

proposal.getAllProposals().then(function(result){
  console.log(JSON.parse(result[0].dataValues));
});