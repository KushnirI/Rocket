// eslint-disable-next-line no-unused-vars
function Rocket(x, y, fileName){
	let me = this;
	PIXI.Sprite.call(this, textures[fileName]);
	this.width = 90;
	this.height = 90;
	this.rotation = 0;
	// eslint-disable-next-line no-magic-numbers
	this.anchor.set(0.5);
	this.bulletsAmount = 5;
	this.showBulletsAmount();
	// eslint-disable-next-line no-magic-numbers
	this.radius = this.width/2;

	this.controls = {
		key37 : false,
		key38 : false,
		key39 : false,
		key40 : false
	};
	
	this.move = function(step){
		// eslint-disable-next-line no-magic-numbers
		this.x += Math.cos(this.rotation - Math.PI/2) * step;
		// eslint-disable-next-line no-magic-numbers
		this.y += Math.sin(this.rotation - Math.PI/2) * step;
		
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
		if(me.x > 700 - me.width/2) {
			// eslint-disable-next-line no-magic-numbers
			me.x = 700 - me.width/2;
		}
		// eslint-disable-next-line no-magic-numbers
		if(me.y > 450 - me.height/2) {
			// eslint-disable-next-line no-magic-numbers
			me.y = 450 - me.height/2;
		}
	};
	
	this.startGame = function(){
			collisionDetection.push(this);
		
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
						me.shoot({x: me.x, y: me.y, angle: me.rotation, rocketLength: me.height/2});

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
	renderLoop.push(this);
	app.stage.addChild(this);
	this.position.set(x, y);
}

Rocket.prototype = Object.create(PIXI.Sprite.prototype);
Rocket.prototype.constructor = Rocket;

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
	this.rotation += step;
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
	this.position.set(60, 90);
	this.rotation = 0;
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

/**
 *
 * @param {object} params  {Object.<string, function>}
 */
Rocket.prototype.on = function (params) {
	if (!this.eventHandlers) {
		this.eventHandlers = {};

	}

	for (let key in params) {
		if (params.hasOwnProperty(key)) {
			if (!this.eventHandlers[key]) {
				events.addListener(key, this);
			}

			this.eventHandlers[key] = params[key];
		}
	}
};

Rocket.prototype.fireEvent = function () {
	let argumentsArray = [].slice.call(arguments);
	// eslint-disable-next-line no-magic-numbers
	let eventArgs = argumentsArray.slice(1);

	// eslint-disable-next-line no-magic-numbers
	events.fireEvent(argumentsArray[0], eventArgs);
};

