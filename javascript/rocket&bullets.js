// eslint-disable-next-line no-unused-vars
function Rocket(fileName, x, y){
	var me = this;
	this.x = x;
	this.y = y;
	this.width = 90;
	this.height = 90;
	this.radius = me.width/2;
	this.type = "rocket";
	this.dx = me.x + me.width/2;
	this.dy = me.y + me.height/2;
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
	
	this.setPosition = function(newX, newY){
		me.x = newX;
		me.y = newY;
	};
	
	this.move = function(step){
		me.x += Math.cos(me.angle - Math.PI/2) * step;
		me.y += Math.sin(me.angle - Math.PI/2) * step;
	
		if(me.x < zeroCordinate) {
			me.x = 0;
		}
		if(me.y < zeroCordinate) {
			me.y = 0;
		}
		if(me.x > canvasWidth - me.width) {
			me.x = canvasWidth - me.width;
		}
		if(me.y > canvasHeight - me.height) {
			me.y = canvasHeight - me.height;
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
		
		me.dx = me.x + me.width/2;
		me.dy = me.y + me.height/2;
		
	};
	
	this.draw = function(ctx){
		if(me.loaded){
			var widthCenter = me.width/2;
			var heightCenter = me.height/2;
			
			ctx.save();
			ctx.translate(me.x + widthCenter, me.y + heightCenter);
			ctx.rotate(me.angle);
			ctx.drawImage(me.image, -widthCenter, -heightCenter, me.width, me.height);
			ctx.restore();		
		}
	};
}

// eslint-disable-next-line no-unused-vars
function Bullet(params){
	var me = this;
	this.x = params[0];
	this.y = params[1];
	this.speed = 6;
	this.width = 18;
	this.height = 18;
	this.radius = me.width/2;
	this.type = "bullet";
	
	this.dx = me.x + me.width/2;
	this.dy = me.y + me.height/2;
	this.angle = params[2];
	this.loaded = false;
	this.shouldDraw = true;
		
	this.image = new Image();
	this.image.onload = function(){
		me.loaded = true;
	};  
	this.image.src = "images/bullet.png";
	
	this.move = function(){
		me.x = me.x + Math.cos(me.angle - Math.PI/2) * me.speed;
		me.y = me.y + Math.sin(me.angle - Math.PI/2) * me.speed;
		me.dx = me.x + me.width/2;
		me.dy = me.y + me.height/2;
	};
	
	this.update = function(){
		me.move();
		if(me.x > canvasWidth * 2 || me.y > canvasHeight *2 ||me.x < -canvasWidth || me.y < -canvasHeight) {
		me.shouldDraw = false;	
		}
	};
	
	this.draw = function(ctx){
		if(me.loaded){
			var widthCenter = me.width/2;
			var heightCenter = me.height/2;
			
			ctx.save();
			ctx.translate(me.x + widthCenter, me.y + heightCenter);
			ctx.rotate(me.angle);
			ctx.drawImage(me.image, -widthCenter, -heightCenter, me.width, me.height);
			ctx.restore();		
		}
	};
}

