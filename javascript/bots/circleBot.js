/**
 * 
 * @constructor
 * @param {number} x Position by X
 * @param {number} y Position by Y
 * @param {number} radius Obj radius
 */
// eslint-disable-next-line no-unused-vars
function CircleBot(x, y, radius){
	
	Figure.apply(this, arguments);
	
	this.radius = radius;
	
	this.setStrokeColor("grey");
	this.setFillColor("grey");
	
	this.healthPoints = 1;
	drawElements.push(this);
	collisionDetection.push(this);
}

CircleBot.prototype = Object.create(Figure.prototype);
CircleBot.prototype.constructor = CircleBot;

CircleBot.prototype.applyDamage = function(){
	// eslint-disable-next-line no-magic-numbers
	if(this.healthPoints <= 0){
		this.shouldDraw = false;
	}
	this.healthPoints--;
	this.setFillColor("red");
	
}

CircleBot.prototype.type = "bot";
	
CircleBot.prototype.drawFigure = function(ctx){
	// eslint-disable-next-line no-magic-numbers
	ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
};