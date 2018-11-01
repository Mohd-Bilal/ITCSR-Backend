const methods = {};

methods.proposal = require('./proposal');
methods.people = require('./people');
//methods.headsUnderProject = require('./heads_under_project');
// methods.heads = require('./heads');
// methods.loginCredentials = require('./login_credentials');
// methods.people = require('./people');
methods.headsUnderProject = require('./heads_under_project');
methods.loginCredentials = require('./login_credentials')
methods.heads = require('./heads');
// methods.loginCreden
// tials = require('./login_credentials');
// methods.people = require('./people');
// methods.purchaseUnderProject = require('./purchase_under_project');
methods.request = require('./request');
// methods.stocks = require('./stocks');

module.exports = methods;

