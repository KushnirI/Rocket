// eslint-disable-next-line no-unused-vars
function RocketLifes(){
	
	this.lives = 2;
	
	this.imgPanel = [
		// eslint-disable-next-line no-magic-numbers
		new Texture(0, 10, "images/heart.png"),
		// eslint-disable-next-line no-magic-numbers
		new Texture(30, 10, "images/heart.png"),
		// eslint-disable-next-line no-magic-numbers
		new Texture(60, 10, "images/heart.png"),
		// eslint-disable-next-line no-magic-numbers
		new Texture(90, 10, "images/plus.png")
	];
	
	drawElements.push(this);

}

RocketLifes.prototype.update = function () {
	// eslint-disable-next-line no-magic-numbers
	if(this.lives <= 0) {
		console.log("GAME OVER!!!")
		rocket.shouldDraw = false;
		this.shouldDraw = false
	}
};

RocketLifes.prototype.shouldDraw = true;

RocketLifes.prototype.draw = function(ctx){
	
	var visibleLine = Math.min(this.imgPanel.length, this.lives);
	
	for(var i = 0; i < visibleLine; i++){
			if(this.imgPanel[i].loaded){				
			this.imgPanel[i].draw(ctx);	
		}	
	}
};

/**
 * 
 * @param {number} amount Lifes amount displacement
 */
RocketLifes.prototype.changeLifesAmount = function(amount){
	this.lives += amount;
}
	