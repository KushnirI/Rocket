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

Rectangle.prototype.draw = function(ctx){
	ctx.save();
	ctx.beginPath();
	ctx.strokeStyle = this.strokeColor;
	ctx.lineWidth = this.lineWidth;
	ctx.rect(this.x, this.y, this.width, this.height);
		
	if(this.shouldFill){
		ctx.fillStyle = this.fillColor;
		ctx.fill();
	}
	ctx.stroke();
	ctx.restore();
};


