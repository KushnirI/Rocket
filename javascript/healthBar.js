// eslint-disable-next-line no-unused-vars
function HealthBar(x, y, width, height, colorParams){
	
	this.width = width;
	
	if(colorParams){
		this.colors = {
			live : colorParams.live,
			animation : colorParams.animation,
			damage : colorParams.damage 
		};
	} else {
		this.colors = {
			live : "green",
			animation : "yellow",
			damage : "red" 
		};
	}
	
	
	this.liveLine = new Rectangle(x, y, width, height, this.colors.live);
	// eslint-disable-next-line no-magic-numbers
	this.animationLine = new Rectangle(x, y, 0, height, this.colors.animation);
	// eslint-disable-next-line no-magic-numbers
	this.animationLine.setLineWidth(0);
	// eslint-disable-next-line no-magic-numbers
	this.damageLine = new Rectangle(x, y, 0, height, this.colors.damage);
	
}

HealthBar.prototype.animationStep = 1;

/**
 * 
 * @param {number} hp Amount of health points
 */
HealthBar.prototype.getDamage = function(hp){
	this.damageLine.width += this.width/hp;
	this.animationLine.width += this.width/hp;
};

HealthBar.prototype.animation = function() {
	
	if(this.animationLine.width < this.animationStep){
		this.animationLine.x += this.animationLine.width;
		this.animationLine.width = 0
	} else {
		this.animationLine.x += this.animationStep;
		this.animationLine.width -= this.animationStep;
	}	
}

HealthBar.prototype.draw = function(ctx){
	this.liveLine.draw(ctx);
	this.damageLine.draw(ctx);
	this.animationLine.draw(ctx);
};















