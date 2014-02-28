var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
	project['grid'] = false;
  	res.render('index', projects);
};

exports.viewGrid = function(req, res){
	project['grid'] = true;
  	res.render('index', projects);
};