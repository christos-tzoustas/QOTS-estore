const addNavFunctionality = () => {
	const navbar = document.querySelector('#navbar');
	const navbarLinks = document.querySelector('#navbar-links');
	
	document.querySelector('#menu').addEventListener('click', () => {
		navbarLinks.classList.remove('hide-mobile');
	});

	document.querySelector('#exit-btn').addEventListener('click', () => {
		navbarLinks.classList.add('hide-mobile');
	});

	window.addEventListener('scroll', function(e) {
		if (document.documentElement.scrollTop || document.body.scrollTop > 0) {
			navbar.classList.add('navbar-shadow');
		} else {
			navbar.classList.remove('navbar-shadow');
		}
	});
};

addNavFunctionality();
