export class Konami {
	constructor() {
		this.counter = 0;
		this.lasttime = null;
		this.code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
		this.listen();
	}

	listen() {
		document.addEventListener("keydown", this.handle.bind(this));
	}

	handle(event) {
		if (event.type === "keydown" && event.keyCode === this.code[this.counter]) {
			
			// If it's the first key, the timestamps should be null and counter at 0
			if (!this.lastpress && this.counter === 0)
				this.lastpress = new Date().getTime();
				
			// We allow a delay of 1s (1000ms) between 2 keydown
			if ((new Date().getTime() - this.lastpress) > 1000) {
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
		}
		else if (event.keyCode !== this.code[this.counter]) {
			this.reset();
		}
	}

	reset() {
		this.counter = 0;
		this.lastpress = null;
	}

	doTheKonamiSecret() {
		alert('trololo');
	}
	
};
