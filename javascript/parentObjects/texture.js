/**
 * 
 * @constructor
 * @param {number} x Position by X
 * @param {number} y Position by Y
 * @param {string} fileName Source to img file
 */
// eslint-disable-next-line no-unused-vars
function Texture(x, y, fileName){
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
	
	//if fileName is not added then imgSrc from child object should be used 
	this.setImgSrc(fileName || this.imgSrc);
	
}

Texture.prototype = Object.create(Observable.prototype);
Texture.prototype.constructor = Texture;

	/**
	 * 
	 * @param {number} newX New x position
	 * @param {number} newY New y position
	 */
Texture.prototype.setPosition = function(newX, newY){
	// eslint-disable-next-line no-magic-numbers
	this.x = newX + this.width/2;
	// eslint-disable-next-line no-magic-numbers
	this.y = newY + this.height/2;
};
	/**
	 * 
	 * @param {number} step one frame displacement
	 */
Texture.prototype.move = function(step){
	// eslint-disable-next-line no-magic-numbers
	this.x += Math.cos(this.angle - Math.PI/2) * step;
	// eslint-disable-next-line no-magic-numbers
	this.y += Math.sin(this.angle - Math.PI/2) * step;
	
};
	
	
Texture.prototype.draw = function(ctx){
	if(this.loaded){				
		ctx.save();
		ctx.translate(this.x, this.y);
		ctx.rotate(this.angle);
		// eslint-disable-next-line no-magic-numbers
		ctx.drawImage(this.image, -this.width/2, -this.height/2,this.width, this.height);
		ctx.restore();		
	}
};

//Stub method, should be overridden in child classes
Texture.prototype.update = function(){
	
};

/**
 * 
 @param {string} source Source to img file
 */
Texture.prototype.setImgSrc = function(source){
	this.image.src = source;
};

Texture.prototype.width = 30;
Texture.prototype.height = 30;

Texture.prototype.selected = false;








