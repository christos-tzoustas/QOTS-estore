module.exports = {
	passValue(value) {
		return 'JSON.parse(Base64.decode("' + new Buffer(JSON.stringify(value)).toString('base64') + '"))';
	}
};
