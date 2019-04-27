/**
 * 
 * @constructor
 * @param {number} x Position by X
 * @param {number} y Position by Y
 * @param {number} width Obj width
 * @param {number} height Obj height
 * @param {object} colorParams Custom color parameters for health bar
 */
// eslint-disable-next-line no-unused-vars
function UfoBot(x, y, width, height, colorParams){
	var me = this;
	
	this.width = width;
	this.height = height;
	
	CollisionTexture.call(this, x, y, "images/bot.png");
	
	this.currentHealthPoints = 5;
	// eslint-disable-next-line no-magic-numbers
	this.healthBar = new HealthBar(me.x - me.width/2, me.y + me.height/2, me.width, 10, colorParams)
	
	this.healthBar.healthPoints = this.startHealthPoints;
}

UfoBot.prototype = Object.create(Texture.prototype);
UfoBot.prototype.constructor = UfoBot;

UfoBot.prototype.type = "bot";
UfoBot.prototype.startHealthPoints = 5;

UfoBot.prototype.update = function (){
	this.healthBar.animate();
	if(this.selected === true){
		// eslint-disable-next-line no-magic-numbers
		this.healthBar.setPosition(this.x - this.width/2, this.y + this.height/2)
	}
	
}

UfoBot.prototype.draw = function(ctx){
	if(this.loaded){
		ctx.save();
		// eslint-disable-next-line no-magic-numbers
		ctx.drawImage(this.image, this.x - this.width/2,this.y - this.height/2, this.width, this.height);
		this.healthBar.draw(ctx);
		ctx.restore();
			
	}
};

UfoBot.prototype.applyDamage = function() {
	this.healthBar.applyDamage();
	// eslint-disable-next-line no-magic-numbers	
	if ( --this.currentHealthPoints === 0 ) {
		this.shouldDraw = false;
	}
	
	this.fireEvent("notify:bot.damaged");
}
