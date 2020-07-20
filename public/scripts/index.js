const addListenerForScroll = (el, target) => {
	const handlerClick = () => {
		document.querySelector(target).scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
		event.stopPropagation();
	};

	const handlerKey = (e) => {
		if (e.code === 'Enter') {
			document.querySelector(target).scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
			event.stopPropagation();
		}
	};

	const selectedEl = document.querySelector(el);

	selectedEl.addEventListener('keydown', handlerKey);
	selectedEl.addEventListener('click', handlerClick);
};

const makeModal = () => {
	const modal = document.querySelector('#myModal');

	const imgs = document.querySelectorAll('.enlarge-image');
	const modalImg = document.querySelector('#modal-image');
	const captionText = document.querySelector('#caption');
	for (let img of imgs) {
		[ 'click', 'keydown' ].forEach((evt) => {
			img.addEventListener(evt, function(e) {
				if (e.code === 'Enter' || event.type === 'click') {
					modal.style.display = 'block';
					modalImg.src = this.src;
					if (!this.nextElementSibling) {
						captionText.innerHTML = '';
					} else {
						captionText.innerHTML = this.nextElementSibling.innerText;
					}
				}
			});
		});
	}

	const span = document.querySelector('.close');

	span.addEventListener('click', () => {
		modal.style.display = 'none';
	});
};

class Cart {
	constructor(container) {
		this.container = container;
		this.selectPatternBtns = document.querySelectorAll('button.design');
		this.selectSizeBtns = document.querySelectorAll('button.size');
		this.selectColorBtns = document.querySelectorAll('button.color');
		this.msgContainer = document.querySelector('#success-msg');
		this.cartForm = document.querySelector('#cart-form');
		this.cartDelete = document.querySelector('.fa-trash-alt');
	}

	showMsg(msg) {
		this.msgContainer.innerText = msg;
		this.msgContainer.classList.remove('hidden');
		setTimeout(() => {
			this.msgContainer.classList.add('hidden');
		}, 2000);
	}

	addEvtListenersBtns() {
		for (let button of this.selectPatternBtns) {
			button.addEventListener(
				'click',
				function() {
					this.container.querySelector('#product-name').innerText = button.parentElement.querySelector(
						'figcaption'
					).innerText;
					this.container.querySelector('#product-desc').innerText = button.parentElement.querySelector(
						'#choose-description'
					).innerText;
					this.container.querySelector('#price').innerText = button.parentElement.querySelector(
						'#choose-price'
					).innerText;
					this.container.querySelector('img').src = button.parentElement.querySelector('img').src;
					this.container.querySelector('#productId').value = button.parentElement.querySelector(
						'input'
					).value;

					this.showMsg('Successfully added!');
				}.bind(this)
			);
		}

		for (let button of this.selectSizeBtns) {
			button.addEventListener(
				'click',
				function() {
					this.container.querySelector('#size span').innerText = button.innerText;
					this.container.querySelector('#productSize').value = button.innerText;
					this.showMsg('Successfully added!');
				}.bind(this)
			);
		}

		for (let button of this.selectColorBtns) {
			button.addEventListener(
				'click',
				function() {
					this.container.querySelector('#color span').innerText = button.nextElementSibling.innerText;
					this.container.querySelector('#productColor').value = button.nextElementSibling.innerText;
					this.showMsg('Successfully added!');
					console.log(this.container.querySelector('#productColor').value);
				}.bind(this)
			);
		}

		this.cartForm.addEventListener(
			'submit',
			function(event) {
				const inputs = this.cartForm.querySelectorAll('input');
				const emptyInputs = [ ...inputs ].filter((input) => {
					return !input.value;
				});

				if (emptyInputs.length) {
					const msg = [];
					for (let input of emptyInputs) {
						if (input.getAttribute('name') === 'id') {
							msg.push('pattern');
						} else {
							msg.push(input.getAttribute('name'));
						}
					}

					this.showMsg(`Please make your choice of ${msg.length > 2 ? msg.join(', ') : msg.join(' and ')}`);
					event.preventDefault();
				}
			}.bind(this)
		);

		[ 'click', 'keydown' ].forEach((evt) => {
			this.cartDelete.addEventListener(evt, (e) => {
				if (e.code === 'Enter' || event.type === 'click') {
					this.cartForm.reset();
					this.container.querySelector('#product-name').innerText = 'Seinfeld';
					this.container.querySelector('#product-desc').innerText = "Jerry Seinfeld's Apartment";
					this.container.querySelector('#price').innerText = '€ 30';
					this.container.querySelector('img').src = '/images/seinfeld.jpg';
					this.showMsg('Selections cleared!');
				}
			});
		});
	}
}

makeModal();

addListenerForScroll('#cta', '.instructions');
addListenerForScroll('.pattern-button', '.patterns');
addListenerForScroll('.color-button', '.colors');
addListenerForScroll('.size-button', '.sizes');
addListenerForScroll('.cart-button', '.review-order');

helpers.showAfterImgLoad('.hero');

const cart = new Cart(document.querySelector('.order'));
cart.addEvtListenersBtns();
