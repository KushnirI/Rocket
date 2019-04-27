// eslint-disable-next-line no-unused-vars
function Ammo(x, y){
		
	CollisionTexture.call(this, x, y, "images/ammo.png");
	
}

Ammo.prototype = Object.create(Texture.prototype);
Ammo.prototype.constructor = Ammo;

Ammo.prototype.type = "ammo";
Ammo.prototype.width = 45;
Ammo.prototype.height = 45;
