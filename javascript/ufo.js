// eslint-disable-next-line no-unused-vars
function UfoBot(x, y, width, height, colorParams){
	var me = this;
	
	this.width = width;
	this.height = height;
	
	ImgObject.apply(this, arguments);
	
	this.currentHp = 5;
	this.image.src = "images/bot.png";
	// eslint-disable-next-line no-magic-numbers
	this.healthBar = new HealthBar(me.x - me.width/2, me.y + me.height/2, me.width, 10, colorParams)
	
	drawElements.push(this);
	collisionDetection.push(this);
	
}

UfoBot.prototype = Object.create(ImgObject.prototype);
UfoBot.prototype.constructor = UfoBot;

UfoBot.prototype.type = "bot";
UfoBot.prototype.startHp = 5;

UfoBot.prototype.update = function (){
	this.healthBar.animation();
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

UfoBot.prototype.getDamage = function() {
	this.healthBar.getDamage(this.startHp);
	// eslint-disable-next-line no-magic-numbers	
	if ( --this.currentHp === 0 ) {
		this.shouldDraw = false;
	}
}
















