/**
 * 
 * @constructor
 * @param {number} x Position by X
 * @param {number} y Position by 
 */
// eslint-disable-next-line no-unused-vars
function Figure(x, y){
		
	this.x = x;
	this.y = y;
	
	this.lineWidth = 1;
	this.shouldFill = true;
	
	this.shouldDraw = true;
}

/**
 * 
 * @param {string} newColor Border color
 */
Figure.prototype.setStrokeColor = function(newColor){
	this.strokeColor = newColor;
};

/**
 * 
 * @param {number} newWidth Border width
 */
Figure.prototype.setLineWidth = function(newWidth){
	this.lineWidth = newWidth;
};
/**
 * 
 * @param {boolean} boolean Enable/Disable figure filling
 */
Figure.prototype.enableFill = function(boolean){
	this.shouldFill = boolean;
};

/**
 * 
 * @param {string} newColor Object color
 */
Figure.prototype.setFillColor = function(newColor){
	this.fillColor = newColor;
};

	
Figure.prototype.update = function() {
		
};

/**
 * 
 * @param {number} newX New x position
 * @param {number} newY New y position
 */
Figure.prototype.setPosition = function(newX, newY){
	this.x = newX
	this.y = newY
};

Figure.prototype.draw = function(ctx){
	ctx.save();
	ctx.beginPath();
	ctx.strokeStyle = this.strokeColor;
	ctx.lineWidth = this.lineWidth;
	
	// Each child object should have his own drawFigure method to be able to draw required figure between save and restore of context
	this.drawFigure(ctx)
		
	if(this.shouldFill){
		ctx.fillStyle = this.fillColor;
		ctx.fill();
	}
	ctx.stroke();
	ctx.restore();
};
