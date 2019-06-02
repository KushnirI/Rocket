// eslint-disable-next-line no-unused-vars
function Rocket(x, y, fileName){
	let me = this;
	
	CollisionTexture.apply(this, arguments);

	this.sprite.rotation = 0;
	this.bulletsAmount = 3;
	this.showBulletsAmount();
	
	this.controls = {
		key37 : false,
		key38 : false,
		key39 : false,
		key40 : false
	};
	
	let parentMove = this.move;
	
	this.move = function(){
		parentMove.apply(this, arguments);
		
		// eslint-disable-next-line no-magic-numbers
		if(me.globalX < me.width/2) {
			// eslint-disable-next-line no-magic-numbers
			me.globalX = me.width/2;
			// eslint-disable-next-line no-magic-numbers
			me.sprite.x = me.width/2;
		}
		// eslint-disable-next-line no-magic-numbers
		if(me.globalY < me.height/2) {
			// eslint-disable-next-line no-magic-numbers
			me.globalY = me.height/2;
			// eslint-disable-next-line no-magic-numbers
			me.sprite.y = me.height/2;
		}
		// eslint-disable-next-line no-magic-numbers
		if(me.globalX > 700 - me.width/2) {
			// eslint-disable-next-line no-magic-numbers
			me.globalX = 700 - me.width/2;
			// eslint-disable-next-line no-magic-numbers
			me.sprite.x = 700 - me.width/2;
		}
		// eslint-disable-next-line no-magic-numbers
		if(me.globalY > 450 - me.height/2) {
			// eslint-disable-next-line no-magic-numbers
			me.globalY = 450 - me.height/2;
			// eslint-disable-next-line no-magic-numbers
			me.sprite.y = 450 - me.height/2;
		}
	};
	
	this.startGame = function(){
			this.addToCollisiion();
		
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
					if(me.bulletsAmount > 0 && rocketLives.lives > 0){
						// eslint-disable-next-line no-magic-numbers
						me.shoot({x: me.sprite.x, y: me.sprite.y, angle: 		me.sprite.rotation, rocketLength: me.sprite.height/2});

					} else {
						console.log("no bullets!");
					}
				}
			});		
		};
	
	this.on({ "notify:gameStarted" : this.startGame });
	
	this.shoot = function(config) {
		new Bullet(config);
		me.bulletsAmount--;
		me.showBulletsAmount();
		me.fireEvent("notify:rocket.fired", "arguments ", "added ", "using apply");
	};
	
	
}

Rocket.prototype = Object.create(Texture.prototype);
Rocket.prototype.constructor = Rocket;

Rocket.prototype.width = 90;
Rocket.prototype.height = 90;

Rocket.prototype.type = "rocket";
Rocket.prototype.speed = 2;
Rocket.prototype.angleStep = 0.05;

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
	this.sprite.rotation += step;
};

/**
 * 
 * @param {number} keyCode Keyboard keyCode
 * @param {boolean} status Enable/disable
 */
Rocket.prototype.setKey = function(keyCode, status){
	this.controls["key" + keyCode] = status;
};

Rocket.prototype.applyDamage = function(){
	// eslint-disable-next-line no-magic-numbers
	this.setPosition(50, 50);
	this.sprite.rotation = 0;
	// eslint-disable-next-line no-magic-numbers	
	rocketLives.changeLivesAmount( -1 );
};

Rocket.prototype.applyLive = function(){
	// eslint-disable-next-line no-magic-numbers
	rocketLives.changeLivesAmount( 1 );
};

Rocket.prototype.showBulletsAmount = function(){
	console.log("bullets amount is: " + this.bulletsAmount);
};

Rocket.prototype.applyAmmo = function(){
	this.bulletsAmount += 7;
	this.showBulletsAmount();
};


