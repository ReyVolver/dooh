import { Konami } from './konami.es6';

(function () {
	'use strict';

	ready(() => {

		new Konami();

		let roles = ['a fullstack developer', 'crafting website', 'a javascript lover'];
		let rolesDOM = document.querySelector('.roles');
		let i = 0;

		if (rolesDOM){
			setInterval(()=> {
				rolesDOM.textContent = roles[i];
				i = (i < roles.length - 1) ? i + 1 : 0;
			}, 3000);
		}

	});

})();

function ready(fn) {
	if (document.readyState != 'loading') {
		fn();
	} else {
		document.addEventListener('DOMContentLoaded', fn);
	}
}
