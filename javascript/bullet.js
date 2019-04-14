/**
 * 
 * @constructor
 * @param {object} config Start bullet configurations
 */
// eslint-disable-next-line no-unused-vars
function Bullet(config){
	//this = {};
		
	DrawAndCollision.apply(this, arguments);
	
	this.angle = config.angle;
	
	this.x = this.getStartX(config.x, config.angle, config.rocketLength);
	this.y = this.getStartY(config.y, config.angle, config.rocketLength);
	
	//return this;
}

Bullet.prototype = Object.create(Texture.prototype);
Bullet.prototype.constructor = Bullet;

Bullet.prototype.width = 18;
Bullet.prototype.height = 18;
Bullet.prototype.speed = 6;
Bullet.prototype.type = "bullet";
Bullet.prototype.imgSrc = "images/bullet.png";

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
	if(this.x > canvasWidth * 2 || this.y > canvasHeight *2 ||this.x < -canvasWidth || this.y < -canvasHeight) {
	this.shouldDraw = false;	
	}
};

	


