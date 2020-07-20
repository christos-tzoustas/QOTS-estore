const navbar = document.querySelector('#navbar');

document.querySelector('#menu').addEventListener('click', () => {
	navbar.classList.remove('hide-mobile');
});

document.querySelector('#exit').addEventListener('click', () => {
	navbar.classList.add('hide-mobile');
});

