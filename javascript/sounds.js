function Sounds () {
	this.fireMessage = "fire sound!";
	this.fireSound = function(a, b, c) {
		console.log(a + b + c);
		console.log(this.fireMessage);
	};
	
	this.botDamagedMessage = "Bot was damaged";
	
	let botDamagedSound = function() {
		console.log(this.botDamagedMessage);
	}.bind(this);
	
	this.on({
		"notify:rocket.fired" : this.fireSound, 
		"notify:bot.damaged" : botDamagedSound
			});
	
}


Sounds.prototype = Object.create(Observable.prototype);
Sounds.prototype.constructor = Sounds;

// eslint-disable-next-line no-unused-vars
let sounds = new Sounds();

