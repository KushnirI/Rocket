// eslint-disable-next-line no-unused-vars
function Ammo(x, y){

	PIXI.Sprite.call(this, textures["ammo2.png"]);
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

Ammo.prototype = Object.create(PIXI.Sprite.prototype);
Ammo.prototype.constructor = Ammo;

Ammo.prototype.type = "ammo";
Ammo.prototype.update = function () {

};