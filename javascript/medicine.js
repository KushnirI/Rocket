// eslint-disable-next-line no-unused-vars
function Medicine(){
		
	ImgObject.apply(this, arguments);
	
	this.image.src = "images/medicine.png";
	drawElements.push(this);
	collisionDetection.push(this);
	
}

Medicine.prototype = Object.create(ImgObject.prototype);
Medicine.prototype.constructor = Medicine;

Medicine.prototype.type = "medicine";
Medicine.prototype.width = 45;
Medicine.prototype.height = 45;


















