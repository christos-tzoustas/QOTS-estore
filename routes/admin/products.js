const express = require('express');
const multer = require('multer');

const productsRepo = require('../../repositories/products');
const productsNewTemplate = require('../../views/admin/products/new');
const productsIndexTemplate = require('../../views/admin/products/index');
const productsEditTemplate = require('../../views/admin/products/edit');
const { validateTitle, validatePrice, validateDescription } = require('./validators');
const { handleErrors, isLoggedIn } = require('./middlewares');
const products = require('../../repositories/products');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.get('/admin/products', isLoggedIn, async (req, res) => {
	const products = await productsRepo.getAll();
	res.send(productsIndexTemplate({ products }));
});

router.get('/admin/products/new', isLoggedIn, (req, res) => {
	res.send(productsNewTemplate({}));
});

router.post(
	'/admin/products/new',
	isLoggedIn,
	upload.single('image'),
	[ validateTitle, validatePrice, validateDescription ],
	handleErrors(productsNewTemplate),
	async (req, res) => {
		const image = req.file ? req.file.buffer.toString('base64') : ' ';

		const { title, description, price } = req.body;
		await productsRepo.create({ title, description, price, image });

		res.redirect('/admin/products');
	}
);

router.get('/admin/products/:id/edit', isLoggedIn, async (req, res) => {
	const product = await productsRepo.getOne(req.params.id);
	if (!product) {
		res.send('product not found');
	}
	res.send(productsEditTemplate({ product }));
});

router.post(
	'/admin/products/:id/edit',
	isLoggedIn,
	upload.single('image'),
	[ validateTitle, validatePrice, validateDescription ],
	handleErrors(productsEditTemplate, async (req) => {
		const product = await productsRepo.getOne(req.params.id);
		return { product };
	}),
	async (req, res) => {
		const changes = req.body;

		if (req.file) {
			changes.image = req.file.buffer.toString('base64');
		}

		try {
			await productsRepo.update(req.params.id, changes);
		} catch (err) {
			res.send(`${err}`);
		}

		res.redirect('/admin/products');
	}
);

router.post('/admin/products/:id/delete', isLoggedIn, async (req, res) => {
	await productsRepo.delete(req.params.id);
	res.redirect('/admin/products');
});

module.exports = router;
