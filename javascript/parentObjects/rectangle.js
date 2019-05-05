/**
 * 
 * @constructor
 * @param {number} x Position by X
 * @param {number} y Position by Y
 * @param {number} width Obj width
 * @param {number} height Obj height
 * @param {string} color Filling color
 */
// eslint-disable-next-line no-unused-vars
function Rectangle(x, y, width, height, color){

	Figure.apply(this, arguments);
	
	this.width = width;
	this. height = height;
	
	this.setStrokeColor("black");
	this.setFillColor(color);
}

Rectangle.prototype = Object.create(Figure.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.drawFigure = function(ctx){
	ctx.rect(this.x, this.y, this.width, this.height);
};

