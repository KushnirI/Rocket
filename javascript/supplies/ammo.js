// eslint-disable-next-line no-unused-vars
function Ammo(){
		
	DrawAndCollision.apply(this, arguments);

	
}

Ammo.prototype = Object.create(Texture.prototype);
Ammo.prototype.constructor = Ammo;

Ammo.prototype.type = "ammo";
Ammo.prototype.imgSrc = "images/ammo.png";
Ammo.prototype.width = 45;
Ammo.prototype.height = 45;
