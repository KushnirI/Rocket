/**
 * 
 * @constructor
 * @param {number} x Position by X
 * @param {number} y Position by Y
 * @param {number} width Bar width
 * @param {number} height Bar height
 * @param {object} colorParams Custom color parameters
 */
// eslint-disable-next-line no-unused-vars
function HealthBar(x, y, width, height, colorParams){
	
	this.width = width;
	
	this.colors = {
		live : "green",
		animation : "yellow",
		damage : "red" 
	};
	
	if(colorParams){
		this.colors = {
			live : colorParams.live,
			animation : colorParams.animation,
			damage : colorParams.damage 
		};
	} 
	
	
	this.liveLine = new Rectangle(x, y, width, height, this.colors.live);
	// eslint-disable-next-line no-magic-numbers
	this.animationLine = new Rectangle(x, y, 0, height, this.colors.animation);
	// eslint-disable-next-line no-magic-numbers
	this.damageLine = new Rectangle(x, y, 0, height, this.colors.damage);
	
}

HealthBar.prototype.animationStep = 1;

/**
 * 
 * @param {number} healthPoints Amount of health points
 */
HealthBar.prototype.applyDamage = function(healthPoints){
	this.damageLine.width += this.width/healthPoints;
	this.animationLine.width += this.width/healthPoints;
};

HealthBar.prototype.animate = function() {
	
	if(this.animationLine.width < this.animationStep){
		this.animationLine.x += this.animationLine.width;
		this.animationLine.width = 0
	} else {
		this.animationLine.x += this.animationStep;
		this.animationLine.width -= this.animationStep;
	}	
};

HealthBar.prototype.draw = function(ctx){
	this.liveLine.draw(ctx);
	this.damageLine.draw(ctx);
	this.animationLine.draw(ctx);
};