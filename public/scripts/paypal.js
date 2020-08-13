const getDetails = () => {
	return {
		amount: {
			currency_code: 'EUR',
			value:
				parseInt(document.querySelector('#subtotal-checkout').value) +
				parseInt(document.querySelector('.shipping-val').value),
			breakdown: {
				item_total: {
					currency_code: 'EUR',
					value: parseInt(document.querySelector('#subtotal-checkout').value)
				},
				shipping: {
					currency_code: 'EUR',
					value: parseInt(document.querySelector('.shipping-val').value)
				},

				tax_total: {
					currency_code: 'EUR',
					value: 0
				}
			}
		},
		items: paypalItems,
		shipping: {
			name: {
				full_name: `${document.querySelector('#firstNameInput').value} ${document.querySelector(
					'#lastNameInput'
				).value}`
			},
			address: {
				address_line_1: document.querySelector('#addressInput').value,
				postal_code: document.querySelector('#postalCodeInput').value,
				country_code: document.querySelector('#countryInput').value,
				admin_area_2: document.querySelector('#cityInput').value,
				admin_area_1: document.querySelector('#stateInput').value,
				address_line_2: document.querySelector('#addressSecondLineInput').value
			}
		}
	};
};

paypal
	.Buttons({

		getDetails: getDetails,

		createOrder: function(data, actions) {
			return actions.order.create({
				intent: 'CAPTURE',
				purchase_units: [
					{
						amount: getDetails().amount,
						items: getDetails().items,
						shipping: getDetails().shipping
					}
				]
			});
		},

		onApprove: function(data, actions) {
			return actions.order.capture().then(function(details) {
				const responsePromise = fetch('/paypal-transaction-complete', {
					method: 'POST',
					headers: {
						'content-type': 'application/json; charset=utf-8'
					},
					body: JSON.stringify({
						orderId: data.orderID,
						details: details
					})
				});
				responsePromise.then(function(responseFromServer) {
					if (responseFromServer.status === 200) {
						location.href = `/checkout/payment-success/${data.orderID}`;
					} else {
						location.href = '/checkout/payment-failure/';
					}
				});
			});
		},
		onError: async function(err) {
			const rawResponse = fetch('/paypal-transaction-failure', {
				method: 'POST',
				headers: {
					'content-type': 'application/json; charset=utf-8'
				},
				body: JSON.stringify({
					error: err
				})
			});

			const res = await rawResponse;
			const data = await res.json();

			location.href = `${data.href}`;
		}
	})
	.render('#paypal-button-container');
