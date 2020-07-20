const showErr = (msg, elChecked) => {
	elChecked.nextElementSibling.innerText = msg;
	elChecked.classList.add('show-error-input');
	elChecked.nextElementSibling.classList.remove('hidden-checkout');
};

const validators = {
	checkInputLength(inputName) {
		const input = document.querySelector(inputName);
		input.value = input.value.replace(/\s+/g, '');
		if (!input.value.length) {
			showErr(`${input.previousElementSibling.innerText} is required`, input);

			return false;
		} else if (input.value.length > 30) {
			showErr(`${input.previousElementSibling.innerText} must be between 1 and 30 characters`, input);

			return false;
		} else {
			return true;
		}
	},
	checkSelectLength(selectName) {
		const select = document.querySelector(selectName);
		if (!select.value.length) {
			showErr(`${select.previousElementSibling.innerText} is required`, select);
			return false;
		} else {
			return true;
		}
	},
	checkEmail() {}
};
