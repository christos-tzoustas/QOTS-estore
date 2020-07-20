const express = require('express');
const ordersRepo = require('../repositories/orders');

const router = express.Router();

router.post('/paypal-transaction-complete', async (req, res) => {
	if (req.body.orderId) {
		const counter = await ordersRepo.getOneBy({ type: 'counter', orderId: 1 });
		const itemsOrdered = req.body.details.purchase_units[0].items.reduce((total, item) => {
			return (total += parseInt(item.quantity));
		}, 0);

		if (counter) {
			counter.quantity -= itemsOrdered;
			if (counter.quantity <= 0) {
				counter.quantity += 25;
			}
			await ordersRepo.update(counter.orderId, counter);
		} else {
			await ordersRepo.create({ type: 'counter', orderId: 1, quantity: 25 - itemsOrdered });
		}
		await ordersRepo.create({
			type: 'order',
			orderId: req.body.orderId,
			products: req.body.details.purchase_units[0].items
		});
		res.sendStatus(200);
	} else {
		res.sendStatus(500);
	}
});

router.post('/paypal-transaction-failure', (req, res) => {
	console.log(req.body.error);

	res.json({ href: '/checkout/payment-failure' });
});

module.exports = router;
