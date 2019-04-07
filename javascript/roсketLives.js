// eslint-disable-next-line no-unused-vars
function RocketLives(){
	
	this.lives = 2;
	
	this.imgPanel = [
		// eslint-disable-next-line no-magic-numbers
		new ImgObject(0, 10, "images/heart.png"),
		// eslint-disable-next-line no-magic-numbers
		new ImgObject(30, 10, "images/heart.png"),
		// eslint-disable-next-line no-magic-numbers
		new ImgObject(60, 10, "images/heart.png"),
		// eslint-disable-next-line no-magic-numbers
		new ImgObject(90, 10, "images/plus.png")
	];
	
	drawElements.push(this);

}

RocketLives.prototype.update = function () {
	
};

RocketLives.prototype.shouldDraw = true;

RocketLives.prototype.draw = function(ctx){
	
	var max = 4;
	if(this.lives < max){
		max = this.lives;
	}
	
	for(var i = 0; i < max; i++){
			if(this.imgPanel[i].loaded){				
			this.imgPanel[i].draw(ctx);	
		}	
	}
	// eslint-disable-next-line no-magic-numbers
	if(this.lives <= 0) {
		console.log("GAME OVER!!!")
		rocket.shouldDraw = false;
		this.shouldDraw = false
	}
	
};

RocketLives.prototype.changeLiveAmount = function(amount){
	this.lives += amount;
}
	


