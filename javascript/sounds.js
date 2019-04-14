function Sounds () {
	this.on("fire",
			function(){
				console.log("fire sound!");
			}
	);
	
	this.on("botApplyDamage",
			function(){
				console.log("Bot was daamged");
			}
	);
}


Sounds.prototype = Object.create(Observable.prototype);
Sounds.prototype.constructor = Sounds;

// eslint-disable-next-line no-unused-vars
var sounds = new Sounds;

