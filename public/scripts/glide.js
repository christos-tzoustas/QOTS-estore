const glide = new Glide('.glide', {
	type: 'carousel',
	perView: 7,
	focusAt: 'center',
	breakpoints: {
        1096: {
            perView: 4
        },
		800: {
			perView: 3
		},
		480: {
			perView: 2
		}
	}
});

glide.mount();
