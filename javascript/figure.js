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

Figure.prototype.draw = function(ctx){
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = this.strokeColor;
    ctx.lineWidth = this.lineWidth;

	this.drawFigure(ctx);

    if(this.shouldFill){
        ctx.fillStyle = this.fillColor;
        ctx.fill();
    }
    ctx.stroke();
    ctx.restore();
};

Figure.prototype.drawFigure = function (){

};
	
	
	
	































