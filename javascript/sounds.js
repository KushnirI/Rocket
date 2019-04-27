function Sounds () {
	this.fireMessage = "fire sound!";
	var fireSound = function(a, b, c) {
		console.log(a + b + c);
		console.log(this.fireMessage);
	}.bind(this);
	
	this.botDamagedMessage = "Bot was damaged";
	
	var botDamagedSound = function() {
		console.log(this.botDamagedMessage);
	}.bind(this);
	
	this.on({
		"notify:rocket.fired" : fireSound, 
		"notify:bot.damaged" : botDamagedSound
			});
	
}


Sounds.prototype = Object.create(Observable.prototype);
Sounds.prototype.constructor = Sounds;

// eslint-disable-next-line no-unused-vars
var sounds = new Sounds();

