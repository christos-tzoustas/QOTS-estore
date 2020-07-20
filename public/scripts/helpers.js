const helpers = {
	showAfterImgLoad(el) {
		const url = getComputedStyle(document.querySelector(el)).backgroundImage;
		const src = url.match(/\((.*?)\)/)[1].replace(/('|")/g, '');

		const img = new Image();
		img.onload = function() {
			document.querySelector(el).classList.remove('hidden');
		};
		img.src = src;
	},
	calculateGrantTotal({ displayEl, subInput, shipInput }) {
		const grandTotal = displayEl;
		const subtotal = subInput.value;
		const shipping = shipInput.value;

		if (NodeList.prototype.isPrototypeOf(grandTotal)) {
			for (let totalDisplay of grandTotal) {
				totalDisplay.innerText = `€ ${(parseInt(subtotal) + parseInt(shipping)).toFixed(2)}`;
			}
		} else {
			grandTotal.innerText = `€ ${(parseInt(subtotal) + parseInt(shipping)).toFixed(2)}`;
		}
	},

	dltEmptyScrps() {
		const scripts = document.querySelectorAll('script');
		const links = document.querySelectorAll('link');
		for (let script of scripts) {
			if (script.getAttribute('src') === '') {
				script.remove();
			}
		}

		for (let link of links) {
			if (link.getAttribute('href') === '') {
				link.remove();
			}
		}
	}
};
