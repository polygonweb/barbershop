var util = require('gulp-util');

module.exports = function(error) {
	util.log([
		(error.name + ' in ' + error.plugin).bold.red,
		'',
		error.message,
		''
	].join('\n'));

	this.end();
};