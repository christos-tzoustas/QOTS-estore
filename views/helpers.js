const carts = require('../repositories/carts');

module.exports = {
	getError(errors, prop) {
		if (!errors) {
			return '';
		} else if (!errors.mapped()[prop]) {
			return '';
		} else {
			return errors.mapped()[prop].msg;
		}
	}
};
