const express = require('express');
const cartsRepo = require('../repositories/carts');
const productsRepo = require('../repositories/products');
const helpers = require('./helpers');
const ordersRepo = require('../repositories/orders');

const router = express.Router();

router.get('/checkout', async (req, res) => {
	if (!req.session.cartId) {
		res.redirect('/');
	} else {
		const cart = await cartsRepo.getOne(req.session.cartId);
		const paypalItems = [];
		if (!cart.products.length) {
			res.redirect('/');
		} else {
			for (product of cart.products) {
				const productDetails = await productsRepo.getOne(product.id);
				product.productDetails = productDetails;
				paypalItems.push({
					name: `${product.productDetails.title} - ${product.color} - ${product.size}`,
					description: product.productDetails.description,
					sku: product.id,
					unit_amount: {
						currency_code: 'EUR',
						value: product.productDetails.price
					},
					quantity: product.quantity
				});
			}
		}

		res.render('checkout/show', { cart, products: cart.products, helpers, paypalItems, page: 'checkout' });
	}
});

router.get('/checkout/payment-success/:id', async (req, res) => {
	if (!req.session.cartId) {
		res.redirect('/');
	} else {
		const orderId = req.params.id;
		const order = await ordersRepo.getOne(orderId);
		if (!order) {
			res.redirect('/');
		} else {
			const cart = await cartsRepo.getOne(req.session.cartId);

			const counterId = 1;
			const counter = await ordersRepo.getOne(counterId);

			for (product of cart.products) {
				const productDetails = await productsRepo.getOne(product.id);
				product.productDetails = productDetails;
			}

			await cartsRepo.delete(req.session.cartId);
			req.session.cartId = '';

			res.render('checkout/success', { products: cart.products, orderId, counter });
		}
	}
});

router.get('/checkout/payment-failure', (req, res) => {
	if (!req.session.cartId) {
		res.redirect('/');
	} else {
		res.render('checkout/failure');
	}
});

module.exports = router;
