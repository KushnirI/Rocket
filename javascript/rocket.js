// eslint-disable-next-line no-unused-vars
function Rocket(){
	var me = this;
	
	ImgObject.apply(this, arguments);
	
	this.angle = 0;
	
	this.bullets = 3;
	
	this.showBulletsAmount();
	
	this.controls = {
		key37 : false,
		key38 : false,
		key39 : false,
		key40 : false
	};
	
	var parentMove = this.move;
	
	this.move = function(){
		parentMove.apply(this, arguments);
		
		// eslint-disable-next-line no-magic-numbers
		if(me.x < me.width/2) {
			// eslint-disable-next-line no-magic-numbers
			me.x = me.width/2;
		}
		// eslint-disable-next-line no-magic-numbers
		if(me.y < me.height/2) {
			// eslint-disable-next-line no-magic-numbers
			me.y = me.height/2;
		}
		// eslint-disable-next-line no-magic-numbers
		if(me.x > canvasWidth - me.width/2) {
			// eslint-disable-next-line no-magic-numbers
			me.x = canvasWidth - me.width/2;
		}
		// eslint-disable-next-line no-magic-numbers
		if(me.y > canvasHeight - me.height/2) {
			// eslint-disable-next-line no-magic-numbers
			me.y = canvasHeight - me.height/2;
		}
	};

}

Rocket.prototype = Object.create(ImgObject.prototype);
Rocket.prototype.constructor = Rocket;

Rocket.prototype.width = 90;
Rocket.prototype.height = 90;

Rocket.prototype.type = "rocket";
Rocket.prototype.speed = 4;
Rocket.prototype.angleStep = 0.1;

Rocket.prototype.update = function(){
		
		if(this.controls.key38){
			this.move(this.speed);
		}
		if(this.controls.key40){
			this.move(-this.speed);
		}
		if(this.controls.key37){
			this.changeAngle(-this.angleStep);
		}
		if(this.controls.key39){
			this.changeAngle(this.angleStep);
		}
};

/**
 * 
 * @param {number} step Amount of angle displacement 
 */
Rocket.prototype.changeAngle = function(step){
	this.angle += step;
};

/**
 * 
 * @param {number} keyCode Keyboard keyCode
 * @param {boolen} status Enable/disable
 */
Rocket.prototype.setKey = function(keyCode, status){
	this.controls["key" + keyCode] = status;
};

Rocket.prototype.getDamage = function(){
	// eslint-disable-next-line no-magic-numbers
	this.setPosition(50, 50);
	this.angle = 0;
	// eslint-disable-next-line no-magic-numbers	
	rocketLives.changeLiveAmount( -1 );
};

Rocket.prototype.getLive = function(){
	// eslint-disable-next-line no-magic-numbers
	rocketLives.changeLiveAmount( 1 );
};

Rocket.prototype.showBulletsAmount = function(){
	console.log("bullets amount are " + this.bullets);
};

Rocket.prototype.getAmmo = function(){
	this.bullets += 7;
	this.showBulletsAmount();
};














