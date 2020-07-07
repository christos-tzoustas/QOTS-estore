const helpers = {
	showAfterImgLoad(el) {
		const url = getComputedStyle(document.querySelector(el)).backgroundImage;
		const src = url.match(/\((.*?)\)/)[1].replace(/('|")/g, '');

		const img = new Image();
		img.onload = function() {
			document.querySelector(el).classList.remove('hidden');
		};
		img.src = src;
	}
};
