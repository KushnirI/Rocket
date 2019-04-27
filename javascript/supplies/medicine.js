// eslint-disable-next-line no-unused-vars
function Medicine(x, y){

	CollisionTexture.call(this, x, y, "images/medicine.png");
	
}

Medicine.prototype = Object.create(Texture.prototype);
Medicine.prototype.constructor = Medicine;

Medicine.prototype.type = "medicine";
Medicine.prototype.width = 45;
Medicine.prototype.height = 45;
