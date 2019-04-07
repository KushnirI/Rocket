// eslint-disable-next-line no-unused-vars
function Ammo(){
		
	ImgObject.apply(this, arguments);
	
	this.image.src = "images/ammo.png";
	drawElements.push(this);
	collisionDetection.push(this);
	
}

Ammo.prototype = Object.create(ImgObject.prototype);
Ammo.prototype.constructor = Ammo;

Ammo.prototype.type = "ammo";
Ammo.prototype.width = 45;
Ammo.prototype.height = 45;


















