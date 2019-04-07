var canvas = document.getElementById("canvas");
var canvasWidth = 700;
var canvasHeight = 450;

canvas.width = canvasWidth;
canvas.height = canvasHeight;

var ctx = canvas.getContext("2d");

var updateTime = 40;

var drawElements = [];
var collisionDetection = [];

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
						obj1.getDamage();
						obj2.shouldDraw = false;
					}
					
					if(obj1.type === "bot" && obj2.type === "rocket"){
						obj1.getDamage();
						obj2.getDamage();
					}
					
					if(obj1.type === "medicine" && obj2.type === "rocket"){
						obj1.shouldDraw = false;
						obj2.getLive();
					}
					
					if(obj1.type === "ammo" && obj2.type === "rocket"){
						obj1.shouldDraw = false;
						obj2.getAmmo();
					}
				}
			}
		}
	}
}

function removeUseless() {
	var filtredDraw = drawElements.filter(function(item){
		return item.shouldDraw;
	});
	
	var filtredCollision = collisionDetection.filter(function(item){
		return item.shouldDraw;
	});
	
	drawElements = filtredDraw;
	collisionDetection = filtredCollision;
	
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

// eslint-disable-next-line no-magic-numbers
var rocket = new Rocket(50, 50, "images/rocket.png");
// eslint-disable-next-line no-unused-vars
var rocketLives = new RocketLives();


setInterval(function(){
	// eslint-disable-next-line no-magic-numbers
	ctx.clearRect(0, 0, 700, 450);
	
	collisionCheck();
	
	for(var i = 0; i < drawElements.length; i++){
		drawElements[i].update();
		drawElements[i].draw(ctx);
	}
	
	removeUseless();
	
},updateTime);


var keyCodes = {
	f : 102,
	ruF : 1072
}
//how should I name "ruF"?

document.addEventListener("keydown", function(event){
	//keyCode is deprecated, use event.key instead
	rocket.setKey(event.keyCode, true);
});

document.addEventListener("keyup", function(event){
	rocket.setKey(event.keyCode, false);
});

document.addEventListener("keypress", function(event){
	if(event.keyCode === keyCodes.f || event.keyCode === keyCodes.ruF){
		// eslint-disable-next-line no-magic-numbers
		if(rocket.bullets > 0){
			// eslint-disable-next-line no-magic-numbers
			fireEvent("fire", {x: rocket.x, y: rocket.y, angle: rocket.angle, rocketLength: rocket.height/2});
			
		} else {
			console.log("no bullets!");
		}
	}
});


var events = {
	fire : [],
	gameOver : []
};

addListener("fire", 
	function(config){
		new Bullet(config);
	}
);

addListener("fire",
			function(){
				console.log("fire sound!");
			}
);
addListener("fire",
			function(){
				rocket.bullets--;
				rocket.showBulletsAmount()
			}
);

/**
 * 
 * @param {string} eventName Name of event
 * @param {function} functionCallback Add function which should be done by event
 */
function addListener(eventName,functionCallback) {
	events[eventName].push(functionCallback);
}

/**
 * 
 * @param {string} eventName Name of event
 * @param {function} params Arguments for functionCallback
 */
function fireEvent(eventName, params){
	for(var i = 0; i < events[eventName].length; i++) {
		events[eventName][i](params);
	}
}

















