// eslint-disable-next-line no-unused-vars
function CircleBot(x, y, radius){
	
	Figure.apply(this, arguments);
	
	this.radius = radius;
	
	this.setStrokeColor("grey");
	this.setFillColor("grey");
	
	this.hp = 1;
	drawElements.push(this);
	collisionDetection.push(this);
}

CircleBot.prototype = Object.create(Figure.prototype);
CircleBot.prototype.constructor = CircleBot;

CircleBot.prototype.getDamage = function(){
	if(!this.hp){
		this.shouldDraw = false;
	}
	this.hp--;
	this.setFillColor("red");
};

CircleBot.prototype.type = "bot";
	
CircleBot.prototype.draw = function(ctx){
	ctx.beginPath();
	ctx.save();
	ctx.strokeStyle = this.strokeColor;
	ctx.lineWidth = this.lineWidth;
	// eslint-disable-next-line no-magic-numbers
	ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
				
	if(this.shouldFill){
		ctx.fillStyle = this.fillColor;
		ctx.fill();
	}
	ctx.stroke();
	ctx.restore();
};
	




















