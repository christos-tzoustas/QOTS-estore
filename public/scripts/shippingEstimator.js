const createShippingEst = ({ root, displayEl, input, elToShowAfter, calcTotalConfig }) => {
	root.innerHTML = `
    <option value="">Select a country</option>
    <option value="AF">Afghanistan</option>
    <option value="AL">Albania</option>
    <option value="DZ">Algeria</option>
    <option value="AS">American Samoa</option>
    <option value="AD">Andorra</option>
    <option value="AO">Angola</option>
    <option value="AI">Anguilla</option>
    <option value="AQ">Antarctica</option>
    <option value="AG">Antigua and Barbuda</option>
    <option value="AR">Argentina</option>
    <option value="AM">Armenia</option>
    <option value="AW">Aruba</option>
    <option value="AU">Australia</option>
    <option value="AT">Austria</option>
    <option value="AZ">Azerbaijan</option>
    <option value="BS">Bahamas</option>
    <option value="BH">Bahrain</option>
    <option value="BD">Bangladesh</option>
    <option value="BB">Barbados</option>
    <option value="BY">Belarus</option>
    <option value="BE">Belgium</option>
    <option value="BZ">Belize</option>
    <option value="BJ">Benin</option>
    <option value="BM">Bermuda</option>
    <option value="BT">Bhutan</option>
    <option value="BO">Bolivia</option>
    <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
    <option value="BA">Bosnia and Herzegovina</option>
    <option value="BW">Botswana</option>
    <option value="BV">Bouvet Island</option>
    <option value="BR">Brazil</option>
    <option value="IO">British Indian Ocean Territory</option>
    <option value="BN">Brunei Darussalam</option>
    <option value="BG">Bulgaria</option>
    <option value="BF">Burkina Faso</option>
    <option value="BI">Burundi</option>
    <option value="KH">Cambodia</option>
    <option value="CM">Cameroon</option>
    <option value="CA">Canada</option>
    <option value="CV">Cape Verde</option>
    <option value="KY">Cayman Islands</option>
    <option value="CF">Central African Republic</option>
    <option value="TD">Chad</option>
    <option value="CL">Chile</option>
    <option value="CN">China</option>
    <option value="CX">Christmas Island</option>
    <option value="CC">Cocos (Keeling) Islands</option>
    <option value="CO">Colombia</option>
    <option value="KM">Comoros</option>
    <option value="CG">Congo</option>
    <option value="CD">Congo, the Democratic Republic of the</option>
    <option value="CK">Cook Islands</option>
    <option value="CR">Costa Rica</option>
    <option value="CI">Cote d'Ivoire</option>
    <option value="HR">Croatia</option>
    <option value="CY">Cyprus</option>
    <option value="CZ">Czech Republic</option>
    <option value="DK">Denmark</option>
    <option value="DJ">Djibouti</option>
    <option value="DM">Dominica</option>
    <option value="DO">Dominican Republic</option>
    <option value="EC">Ecuador</option>
    <option value="EG">Egypt</option>
    <option value="SV">El Salvador</option>
    <option value="GQ">Equatorial Guinea</option>
    <option value="ER">Eritrea</option>
    <option value="EE">Estonia</option>
    <option value="ET">Ethiopia</option>
    <option value="FK">Falkland Islands (Malvinas)</option>
    <option value="FO">Faroe Islands</option>
    <option value="FJ">Fiji</option>
    <option value="FI">Finland</option>
    <option value="FR">France</option>
    <option value="GF">French Guiana</option>
    <option value="PF">French Polynesia</option>
    <option value="TF">French Southern Territories</option>
    <option value="GA">Gabon</option>
    <option value="GM">Gambia</option>
    <option value="GE">Georgia</option>
    <option value="DE">Germany</option>
    <option value="GH">Ghana</option>
    <option value="GI">Gibraltar</option>
    <option value="GR">Greece</option>
    <option value="GL">Greenland</option>
    <option value="GD">Grenada</option>
    <option value="GP">Guadeloupe</option>
    <option value="GU">Guam</option>
    <option value="GT">Guatemala</option>
    <option value="GG">Guernsey</option>
    <option value="GN">Guinea</option>
    <option value="GW">Guinea-Bissau</option>
    <option value="GY">Guyana</option>
    <option value="HT">Haiti</option>
    <option value="HM">Heard Island and Mcdonald Islands</option>
    <option value="VA">Holy See (Vatican City State)</option>
    <option value="HN">Honduras</option>
    <option value="HK">Hong Kong</option>
    <option value="HU">Hungary</option>
    <option value="IS">Iceland</option>
    <option value="IN">India</option>
    <option value="ID">Indonesia</option>
    <option value="IQ">Iraq</option>
    <option value="IE">Ireland</option>
    <option value="IM">Isle of Man</option>
    <option value="IL">Israel</option>
    <option value="IT">Italy</option>
    <option value="JM">Jamaica</option>
    <option value="JP">Japan</option>
    <option value="JE">Jersey</option>
    <option value="JO">Jordan</option>
    <option value="KZ">Kazakhstan</option>
    <option value="KE">Kenya</option>
    <option value="KI">Kiribati</option>
    <option value="KR">Korea, Republic of</option>
    <option value="KW">Kuwait</option>
    <option value="KG">Kyrgyzstan</option>
    <option value="LA">Lao People's Democratic Republic</option>
    <option value="LV">Latvia</option>
    <option value="LB">Lebanon</option>
    <option value="LS">Lesotho</option>
    <option value="LR">Liberia</option>
    <option value="LY">Libya</option>
    <option value="LI">Liechtenstein</option>
    <option value="LT">Lithuania</option>
    <option value="LU">Luxembourg</option>
    <option value="MO">Macao</option>
    <option value="MK">Macedonia, the Former Yugoslav Republic of</option>
    <option value="MG">Madagascar</option>
    <option value="MW">Malawi</option>
    <option value="MY">Malaysia</option>
    <option value="MV">Maldives</option>
    <option value="ML">Mali</option>
    <option value="MT">Malta</option>
    <option value="MH">Marshall Islands</option>
    <option value="MQ">Martinique</option>
    <option value="MR">Mauritania</option>
    <option value="MU">Mauritius</option>
    <option value="YT">Mayotte</option>
    <option value="MX">Mexico</option>
    <option value="FM">Micronesia, Federated States of</option>
    <option value="MD">Moldova, Republic of</option>
    <option value="MC">Monaco</option>
    <option value="MN">Mongolia</option>
    <option value="ME">Montenegro</option>
    <option value="MS">Montserrat</option>
    <option value="MA">Morocco</option>
    <option value="MZ">Mozambique</option>
    <option value="MM">Myanmar</option>
    <option value="NA">Namibia</option>
    <option value="NR">Nauru</option>
    <option value="NP">Nepal</option>
    <option value="NL">Netherlands</option>
    <option value="AN">Netherlands Antilles</option>
    <option value="NC">New Caledonia</option>
    <option value="NZ">New Zealand</option>
    <option value="NI">Nicaragua</option>
    <option value="NE">Niger</option>
    <option value="NG">Nigeria</option>
    <option value="NU">Niue</option>
    <option value="NF">Norfolk Island</option>
    <option value="MP">Northern Mariana Islands</option>
    <option value="NO">Norway</option>
    <option value="OM">Oman</option>
    <option value="PK">Pakistan</option>
    <option value="PW">Palau</option>
    <option value="PS">Palestinian Territory, Occupied</option>
    <option value="PA">Panama</option>
    <option value="PG">Papua New Guinea</option>
    <option value="PY">Paraguay</option>
    <option value="PE">Peru</option>
    <option value="PH">Philippines</option>
    <option value="PN">Pitcairn</option>
    <option value="PL">Poland</option>
    <option value="PT">Portugal</option>
    <option value="PR">Puerto Rico</option>
    <option value="QA">Qatar</option>
    <option value="XK">Republic of Kosovo</option>
    <option value="RE">Reunion</option>
    <option value="RO">Romania</option>
    <option value="RU">Russian Federation</option>
    <option value="RW">Rwanda</option>
    <option value="SH">Saint Helena</option>
    <option value="KN">Saint Kitts and Nevis</option>
    <option value="LC">Saint Lucia</option>
    <option value="PM">Saint Pierre and Miquelon</option>
    <option value="VC">Saint Vincent and the Grenadines</option>
    <option value="WS">Samoa</option>
    <option value="SM">San Marino</option>
    <option value="ST">Sao Tome and Principe</option>
    <option value="SA">Saudi Arabia</option>
    <option value="SN">Senegal</option>
    <option value="RS">Serbia</option>
    <option value="SC">Seychelles</option>
    <option value="SL">Sierra Leone</option>
    <option value="SG">Singapore</option>
    <option value="SK">Slovakia</option>
    <option value="SI">Slovenia</option>
    <option value="SB">Solomon Islands</option>
    <option value="SO">Somalia</option>
    <option value="ZA">South Africa</option>
    <option value="GS">South Georgia and the South Sandwich Islands</option>
    <option value="ES">Spain</option>
    <option value="LK">Sri Lanka</option>
    <option value="SD">Sudan</option>
    <option value="SR">Suriname</option>
    <option value="SJ">Svalbard and Jan Mayen</option>
    <option value="SZ">Swaziland</option>
    <option value="SE">Sweden</option>
    <option value="CH">Switzerland</option>
    <option value="TW">Taiwan</option>
    <option value="TJ">Tajikistan</option>
    <option value="TZ">Tanzania, United Republic of</option>
    <option value="TH">Thailand</option>
    <option value="TL">Timor-Leste</option>
    <option value="TG">Togo</option>
    <option value="TK">Tokelau</option>
    <option value="TO">Tonga</option>
    <option value="TT">Trinidad and Tobago</option>
    <option value="TN">Tunisia</option>
    <option value="TR">Turkey</option>
    <option value="TM">Turkmenistan</option>
    <option value="TC">Turks and Caicos Islands</option>
    <option value="TV">Tuvalu</option>
    <option value="UG">Uganda</option>
    <option value="UA">Ukraine</option>
    <option value="AE">United Arab Emirates</option>
    <option value="GB">United Kingdom</option>
    <option value="US">United States</option>
    <option value="UM">United States Minor Outlying Islands</option>
    <option value="UY">Uruguay</option>
    <option value="UZ">Uzbekistan</option>
    <option value="VU">Vanuatu</option>
    <option value="VE">Venezuela</option>
    <option value="VN">Viet Nam</option>
    <option value="VG">Virgin Islands, British</option>
    <option value="VI">Virgin Islands, U.S.</option>
    <option value="WF">Wallis and Futuna</option>
    <option value="EH">Western Sahara</option>
    <option value="YE">Yemen</option>
    <option value="ZM">Zambia</option>
    <option value="ZW">Zimbabwe</option>
            `;

	const contCodes = {
		AD: 'Europe',
		AE: 'Asia',
		AF: 'Asia',
		AG: 'North America',
		AI: 'North America',
		AL: 'Europe',
		AM: 'Asia',
		AN: 'North America',
		AO: 'Africa',
		AQ: 'Antarctica',
		AR: 'South America',
		AS: 'Australia',
		AT: 'Europe',
		AU: 'Australia',
		AW: 'North America',
		AZ: 'Asia',
		BA: 'Europe',
		BB: 'North America',
		BD: 'Asia',
		BE: 'Europe',
		BF: 'Africa',
		BG: 'Europe',
		BH: 'Asia',
		BI: 'Africa',
		BJ: 'Africa',
		BM: 'North America',
		BN: 'Asia',
		BO: 'South America',
		BR: 'South America',
		BS: 'North America',
		BT: 'Asia',
		BW: 'Africa',
		BY: 'Europe',
		BZ: 'North America',
		CA: 'North America',
		CC: 'Asia',
		CD: 'Africa',
		CF: 'Africa',
		CG: 'Africa',
		CH: 'Europe',
		CI: 'Africa',
		CK: 'Australia',
		CL: 'South America',
		CM: 'Africa',
		CN: 'Asia',
		CO: 'South America',
		CR: 'North America',
		CU: 'North America',
		CV: 'Africa',
		CX: 'Asia',
		CY: 'Asia',
		CZ: 'Europe',
		DE: 'Europe',
		DJ: 'Africa',
		DK: 'Europe',
		DM: 'North America',
		DO: 'North America',
		DZ: 'Africa',
		EC: 'South America',
		EE: 'Europe',
		EG: 'Africa',
		EH: 'Africa',
		ER: 'Africa',
		ES: 'Europe',
		ET: 'Africa',
		FI: 'Europe',
		FJ: 'Australia',
		FK: 'South America',
		FM: 'Australia',
		FO: 'Europe',
		FR: 'Europe',
		GA: 'Africa',
		GB: 'Europe',
		GD: 'North America',
		GE: 'Asia',
		GF: 'South America',
		GG: 'Europe',
		GH: 'Africa',
		GI: 'Europe',
		GL: 'North America',
		GM: 'Africa',
		GN: 'Africa',
		GP: 'North America',
		GQ: 'Africa',
		GR: 'Europe',
		GS: 'Antarctica',
		GT: 'North America',
		GU: 'Australia',
		GW: 'Africa',
		GY: 'South America',
		HK: 'Asia',
		HN: 'North America',
		HR: 'Europe',
		HT: 'North America',
		HU: 'Europe',
		ID: 'Asia',
		IE: 'Europe',
		IL: 'Asia',
		IM: 'Europe',
		IN: 'Asia',
		IO: 'Asia',
		IQ: 'Asia',
		IR: 'Asia',
		IS: 'Europe',
		IT: 'Europe',
		JE: 'Europe',
		JM: 'North America',
		JO: 'Asia',
		JP: 'Asia',
		KE: 'Africa',
		KG: 'Asia',
		KH: 'Asia',
		KI: 'Australia',
		KM: 'Africa',
		KN: 'North America',
		KP: 'Asia',
		KR: 'Asia',
		KW: 'Asia',
		KY: 'North America',
		KZ: 'Asia',
		LA: 'Asia',
		LB: 'Asia',
		LC: 'North America',
		LI: 'Europe',
		LK: 'Asia',
		LR: 'Africa',
		LS: 'Africa',
		LT: 'Europe',
		LU: 'Europe',
		LV: 'Europe',
		LY: 'Africa',
		MA: 'Africa',
		MC: 'Europe',
		MD: 'Europe',
		ME: 'Europe',
		MG: 'Africa',
		MH: 'Australia',
		MK: 'Europe',
		ML: 'Africa',
		MM: 'Asia',
		MN: 'Asia',
		MO: 'Asia',
		MP: 'Australia',
		MQ: 'North America',
		MR: 'Africa',
		MS: 'North America',
		MT: 'Europe',
		MU: 'Africa',
		MV: 'Asia',
		MW: 'Africa',
		MX: 'North America',
		MY: 'Asia',
		MZ: 'Africa',
		NA: 'Africa',
		NC: 'Australia',
		NE: 'Africa',
		NF: 'Australia',
		NG: 'Africa',
		NI: 'North America',
		NL: 'Europe',
		NO: 'Europe',
		NP: 'Asia',
		NR: 'Australia',
		NU: 'Australia',
		NZ: 'Australia',
		OM: 'Asia',
		PA: 'North America',
		PE: 'South America',
		PF: 'Australia',
		PG: 'Australia',
		PH: 'Asia',
		PK: 'Asia',
		PL: 'Europe',
		PM: 'North America',
		PN: 'Australia',
		PR: 'North America',
		PS: 'Asia',
		PT: 'Europe',
		PW: 'Australia',
		PY: 'South America',
		QA: 'Asia',
		RE: 'Africa',
		RO: 'Europe',
		RS: 'Europe',
		RU: 'Europe',
		RW: 'Africa',
		SA: 'Asia',
		SB: 'Australia',
		SC: 'Africa',
		SD: 'Africa',
		SE: 'Europe',
		SG: 'Asia',
		SH: 'Africa',
		SI: 'Europe',
		SJ: 'Europe',
		SK: 'Europe',
		SL: 'Africa',
		SM: 'Europe',
		SN: 'Africa',
		SO: 'Africa',
		SR: 'South America',
		ST: 'Africa',
		SV: 'North America',
		SY: 'Asia',
		SZ: 'Africa',
		TC: 'North America',
		TD: 'Africa',
		TF: 'Antarctica',
		TG: 'Africa',
		TH: 'Asia',
		TJ: 'Asia',
		TK: 'Australia',
		TM: 'Asia',
		TN: 'Africa',
		TO: 'Australia',
		TR: 'Asia',
		TT: 'North America',
		TV: 'Australia',
		TW: 'Asia',
		TZ: 'Africa',
		UA: 'Europe',
		UG: 'Africa',
		US: 'North America',
		UY: 'South America',
		UZ: 'Asia',
		VC: 'North America',
		VE: 'South America',
		VG: 'North America',
		VI: 'North America',
		VN: 'Asia',
		VU: 'Australia',
		WF: 'Australia',
		WS: 'Australia',
		YE: 'Asia',
		YT: 'Africa',
		ZA: 'Africa',
		ZM: 'Africa',
		ZW: 'Africa'
	};

	root.addEventListener('change', function() {
		const selection = this.value;
		const continent = contCodes[selection];
		if (continent === 'Europe') {
			input.value = 5;
			displayEl.innerText = 'Shipping to Europe - € 5';
		} else {
			input.value = 10;
			displayEl.innerText = 'Shipping to Rest of World - € 10';
		}
		if (elToShowAfter) {
			document.querySelector(elToShowAfter).classList.remove('hidden-cart');
		}
		if (calcTotalConfig) {
			helpers.calculateGrantTotal(calcTotalConfig);
		}
	});
};
