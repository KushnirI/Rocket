// eslint-disable-next-line no-unused-vars
function CollisionTexture () {
	var me = this;
	Texture.apply(this, arguments);
	
	drawElements.push(this);
	
	this.on({"notify:gameStarted" : function () {
			collisionDetection.push(me);
		} 
	});
}

CollisionTexture.prototype = Object.create(Observable.prototype);
CollisionTexture.prototype.constructor = CollisionTexture;