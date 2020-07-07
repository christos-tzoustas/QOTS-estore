const navbar = document.querySelector('#navbar');
const addToCart = document.querySelector('.order');
const selectPatternBtns = document.querySelectorAll('button.design');
const selectSizeBtns = document.querySelectorAll('button.size');
const selectColorBtns = document.querySelectorAll('button.color');
const msgContainer = document.querySelector('#success-msg');
const cartForm = document.querySelector('#cart-form');
const cartDelete = document.querySelector('.fa-trash-alt');

const showMsg = (msg) => {
	msgContainer.innerText = msg;
	msgContainer.classList.remove('hidden');
	setTimeout(() => {
		msgContainer.classList.add('hidden');
	}, 2000);
};

document.querySelector('#menu').addEventListener('click', () => {
	navbar.classList.remove('hide-mobile');
});

document.querySelector('#exit').addEventListener('click', () => {
	navbar.classList.add('hide-mobile');
});

for (button of selectPatternBtns) {
	button.addEventListener('click', function() {
		addToCart.querySelector('#product-name').innerText = this.parentElement.querySelector('figcaption').innerText;
		addToCart.querySelector('#product-desc').innerText = this.parentElement.querySelector(
			'#choose-description'
		).innerText;
		addToCart.querySelector('#price').innerText = this.parentElement.querySelector('#choose-price').innerText;
		addToCart.querySelector('img').src = this.parentElement.querySelector('img').src;
		addToCart.querySelector('#productId').value = this.parentElement.querySelector('input').value;

		showMsg('Successfully added!');
	});
}

for (button of selectSizeBtns) {
	button.addEventListener('click', function() {
		addToCart.querySelector('#size span').innerText = this.innerText;
		addToCart.querySelector('#productSize').value = this.innerText;
		showMsg('Successfully added!');
	});
}

for (button of selectColorBtns) {
	button.addEventListener('click', function() {
		addToCart.querySelector('#color span').innerText = this.nextElementSibling.innerText;
		addToCart.querySelector('#productColor').value = this.nextElementSibling.innerText;
		showMsg('Successfully added!');
	});
}

cartForm.addEventListener('submit', function(event) {
	const inputs = this.querySelectorAll('input');
	const emptyInputs = [ ...inputs ].filter((input) => {
		return !input.value;
	});

	if (emptyInputs.length) {
		const msg = [];
		for (input of emptyInputs) {
			if (input.getAttribute('name') === 'id') {
				msg.push('pattern');
			} else {
				msg.push(input.getAttribute('name'));
			}
		}

		showMsg(`Please make your choice of ${msg.length > 2 ? msg.join(', ') : msg.join(' and ')}`);
		event.preventDefault();
	}
});

cartDelete.addEventListener('click', () => {
	cartForm.reset();
	showMsg('Selections cleared!');
});


