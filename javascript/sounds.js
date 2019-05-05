function Sounds () {
	var me = this;
	
	this.fireMessage = "fire sound!";
	this.fireSound = function(a, b, c) {
		console.log(a + b + c);
		console.log(this.fireMessage);
	}
	
	this.botDamagedMessage = "Bot was damaged";
	
	var botDamagedSound = function() {
		console.log(this.botDamagedMessage);
	}.bind(this);
	
	this.on({
		"notify:rocket.fired" : me.fireSound, 
		"notify:bot.damaged" : botDamagedSound
			}, this);
	
}


Sounds.prototype = Object.create(Observable.prototype);
Sounds.prototype.constructor = Sounds;

// eslint-disable-next-line no-unused-vars
var sounds = new Sounds();

