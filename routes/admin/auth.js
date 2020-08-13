const express = require('express');

const UsersRepo = require('../../repositories/users');
const signupTemplate = require('../../views/admin/auth/signup');
const signinTemplate = require('../../views/admin/auth/signin');
const {
	validateEmail,
	validatePassword,
	validatePasswordConfirmation,
	validateEmailSignIn,
	validatePasswordSignIn
} = require('./validators');
const { handleErrors } = require('./middlewares');

const router = express.Router();

// router.get('/signup', (req, res) => {
// 	res.send(signupTemplate({ req }));
// });

// router.post(
// 	'/signup',
// 	[ validateEmail, validatePassword, validatePasswordConfirmation ],
// 	handleErrors(signupTemplate),
// 	async (req, res) => {
// 		const { email, password } = req.body;

// 		// Save user's details in datastore and assign a random ID to them
// 		const user = await UsersRepo.create({ email, password });

// 		// Figure out a way to send back to the browser a cookie with the the unique user ID
// 		req.session.userId = user.id;

// 		res.redirect('/admin/products');
// 	}
// );

router.get('/signout', (req, res) => {
	req.session = null;
	res.redirect('/signin');
});

router.get('/signin', (req, res) => {
	res.send(signinTemplate({}));
});

router.post(
	'/signin',
	[ validateEmailSignIn, validatePasswordSignIn ],
	handleErrors(signinTemplate),
	async (req, res) => {
		const { email } = req.body;

		const user = await UsersRepo.getOneBy({ email });

		req.session.userId = user.id;

		res.redirect('/admin/products');
	}
);

module.exports = router;
