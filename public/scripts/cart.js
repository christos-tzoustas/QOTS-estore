const shippingVal = document.createElement('input');
shippingVal.setAttribute('hidden', '');
const updateBtn = document.querySelector('.update-btn');
const emptyLinks = document.querySelectorAll('a[href="#"]');
const shippingInfo = document.querySelector('.shipping-info a');
const footer = document.querySelector('footer');

const shippingEstConfig = {
	root: document.querySelector('.shipping-estimator-cart'),
	displayEl: document.querySelector('.shipping-quote .estimator-value'),
	input: shippingVal,
	elToShowAfter: '.update-shipping'
};

createShippingEst(shippingEstConfig);

updateBtn.addEventListener('click', () => {
	helpers.calculateGrantTotal({
		displayEl: document.querySelector('.grand-total-cart'),
		subInput: document.querySelector('#subtotal-cart'),
		shipInput: shippingVal
	});

	document.querySelector('.shipping-info a').innerText = `€ ${shippingVal.value}`;
});

for (link of emptyLinks) {
	link.addEventListener('click', (event) => {
		event.preventDefault();
	});
}

shippingInfo.addEventListener('click', function() {
	document.querySelector('.shipping-estimator').classList.toggle('hidden-cart');
	if (this.innerText === 'Add info') {
		this.innerText = 'Cancel';
	} else if (this.innerText === 'Cancel') {
		this.innerText = 'Add info';
	}
});


