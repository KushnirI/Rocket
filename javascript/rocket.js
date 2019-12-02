import {Bullet} from "./bullet";
import {events, textures, renderLoop, collisionDetection, app, rocketLives} from "./engine";

export class Rocket extends PIXI.Sprite{
	constructor(x, y, fileName){
		super(textures[fileName]);

		this.width = 90;
		this.height = 90;
		this.rotation = 0;
		this.selected = false;
		// eslint-disable-next-line no-magic-numbers
		this.anchor.set(0.5);
		this.bulletsAmount = 50;
		this.showBulletsAmount();
		// eslint-disable-next-line no-magic-numbers
		this.radius = this.width/2;

		this.controls = {
			key37 : false,
			key38 : false,
			key39 : false,
			key40 : false
		};

		this.type = "rocket";
		this.speed = 2;
		this.angleStep = 0.05;

		this.by({ "notify:gameStarted" : this.startGame });

		renderLoop.push(this);
		app.stage.addChild(this);
		this.position.set(x, y);

		this.startInteraction()
	}

	startInteraction() {
		this.interactive = true;
		this.on("mousedown", () => {
			this.selected = true;
		});

		this.on("mousemove", (event) => {
			if(this.selected){
				this.x = event.data.global.x;
				this.y = event.data.global.y;
			}
		});

		this.on("mouseup", () => {
			this.selected = false;
		});
	}

	move(step){
		// eslint-disable-next-line no-magic-numbers
		this.x += Math.cos(this.rotation - Math.PI/2) * step;
		// eslint-disable-next-line no-magic-numbers
		this.y += Math.sin(this.rotation - Math.PI/2) * step;

		// eslint-disable-next-line no-magic-numbers
		if(this.x < this.width/2) {
			// eslint-disable-next-line no-magic-numbers
			this.x = this.width/2;
		}
		// eslint-disable-next-line no-magic-numbers
		if(this.y < this.height/2) {
			// eslint-disable-next-line no-magic-numbers
			this.y = this.height/2;
		}
		// eslint-disable-next-line no-magic-numbers
		if(this.x > 700 - this.width/2) {
			// eslint-disable-next-line no-magic-numbers
			this.x = 700 - this.width/2;
		}
		// eslint-disable-next-line no-magic-numbers
		if(this.y > 450 - this.height/2) {
			// eslint-disable-next-line no-magic-numbers
			this.y = 450 - this.height/2;
		}
	}

	startGame() {
		collisionDetection.push(this);
		this.interactive = false;

		document.addEventListener("keydown", (event) => {
			this.setKey(event.keyCode, true);
		});

		document.addEventListener("keyup", (event) => {
			this.setKey(event.keyCode, false);
		});

		document.addEventListener("keypress", (event) =>{
			// eslint-disable-next-line no-magic-numbers
			if(event.keyCode === 32){
				// eslint-disable-next-line no-magic-numbers
				if(this.bulletsAmount > 0 && rocketLives.lives > 0){
					// eslint-disable-next-line no-magic-numbers
					this.shoot({x: this.x, y: this.y, angle: this.rotation, rocketLength: this.height/2});

				} else {
					console.log("no bullets!");
				}
			}
		});
	}

	shoot(config) {
		new Bullet(config);
		this.bulletsAmount--;
		this.showBulletsAmount();
		this.fireEvent("notify:rocket.fired", "arguments ", "added ", "using apply");
	}

	update(){

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
	}

	/**
	 *
	 * @param {number} step Amount of angle displacement
	 */
	changeAngle(step){
		this.rotation += step;
	}

	/**
	 *
	 * @param {number} keyCode Keyboard keyCode
	 * @param {boolean} status Enable/disable
	 */
	setKey(keyCode, status){
		this.controls["key" + keyCode] = status;
	}

	applyDamage(){
		// eslint-disable-next-line no-magic-numbers
		this.position.set(60, 90);
		this.rotation = 0;
		// eslint-disable-next-line no-magic-numbers
		rocketLives.changeLivesAmount( -1 );
	}

	applyLive(){
		// eslint-disable-next-line no-magic-numbers
		rocketLives.changeLivesAmount( 1 );
	}

	showBulletsAmount(){
		console.log("number of bullets: " + this.bulletsAmount);
	}

	applyAmmo(){
		this.bulletsAmount += 7;
		this.showBulletsAmount();
	}

	/**
	 *
	 * @param {object} params  {Object.<string, function>}
	 */
	by(params) {
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
	}

	fireEvent(eventName, ...args) {
		events.fireEvent(eventName, args);
	}
}