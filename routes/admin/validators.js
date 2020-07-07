const { check } = require('express-validator');
const UsersRepo = require('../../repositories/users');

module.exports = {
	validateTitle: check('title')
		.trim()
		.isLength({ min: 4, max: 30 })
		.withMessage('Title must be between 4 and 20 characters'),
	validateDescription: check('description')
		.trim()
		.isLength({ min: 4, max: 50 })
		.withMessage('Description must be between 4 and 50 characters'),
	validatePrice: check('price')
		.trim()
		.toFloat()
		.isFloat({ min: 1 })
		.withMessage('Price must be a number with value of at least 1'),
	validateEmail: check('email', 'Value entered must be a valid email')
		.trim()
		.normalizeEmail()
		.isEmail()
		.custom(async (email) => {
			const existingUser = await UsersRepo.getOneBy({ email });

			if (existingUser) {
				throw new Error('Email in use');
			}
		}),
	validatePassword: check('password')
		.trim()
		.isLength({ min: 4, max: 20 })
		.withMessage('Value entered must be between 4 and 20 characters'),
	validatePasswordConfirmation: check('passwordConfirmation')
		.trim()
		.isLength({ min: 4, max: 20 })
		.withMessage('Value entered must be between 4 and 20 characters')
		.custom((passwordConfirmation, { req }) => {
			if (req.body.password !== passwordConfirmation) {
				throw new Error('Passwords must match');
			}
			return true;
		}),
	validateEmailSignIn: check('email')
		.trim()
		.normalizeEmail()
		.isEmail()
		.withMessage('Must be a valid email')
		.custom(async (email) => {
			const user = await UsersRepo.getOneBy({ email });

			if (!user) {
				throw new Error('Email not found');
			}
		}),
	validatePasswordSignIn: check('password').trim().custom(async (password, { req }) => {
		const user = await UsersRepo.getOneBy({ email: req.body.email });
		if (!user) {
			throw new Error('Invalid Password');
		}

		const isPasswordValid = await UsersRepo.comparePasswords(user.password, password);

		if (!isPasswordValid) {
			throw new Error('Invalid Password');
		}
	})
};
