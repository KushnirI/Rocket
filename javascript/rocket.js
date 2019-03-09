var canvas = document.getElementById("canvas");
var canvasWidth = 700;
var canvasHeight = 450;
canvas.width = canvasWidth;
canvas.height = canvasHeight;

var ctx = canvas.getContext("2d");

function Rocket(fileName, x, y){
	var me = this;
	this.x = x;
	this.y = y;
	this.width = 80;
	this.height = 80;
	this.loaded = false;
	this.angle = 0;
	this.speed = 3;
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
		
		if(me.x < 0) {
			me.x = 0;
		}
		if(me.y < 0) {
			me.y = 0;
		}
		if(me.x > 700 - me.width) {
			me.x = 700 - me.width;
		}
		if(me.y > 450 - me.height) {
			me.y = 450 - me.height;
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
	};
	
	this.draw = function(ctx){
		if(me.loaded){
			ctx.save();
			ctx.translate(me.x + me.width/2, me.y + me.height/2);
			ctx.rotate(me.angle);
			ctx.drawImage(me.image, -me.width/2, -me.height/2, me.width, me.height);
			ctx.restore();		
		}
	};
}

var rocket = new Rocket('images/rocket.png', 50, 50);



setInterval(function(){
	ctx.clearRect(0, 0, canvasWidth, canvasHeight);
	rocket.update();
	rocket.draw(ctx);
},30);


document.addEventListener('keydown', function(event){
	rocket.setKey(event.keyCode, true);
});

document.addEventListener('keyup', function(event){
	rocket.setKey(event.keyCode, false);
});


rocket.setPosition(canvasWidth-rocket.width, canvasHeight - rocket.height);












