import { Konami } from './konami.es6';

(function () {
	'use strict';

	ready(() => {

		new Konami();

		let showAllLabel = document.querySelector('.showAllLabel');
		
		showAllLabel.addEventListener('click', (e) => {
			
			let hiddenLabels = document.querySelectorAll('.label.hidden');
			
			console.log(hiddenLabels);
			
			for (let i = 0; i < hiddenLabels.length; i++){
				hiddenLabels[i].className = 'label';
			}
			
			showAllLabel.classList.add('hidden');
			
		});
		
	});

})();

function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}