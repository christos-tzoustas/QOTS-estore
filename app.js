require('dotenv').config();

const express = require('express');
const app = express();
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const authRouter = require('./routes/admin/auth');
const adminProductsRouter = require('./routes/admin/products');
const productsRouter = require('./routes/products');
const cartsRouter = require('./routes/carts');
const checkoutRouter = require('./routes/checkout');
const paypalRouter = require('./routes/paypal');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
	cookieSession({
		keys: [ process.env.COOKIE_SESSIONS_KEY ]
	})
);
app.use(authRouter);
app.use(productsRouter);
app.use(adminProductsRouter);
app.use(cartsRouter);
app.use(checkoutRouter);
app.use(paypalRouter);

app.use(function(req, res) {
	res.status(400);
	res.render('errors/404', { title: '404: File Not Found' });
});

app.use(function(error, req, res, next) {
	res.status(500);
	res.render('errors/500', { title: '500: Internal Server Error', error: error });
});

app.listen(3000, () => {
	console.log('App listening on port 3000');
});
