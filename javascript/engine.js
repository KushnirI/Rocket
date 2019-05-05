var canvas = document.getElementById("canvas");
var canvasWidth = 700;
var canvasHeight = 450;

canvas.width = canvasWidth;
canvas.height = canvasHeight;

var ctx = canvas.getContext("2d");

var updateTime = 40;
// eslint-disable-next-line no-unused-vars
var gameLaunched = false;
// eslint-disable-next-line no-unused-vars
var selectedItem = null;

var drawElements = [];
var collisionDetection = [];

// eslint-disable-next-line
var rocket = new Rocket(50, 50, "images/battlecruiser.png");
// eslint-disable-next-line no-unused-vars
var rocketLifes = new RocketLifes();

var filtrationRequired = false;

function collisionCheck() {
	var obj1, obj2, dist;
	for(var i = 0; i < collisionDetection.length; i++) {
		obj1 = collisionDetection[i];
		
		for(var j = 0; j < collisionDetection.length; j++){
			
			if(i !== j){
				obj2 = collisionDetection[j];
				// eslint-disable-next-line no-magic-numbers
				dist = Math.sqrt(Math.pow(obj1.x - obj2.x,2) + Math.pow(obj1.y - obj2.y, 2));
				
				if( dist < obj1.radius + obj2.radius){
					
					if(obj1.type === "bot" && obj2.type === "bullet"){
						obj1.applyDamage();
						obj2.shouldDraw = false;
						filtrationRequired = true;
					}
					
					if(obj1.type === "bot" && obj2.type === "rocket"){
						obj1.applyDamage();
						obj2.applyDamage();
						filtrationRequired = true;
					}
					
					if(obj1.type === "medicine" && obj2.type === "rocket"){
						obj1.shouldDraw = false;
						obj2.applyLife();
						filtrationRequired = true;
					}
					
					if(obj1.type === "ammo" && obj2.type === "rocket"){
						obj1.shouldDraw = false;
						obj2.applyAmmo();
						filtrationRequired = true;
					}
				}
			}
		}
	}
}

function removeUseless() {
	drawElements = drawElements.filter(function(item){
		return item.shouldDraw;
	});
	
	collisionDetection = collisionDetection.filter(function(item){
		return item.shouldDraw;
	});
	shouldRemove = false;
	
}

// eslint-disable-next-line no-unused-vars
var bots = [
			// eslint-disable-next-line no-magic-numbers
			new UfoBot(320, 320, 75, 75),
			// eslint-disable-next-line no-magic-numbers
			new UfoBot(180, 320, 50, 50),
			// eslint-disable-next-line no-magic-numbers
			new UfoBot(280, 50, 50, 50),
			// eslint-disable-next-line no-magic-numbers
			new UfoBot(550, 100, 110, 110, {live : "blue", animation : "orange", damage : "black"}),
			// eslint-disable-next-line no-magic-numbers
			new UfoBot(490, 30, 70, 70),
			// eslint-disable-next-line no-magic-numbers
			new CircleBot(180, 200, 20),
			// eslint-disable-next-line no-magic-numbers
			new CircleBot(300, 300, 35),
			// eslint-disable-next-line no-magic-numbers
			new CircleBot(400, 180, 15)
];


// eslint-disable-next-line no-unused-vars
var supplies = [
	// eslint-disable-next-line no-magic-numbers
	new Medicine(100, 250),
	// eslint-disable-next-line no-magic-numbers
	new Medicine(520, 230),
	// eslint-disable-next-line no-magic-numbers
	new Medicine(420, 30),
	// eslint-disable-next-line no-magic-numbers
	new Ammo(620, 10),
	// eslint-disable-next-line no-magic-numbers
	new Ammo(600, 380),
	// eslint-disable-next-line no-magic-numbers
	new Ammo(570, 30),
	// eslint-disable-next-line no-magic-numbers
	new Ammo(270, 340)
];


setInterval(function(){
	// eslint-disable-next-line no-magic-numbers
	ctx.clearRect(0, 0, canvasWidth, canvasHeight);
	
	collisionCheck();
	
	for(var i = 0; i < drawElements.length; i++){
		drawElements[i].update();
		drawElements[i].draw(ctx);
	}
	
	if(filtrationRequired){
		removeUseless();
	}
	
},updateTime);
