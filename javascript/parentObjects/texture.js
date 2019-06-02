/**
 * 
 * @constructor
 * @param {number} x Position by X
 * @param {number} y Position by Y
 * @param {string} fileName Source to img file
 */
// eslint-disable-next-line no-unused-vars
function Texture(x, y, fileName){

	this.sprite = new PIXI.Sprite(id[fileName]);
	this.sprite.anchor.x = 0.5;
	this.sprite.anchor.y = 0.5;
	
	// eslint-disable-next-line no-magic-numbers
	this.sprite.x = x + this.width/2;
	// eslint-disable-next-line no-magic-numbers
	this.sprite.y = y + this.height/2;

	this.globalX = this.sprite.x;
	this.globalY = this.sprite.y;
	
	this.sprite.width = this.width;
	this.sprite.height = this.height;
	
	// eslint-disable-next-line no-magic-numbers
	this.radius = this.width/2;

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
	this.sprite.x = newX + this.width/2;
	// eslint-disable-next-line no-magic-numbers
	this.sprite.y = newY + this.height/2;

	this.globalX = this.sprite.x;
	this.globalY = this.sprite.y;
};
	/**
	 * 
	 * @param {number} step one frame displacement
	 */
Texture.prototype.move = function(step){
	// eslint-disable-next-line no-magic-numbers
	this.sprite.x += Math.cos(this.sprite.rotation - Math.PI/2) * step;
	// eslint-disable-next-line no-magic-numbers
	this.sprite.y += Math.sin(this.sprite.rotation - Math.PI/2) * step;

	this.globalX = this.sprite.x;
	this.globalY = this.sprite.y;
	
};
	
//Stub method, should be overridden in child classes
Texture.prototype.update = function(){
	
};

Texture.prototype.width = 30;
Texture.prototype.height = 30;









