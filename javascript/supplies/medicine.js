// eslint-disable-next-line no-unused-vars
function Medicine(x, y){

	PIXI.Sprite.call(this, textures["medicine.png"]);
	// eslint-disable-next-line no-magic-numbers
	this.anchor.set(0.5);
	this.width = 45;
	this.height = 45;
	this.position.set(x, y);
	// eslint-disable-next-line no-magic-numbers
	this.radius = this.width/2;
	app.stage.addChild(this);
	collisionDetection.push(this);
	renderLoop.push(this);

}

Medicine.prototype = Object.create(PIXI.Sprite.prototype);
Medicine.prototype.constructor = Medicine;

Medicine.prototype.type = "medicine";
Medicine.prototype.update = function () {

};