// eslint-disable-next-line no-unused-vars
function Circle(x, y, radius){
	var me = this;
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.type = "bot";
	this.strokeColor = "grey";
	this.lineWidth = 1;
	this.shouldFill = true;
	this.fillColor = "grey";
	this.hp = 1;
	this.shouldDraw = true;
	
	this.setStrokeColor = function(newColor){
		me.strokeColor = newColor;
	};
	
	this.setLineWidth = function(newWidth){
		me.lineWidth = newWidth;
	};
	
	this.enableFill = function(boolean){
		me.shouldFill = boolean;
	};
	
	this.setFillColor = function(newColor){
		me.fillColor = newColor;
	};
	this.getDemage = function(){
		if(!me.hp){
			me.shouldDraw = false;
		}
		me.hp--;
		me.setFillColor("red");
	}
	
	this.update = function() {
		
	};
	
	this.draw = function(context){
		context.beginPath();
		context.save();
		context.strokeStyle = me.strokeColor;
		context.lineWidth = me.lineWidth;
		// eslint-disable-next-line no-magic-numbers
		context.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
		context.stroke();
		
		if(me.shouldFill){
			context.fillStyle = me.fillColor;
			context.fill();
		}
		context.stroke();
		context.restore();
	};
	
}

// eslint-disable-next-line no-unused-vars
function Rectangle(x, y, width, height, color){
	var me = this;
	
	this.x = x;
	this.y = y;
	this.width = width;
	this. height = height;
	this.strokeColor = "black";
	this.lineWidth = 1;
	this.shouldFill = true;
	this.fillColor = color;
	this.shouldDraw = true;
	
	this.setStrokeColor = function(newColor){
		me.strokeColor = newColor;
	};
	
	this.setLineWidth = function(newWidth){
		me.lineWidth = newWidth;
	};
	
	this.setFill = function(boolean){
		me.shouldFill = boolean;
	};
	
	this.setFillColor = function(newColor){
		me.fillColor = newColor;
	};
	
	this.draw = function(context){
		context.save();
		context.beginPath();
		context.strokeStyle = me.strokeColor;
		context.lineWidth = me.lineWidth;
		context.rect(me.x, me.y, me.width, me.height);
		
		if(me.shouldFill){
			context.fillStyle = me.fillColor;
			context.fill();
		}
		context.stroke();
		context.restore();
	};
}

// eslint-disable-next-line no-unused-vars
function Bot(x, y, width, height){
	var me = this;
	
	this.width = width;
	this.height = height;
	// eslint-disable-next-line no-magic-numbers
	this.x = x + me.width/2;
	// eslint-disable-next-line no-magic-numbers
	this.y = y + me.height/2;
	// eslint-disable-next-line no-magic-numbers
	this.radius = me.width/2;
	
	this.type = "bot";
	this.loaded = false;
	this.shouldDraw = true;
	
	this.image = new Image();
	this.image.onload = function(){
		me.loaded = true;
	};
	this.image.src = "images/bot.png";
	// eslint-disable-next-line no-magic-numbers
	this.healthLineGreen = new Rectangle(me.x - me.width/2, me.y + me.height/2, me.width, 10, "green");
	
	// eslint-disable-next-line no-magic-numbers
	this.healthLineRed = new Rectangle(me.x - me.width/2, me.y + me.height/2, 0, 10, "red");
	
	this.getDemage = function() {
		// eslint-disable-next-line no-magic-numbers
		me.healthLineRed.width += me.width/5;
		if (me.healthLineRed.width >= me.width) {
			me.shouldDraw = false;
		}
	};
	
	this.update = function(){
		
	};
	
	this.draw = function(ctx){
		if(me.loaded){
			ctx.save();
			// eslint-disable-next-line no-magic-numbers
			ctx.drawImage(me.image, me.x - me.width/2, me.y - me.height/2, me.width, me.height);
			me.healthLineGreen.draw(ctx);
			me.healthLineRed.draw(ctx);
			ctx.restore();
			
		}
	};
	
}
















