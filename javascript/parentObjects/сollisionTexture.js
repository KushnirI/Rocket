// eslint-disable-next-line no-unused-vars
function CollisionTexture () {
	var me = this;
	Texture.apply(this, arguments);
	
	drawElements.push(this);
	
	this.on({"notify:gameStarted" : function () {
			collisionDetection.push(me);
		
		} 
	});
	if (gameLaunched === true){
		collisionDetection.push(this);
	}
}

CollisionTexture.prototype = Object.create(Observable.prototype);
CollisionTexture.prototype.constructor = CollisionTexture;