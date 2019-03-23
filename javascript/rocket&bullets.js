// eslint-disable-next-line no-unused-vars
function Rocket(fileName, x, y){
	var me = this;
	
	this.width = 90;
	this.height = 90;
	this.radius = me.width/2;
	this.type = "rocket";
	this.x = x + me.width/2;
	this.y = y + me.height/2;
	this.shouldDraw = true;
	
	this.loaded = false;
	this.angle = 0;
	this.speed = 4;
	this.angleStep = 0.1;
	this.controls = {
		key37 : false,
		key38 : false,
		key39 : false,
		key40 : false
	};
	this.setKey = function(keyCode, status){
		me.controls["key" + keyCode] = status;
	};
	
	this.image = new Image();
	this.image.onload = function(){
		me.loaded = true;
	};  
	this.image.src = fileName;
	/**
	 * 
	 * @param {number} newX New x position
	 * @param {number} newY New y position
	 */
	this.setPosition = function(newX, newY){
		me.x = newX + me.width/2;
		me.y = newY + me.height/2;
	};
	/**
	 * 
	 * @param {number} step one frame displacement
	 */
	this.move = function(step){
		me.x += Math.cos(me.angle - Math.PI/2) * step;
		me.y += Math.sin(me.angle - Math.PI/2) * step;
	
		if(me.x < me.width/2) {
			me.x = me.width/2;
		}
		if(me.y < me.height/2) {
			me.y = me.height/2;
		}
		
		if(me.x > canvasWidth - me.width/2) {
			me.x = canvasWidth - me.width/2;
		}
		if(me.y > canvasHeight - me.height/2) {
			me.y = canvasHeight - me.height/2;
		}
	};
	
	this.changeAngle = function(step){
		me.angle += step;
	};
	
	this.update = function(){
		
		if(me.controls.key38){
			me.move(me.speed);
		}
		if(me.controls.key40){
			me.move(-me.speed);
		}
		if(me.controls.key37){
			me.changeAngle(-me.angleStep);
		}
		if(me.controls.key39){
			me.changeAngle(me.angleStep);
		}
		
		/*me.dx = me.x + me.width/2;
		me.dy = me.y + me.height/2;*/
		
	};
	
	this.draw = function(ctx){
		if(me.loaded){
			/*var widthCenter = me.width/2;
			var heightCenter = me.height/2;*/
			
			ctx.save();
			ctx.translate(me.x, me.y);
			ctx.rotate(me.angle);
			ctx.drawImage(me.image, -me.width/2, -me.height/2, me.width, me.height);
			ctx.restore();		
		}
	};
}

// eslint-disable-next-line no-unused-vars
function Bullet(config){
	//this = {};
	var me = this;
	
	this.speed = 6;
	this.width = 18;
	this.height = 18;
	
	this.x = this.getStartX(config.x, config.angle, config.rocketLength);
	this.y = this.getStartY(config.y, config.angle, config.rocketLength);
	this.radius = me.width/2;
	this.type = "bullet";
	
	/*this.dx = me.x + me.width/2;
	this.dy = me.y + me.height/2;*/
	this.angle = config.angle;
	this.loaded = false;
	this.shouldDraw = true;
		
	this.image = new Image();
	this.image.onload = function(){
		me.loaded = true;
	};  
	this.image.src = "images/bullet.png";
	drawElements.push(this);
	collisionDetection.push(this);
	//return this;
}

/**
 * 
 * @param {number} parentCenterX center of parent x
 * @param {number} parentAngle [[Description]]
 * @param {number} parentHalfLength [[Description]]
 * @return {number} [[Description]]
*/
Bullet.prototype.getStartX = function(parentCenterX, parentAngle, parentHalfLength) {
	return parentCenterX + Math.cos(parentAngle - Math.PI/2) * parentHalfLength;
};
Bullet.prototype.getStartY = function(parentCenterY, parentAngle, parentHalfLength) {
	return parentCenterY + Math.sin(parentAngle - Math.PI/2) * parentHalfLength;
};

/*Bullet.prototype.getStartX = function(parentCenterX, parentAngle, parentHalfLength) {
	return parentCenterX - this.width/2 + Math.cos(parentAngle - Math.PI/2) * parentHalfLength;
};
Bullet.prototype.getStartY = function(parentCenterY, parentAngle, parentHalfLength) {
	return parentCenterY - this.height/2 + Math.sin(parentAngle - Math.PI/2) * parentHalfLength;
};*/

Bullet.prototype.move = function(){
	this.x = this.x + Math.cos(this.angle - Math.PI/2) * this.speed;
	this.y = this.y + Math.sin(this.angle - Math.PI/2) * this.speed;
};
	
Bullet.prototype.update = function(){
	this.move();
	if(this.x > canvasWidth * 2 || this.y > canvasHeight *2 ||this.x < -canvasWidth || this.y < -canvasHeight) {
	this.shouldDraw = false;	
	}
};
	
Bullet.prototype.draw = function(ctx){
	if(this.loaded){	
		ctx.save();
		ctx.translate(this.x, this.y);
		ctx.rotate(this.angle);
		ctx.drawImage(this.image, -this.width/2, -this.height/2, this.width, this.height);
		ctx.restore();		
	}
};


