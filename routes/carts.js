const express = require('express');
const cartsRepo = require('../repositories/carts');
const productsRepo = require('../repositories/products');
const ordersRepo = require('../repositories/orders');
const products = require('../repositories/products');

const router = express.Router();

router.post('/cart/products', async (req, res) => {
	
	let cart;
	if (!req.session.cartId) {
		cart = await cartsRepo.create({ products: [] });
		req.session.cartId = cart.id;
	} else {
		cart = await cartsRepo.getOne(req.session.cartId);
	}

	//check to see if an item im trying to add already exists
	//if it does increment quantity
	const existingProduct = cart.products.find((product) => {
		return req.body.id === product.id && req.body.size === product.size && req.body.color === product.color;
	});

	if (existingProduct) {
		existingProduct.quantity++;
	} else {
		//if it doesnt, add it to the products of specific cart
		cart.products.push({
			...req.body,
			quantity: 1
		});
	}
	await cartsRepo.update(cart.id, { products: cart.products });

	res.redirect('/cart');
});

router.post('/cart/products/edit-quantity/', async (req, res) => {
	const cart = await cartsRepo.getOne(req.session.cartId);

	const foundProduct = cart.products.find((product) => {
		return req.body.id === product.id && req.body.size === product.size && req.body.color === product.color;
	});

	if (req.body.increment === 'plus') {
		foundProduct.quantity = parseInt(req.body.quantity) + 1;
	} else if (req.body.increment === 'minus') {
		foundProduct.quantity = parseInt(req.body.quantity) + -1;
		if (foundProduct.quantity <= 0) {
			const products = cart.products.filter((product) => {
				return !(
					req.body.id === product.id &&
					req.body.size === product.size &&
					req.body.color === product.color
				);
			});
			cart.products = products;
		}
	} else {
		console.log('Something went wrong!');
	}

	await cartsRepo.update(cart.id, { products: cart.products });

	res.redirect('/cart');
});

router.get('/cart', async (req, res) => {
	let cart = await cartsRepo.getOne(req.session.cartId);
	
	const counterId = 1;
	const counter = await ordersRepo.getOne(counterId);
	if (cart) {
		for (product of cart.products) {
			const productDetails = await productsRepo.getOne(product.id);
			product.productDetails = productDetails;
		}
	} else {
		cart = {};
		cart.products = [];
	}

	res.render('carts/show', { cart, products: cart.products, page: 'cart', counter });
});

router.post('/cart/products/delete', async (req, res) => {
	const cart = await cartsRepo.getOne(req.session.cartId);

	const products = cart.products.filter((product) => {
		return !(req.body.id === product.id && req.body.size === product.size && req.body.color === product.color);
	});

	await cartsRepo.update(req.session.cartId, { products });

	res.redirect('/cart');
});

module.exports = router;
