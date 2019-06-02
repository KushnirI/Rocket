// eslint-disable-next-line no-unused-vars
function CollisionTexture () {
	Texture.apply(this, arguments);

	drawElements.push(this);
	app.stage.addChild(this.sprite);
	
	this.addToCollisiion = function () {
			collisionDetection.push(this);
	};
	
	this.on({"notify:gameStarted" : this.addToCollisiion});
}

CollisionTexture.prototype = Object.create(Observable.prototype);
CollisionTexture.prototype.constructor = CollisionTexture;