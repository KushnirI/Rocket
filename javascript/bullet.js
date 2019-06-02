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

	this.x = this.getStartX(config.x, config.angle, config.rocketLength);
	this.y = this.getStartY(config.y, config.angle, config.rocketLength);

	CollisionTexture.call(this, this.x, this.y, "bullet.png");

	this.sprite.rotation = config.angle;
	
	collisionDetection.push(this);
	//return this;
}

Bullet.prototype = Object.create(Texture.prototype);
Bullet.prototype.constructor = Bullet;

Bullet.prototype.width = 18;
Bullet.prototype.height = 18;
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
	return parentCenterX - this.width/2 + Math.cos(parentAngle - Math.PI/2) * parentHalfLength;
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
	return parentCenterY - this.height/2 + Math.sin(parentAngle - Math.PI/2) * parentHalfLength;
};

	
Bullet.prototype.update = function(){
	this.move(this.speed);
	// eslint-disable-next-line no-magic-numbers
	if(this.globalX > 1000  || this.globalY > 1000 ||this.globalX  < -200 || this.globalY < -200) {

	this.sprite.visible = false;
	filtrationRequired = true;
	}
};

	


