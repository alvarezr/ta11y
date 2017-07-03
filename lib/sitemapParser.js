/**
 * This a dependency library for Tally
 * Filter Url
 */
const config = require('lodash/defaultsDeep'); 
// Just an emtpy function
var bunker = function bunker() {};

// The default configuration object. 
module.exports.config = {
	concurrency: 2,
	log: {
		error: bunker,
		info: bunker
	},
	wrapWidth: 80
};

module.exports = siteMapParser;

function siteMapParser(url, options) {
    options = config({}, options, module.exports.defaults);

    const log = options.log;
    console.log(options);
}
