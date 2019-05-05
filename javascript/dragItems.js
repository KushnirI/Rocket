function DragItems () {
	var me = this;
	
	this.mouseMove = function (event) {
		if(selectedItem) {
			// eslint-disable-next-line no-magic-numbers
			selectedItem.setPosition(event.offsetX -selectedItem.width/2 || event.offsetX,event.offsetY -selectedItem.height/2 ||event.offsetY);
		}
	};
	
	this.mouseDown = function (event) {
		var dist;
		for( var i = 0; i < drawElements.length; i++) {
			// eslint-disable-next-line no-magic-numbers
			dist = Math.sqrt(Math.pow(drawElements[i].x - event.offsetX, 2) + Math.pow(drawElements[i].y -event.offsetY, 2));

			if (dist < drawElements[i].radius) {
				selectedItem = drawElements[i];
			}
		}
	};
	
	this.mouseUp = function () {
		selectedItem = null;
	}
	
	this.startInteraction = function(){
		document.addEventListener("mousemove", me.mouseMove);
		document.addEventListener("mousedown", me.mouseDown);
		document.addEventListener("mouseup", me.mouseUp);
	}
	

	
	this.stopInteraction = function () {
		document.removeEventListener("mousemove", me.mouseMove);
		document.removeEventListener("mousedown", me.mouseDown);
		document.removeEventListener("mouseup", me.mouseUp);
	};

	this.on({"notify:gameStarted" : me.stopInteraction });
	
	
}

DragItems.prototype = Object.create(Observable.prototype);
DragItems.prototype.constructor = DragItems;

// eslint-disable-next-line no-unused-vars
var dragItems = new DragItems;
dragItems.startInteraction();

