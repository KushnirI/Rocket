import {textures} from "./engine";
import {renderLoop, collisionDetection, app, makeFiltration} from "./engine";


/**
 * 
 * @constructor
 * @param {object} config Start bullet configurations
 * @param {number} config.x Center of parent x
 * @param {number} config.y Center of parent y
 * @param {number} config.angle Parent direction
 * @param {number} config.rocketLength Distance from parent center to parent end
 */
export class Bullet extends PIXI.Sprite{
	constructor(config){
		super(textures["bullet.png"]);
		this.x = this.getStartX(config.x, config.angle, config.rocketLength);
		this.y = this.getStartY(config.y, config.angle, config.rocketLength);
		this.width = 18;
		this.height = 18;
		// eslint-disable-next-line no-magic-numbers
		this.anchor.set(0.5);
		this.speed = 3;
		this.type = "bullet";
		this.rotation = config.angle;
		// eslint-disable-next-line no-magic-numbers
		this.radius = this.width/2;

		collisionDetection.push(this);
		renderLoop.push(this);
		app.stage.addChild(this);
	}

	/**
	 *
	 * @param {number} parentCenterX Center of parent x
	 * @param {number} parentAngle Parent direction
	 * @param {number} parentHalfLength Displacement from parent center to parent end
	 * @return {number} Start x
	 */
	getStartX(parentCenterX, parentAngle, parentHalfLength) {
		// eslint-disable-next-line no-magic-numbers
		return parentCenterX + Math.cos(parentAngle - Math.PI/2) * parentHalfLength;
	}

	/**
	 *
	 * @param {number} parentCenterY Center of parent y
	 * @param {number} parentAngle Parent direction
	 * @param {number} parentHalfLength Displacement from parent center to parent end
	 * @return {number} Start y
	 */
	getStartY(parentCenterY, parentAngle, parentHalfLength) {
		// eslint-disable-next-line no-magic-numbers
		return parentCenterY + Math.sin(parentAngle - Math.PI/2) * parentHalfLength;
	}

	update() {
		this.move(this.speed);
		// eslint-disable-next-line no-magic-numbers
		if(this.x > 1000  || this.y > 1000 ||this.x < -200 || this.y < -200) {

			this.visible = false;
			makeFiltration();
		}
	}

	move(step){
	// eslint-disable-next-line no-magic-numbers
	this.x += Math.cos(this.rotation - Math.PI/2) * step;
	// eslint-disable-next-line no-magic-numbers
	this.y += Math.sin(this.rotation - Math.PI/2) * step;

	}
}

	


