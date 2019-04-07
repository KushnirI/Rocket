// eslint-disable-next-line no-unused-vars
function ImgObject(x, y, fileName){
	var me = this;
	// eslint-disable-next-line no-magic-numbers
	this.x = x + this.width/2;
	// eslint-disable-next-line no-magic-numbers
	this.y = y + this.height/2;
	// eslint-disable-next-line no-magic-numbers
	this.radius = this.width/2;
	
	this.shouldDraw = true;
	this.loaded = false;
	
	this.image = new Image();
	this.image.onload = function(){
		
		me.loaded = true;
	};  
	this.image.src = fileName;
}


	/**
	 * 
	 * @param {number} newX New x position
	 * @param {number} newY New y position
	 */
ImgObject.prototype.setPosition = function(newX, newY){
	// eslint-disable-next-line no-magic-numbers
	this.x = newX + this.width/2;
	// eslint-disable-next-line no-magic-numbers
	this.y = newY + this.height/2;
};
	/**
	 * 
	 * @param {number} step one frame displacement
	 */
ImgObject.prototype.move = function(step){
	// eslint-disable-next-line no-magic-numbers
	this.x += Math.cos(this.angle - Math.PI/2) * step;
	// eslint-disable-next-line no-magic-numbers
	this.y += Math.sin(this.angle - Math.PI/2) * step;
	
};
	
	
ImgObject.prototype.draw = function(ctx){
	if(this.loaded){				
		ctx.save();
		ctx.translate(this.x, this.y);
		ctx.rotate(this.angle);
		// eslint-disable-next-line no-magic-numbers
		ctx.drawImage(this.image, -this.width/2, -this.height/2,this.width, this.height);
		ctx.restore();		
	}
};

ImgObject.prototype.update = function(){
	
};

ImgObject.prototype.width = 30;
ImgObject.prototype.height = 30;







