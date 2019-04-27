function DragItems () {
	var me = this;
	var mousePosition = {
		x : 0,
		y : 0
	}
	
	
	this.drag = function(){
		
		document.onmousemove = function (event) {
			mousePosition.x = event.offsetX;
			mousePosition.y = event.offsetY;

			if(selectedItem) {
				selectedItem.x = mousePosition.x;
				selectedItem.y = mousePosition.y;
			}
		}

		document.onmousedown = function () {

			var dist;
			for( var i = 0; i < drawElements.length; i++) {
				// eslint-disable-next-line no-magic-numbers
				dist = Math.sqrt(Math.pow(drawElements[i].x - mousePosition.x, 2) + Math.pow(drawElements[i].y - mousePosition.y, 2));

				if (dist < drawElements[i].radius) {
					selectedItem = drawElements[i];
					selectedItem.selected = true;

				}
			}
		}

		document.onmouseup = function () {
			selectedItem.selected = false;
			selectedItem = false;
		}
			
			
		}
	
	this.stopDrag = function () {
		document.onmousemove = null;
		document.onmousedown = null;
		document.onmouseup = null;
	};

	this.on({"notify:gameStarted" : me.stopDrag });
	
	
}

DragItems.prototype = Object.create(Observable.prototype);
DragItems.prototype.constructor = DragItems;

// eslint-disable-next-line no-unused-vars
var dragItems = new DragItems;
dragItems.drag();

