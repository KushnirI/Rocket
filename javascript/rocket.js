// eslint-disable-next-line no-unused-vars
function Rocket(x, y, fileName){
	var me = this;
	
	DrawAndCollision.apply(this, arguments);
	
	this.angle = 0;
	
	this.bulletsAmount = 3;
	
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
	
	this.on("fire", 
		function(config){
			new Bullet(config);
			me.bulletsAmount--;
			me.showBulletsAmount()
		}
	);
	
	document.addEventListener("keydown", function(event){
		me.setKey(event.keyCode, true);
	});

	document.addEventListener("keyup", function(event){
		me.setKey(event.keyCode, false);
	});

	document.addEventListener("keypress", function(event){
		// eslint-disable-next-line no-magic-numbers
		if(event.keyCode === 32){
			// eslint-disable-next-line no-magic-numbers
			if(me.bulletsAmount > 0){
				// eslint-disable-next-line no-magic-numbers
				me.fireEvent("fire", {x: rocket.x, y: rocket.y, angle: rocket.angle, rocketLength: rocket.height/2});

			} else {
				console.log("no bullets!");
			}
		}
	});
}

Rocket.prototype = Object.create(Texture.prototype);
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

Rocket.prototype.applyDamage = function(){
	// eslint-disable-next-line no-magic-numbers
	this.setPosition(50, 50);
	this.angle = 0;
	// eslint-disable-next-line no-magic-numbers	
	rocketLifes.changeLifesAmount( -1 );
};

Rocket.prototype.applyLife = function(){
	// eslint-disable-next-line no-magic-numbers
	rocketLifes.changeLifesAmount( 1 );
};

Rocket.prototype.showBulletsAmount = function(){
	console.log("bullets amount is: " + this.bulletsAmount);
};

Rocket.prototype.applyAmmo = function(){
	this.bulletsAmount += 7;
	this.showBulletsAmount();
};


