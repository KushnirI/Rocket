/**
 * 
 * @constructor
 * @param {object} config Start bullet configurations
 * @param {number} config.x Center of parent x
 * @param {number} config.y Center of parent y
 * @param {number} config.angle Parent direction
 * @param {number} config.rocketLength Distance from parent center to parent end
 */
// eslint-disable-next-line no-unused-vars
function Bullet(config){
	//this = {};
	PIXI.Sprite.call(this, textures["bullet.png"]);

	this.x = this.getStartX(config.x, config.angle, config.rocketLength);
	this.y = this.getStartY(config.y, config.angle, config.rocketLength);
	this.width = 18;
	this.height = 18;
	// eslint-disable-next-line no-magic-numbers
	this.anchor.set(0.5);

	this.rotation = config.angle;
	// eslint-disable-next-line no-magic-numbers
	this.radius = this.width/2;

	collisionDetection.push(this);
	renderLoop.push(this);
	app.stage.addChild(this);
	//return this;
}
Bullet.prototype = Object.create(PIXI.Sprite.prototype);
Bullet.prototype.constructor = Bullet;

Bullet.prototype.speed = 3;
Bullet.prototype.type = "bullet";

/**
 * 
 * @param {number} parentCenterX Center of parent x
 * @param {number} parentAngle Parent direction
 * @param {number} parentHalfLength Displacement from parent center to parent end
 * @return {number} Start x
*/
Bullet.prototype.getStartX = function(parentCenterX, parentAngle, parentHalfLength) {
	// eslint-disable-next-line no-magic-numbers
	return parentCenterX + Math.cos(parentAngle - Math.PI/2) * parentHalfLength;
};
/**
 * 
 * @param {number} parentCenterY Center of parent y
 * @param {number} parentAngle Parent direction
 * @param {number} parentHalfLength Displacement from parent center to parent end
 * @return {number} Start y
*/
Bullet.prototype.getStartY = function(parentCenterY, parentAngle, parentHalfLength) {
	// eslint-disable-next-line no-magic-numbers
	return parentCenterY + Math.sin(parentAngle - Math.PI/2) * parentHalfLength;
};

	
Bullet.prototype.update = function(){
	this.move(this.speed);
	// eslint-disable-next-line no-magic-numbers
	if(this.x > 1000  || this.y > 1000 ||this.x < -200 || this.y < -200) {

	this.visible = false;
	filtrationRequired = true;
	}
};

Bullet.prototype.move = function(step){
	// eslint-disable-next-line no-magic-numbers
	this.x += Math.cos(this.rotation - Math.PI/2) * step;
	// eslint-disable-next-line no-magic-numbers
	this.y += Math.sin(this.rotation - Math.PI/2) * step;

};

	


