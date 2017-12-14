var _ = require('lodash');

// remove special charactes and spaces 
function _prepareString(str) {
	return str.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\//\s/]/gi, ' ').toLowerCase();
}

function uniq(str) {
	var words = _prepareString(str).split(' ');
	return _.chain(words)
		.uniq()
		.filter(function(w) {
			return w.length > 2;
		})
		.value();
}

module.exports = {
	uniq: uniq
}