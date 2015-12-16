(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _konami = require('./konami.es6');

(function () {
	'use strict';

	ready(function () {

		new _konami.Konami();

		var showAllLabel = document.querySelector('.showAllLabel');

		showAllLabel.addEventListener('click', function (e) {

			var hiddenLabels = document.querySelectorAll('.label.hidden');

			console.log(hiddenLabels);

			for (var i = 0; i < hiddenLabels.length; i++) {
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

},{"./konami.es6":2}],2:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Konami = exports.Konami = (function () {
	function Konami() {
		_classCallCheck(this, Konami);

		this.counter = 0;
		this.lasttime = null;
		this.code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
		this.listen();
	}

	_createClass(Konami, [{
		key: "listen",
		value: function listen() {
			document.addEventListener("keydown", this.handle.bind(this));
		}
	}, {
		key: "handle",
		value: function handle(event) {
			if (event.type === "keydown" && event.keyCode === this.code[this.counter]) {

				// If it's the first key, the timestamps should be null and counter at 0
				if (!this.lastpress && this.counter === 0) this.lastpress = new Date().getTime();

				// We allow a delay of 1s (1000ms) between 2 keydown
				if (new Date().getTime() - this.lastpress > 1000) {
					this.reset();
					return;
				}

				// Everything is fine, we update the counter and time
				// and we wait for the next keydown
				this.counter++;
				this.lastpress = new Date().getTime();

				// Code is complete ? Let's do something !
				if (this.counter === this.code.length) {
					this.reset();
					this.doTheKonamiSecret();
				}
			} else if (event.keyCode !== this.code[this.counter]) {
				this.reset();
			}
		}
	}, {
		key: "reset",
		value: function reset() {
			this.counter = 0;
			this.lastpress = null;
		}
	}, {
		key: "doTheKonamiSecret",
		value: function doTheKonamiSecret() {
			alert('trololo');
		}
	}]);

	return Konami;
})();

;

},{}]},{},[1,2]);
