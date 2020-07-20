const express = require('express');
const productsRepo = require('../repositories/products');
const cartsRepo = require('../repositories/carts');

const router = express.Router();

router.get('/', async (req, res) => {
	let cart;
	if (req.session.cartId) {
		const tempCart = await cartsRepo.getOne(req.session.cartId);
		if (!tempCart.products.length) {
			cartsRepo.delete(req.session.cartId);
			req.session.cartId = '';
		} else {
			cart = tempCart;
		}
	}
	
	const products = await productsRepo.getAll();
	res.render('products/index', { products, cart, page: 'index'});
});

module.exports = router;
