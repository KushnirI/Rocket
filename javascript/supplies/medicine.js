// eslint-disable-next-line no-unused-vars
function Medicine(){

	DrawAndCollision.apply(this, arguments);
	
}

Medicine.prototype = Object.create(Texture.prototype);
Medicine.prototype.constructor = Medicine;

Medicine.prototype.imgSrc = "images/medicine.png";
Medicine.prototype.type = "medicine";
Medicine.prototype.width = 45;
Medicine.prototype.height = 45;
