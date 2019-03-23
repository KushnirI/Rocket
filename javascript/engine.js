var canvas = document.getElementById("canvas");
var canvasWidth = 700;
var canvasHeight = 450;
canvas.width = canvasWidth;
canvas.height = canvasHeight;

var ctx = canvas.getContext("2d");

var updateTime = 35;
var zeroCordinate = 0;

var rocket = new Rocket("images/rocket.png");

function collisionCheck() {
	var obj1, obj2, dist;
	for(var i = 0; i < collisionDetection.length; i++) {
		obj1 = collisionDetection[i];
		for(var j = 0; j < collisionDetection.length; j++){
			if(i !== j){
				obj2 = collisionDetection[j];
				
				dist = Math.sqrt(Math.pow(obj1.x - obj2.x,2)
								+ Math.pow(obj1.y - obj2.y, 2));
				if( dist < obj1.radius + obj2.radius){
					if(obj1.type === "bot" && obj2.type === "bullet"){
						obj1.getDemage();
						obj2.shouldDraw = false;
					}
				}
			}
		}
	}
}

function removeUseless() {
	for(var i = 0; i < drawElements.length; i++){
		if(!drawElements[i].shouldDraw) {
			drawElements.splice(i--, 1);
		}
	}
	
	for(var j = 0; j < collisionDetection.length; j++){
		if(!collisionDetection[j].shouldDraw) {
			collisionDetection.splice(j--, 1);
		}
	}
}

var drawElements = [];
var collisionDetection = [];

//var bots = [new bot >>]
var bot1 = new Bot(320, 320, 75, 75);
var bot2 = new Bot(180, 320, 50, 50);
var bot3 = new Bot(520, 230, 50, 50);

var circle1 = new Circle(100, 100, 20);
var circle2 = new Circle(300, 300, 35);
var circle3 = new Circle(400, 180, 15);


drawElements.push(circle1);
drawElements.push(circle2);
drawElements.push(circle3);
drawElements.push(bot1);
drawElements.push(bot2);
drawElements.push(bot3);
drawElements.push(rocket);

collisionDetection.push(circle1);
collisionDetection.push(circle2);
collisionDetection.push(circle3);
collisionDetection.push(bot1);
collisionDetection.push(bot2);
collisionDetection.push(bot3);
collisionDetection.push(rocket);

setInterval(function(){
	ctx.clearRect(zeroCordinate, zeroCordinate, canvasWidth, canvasHeight);
	collisionCheck();
	
	for(var i = 0; i < drawElements.length; i++){
		drawElements[i].update();
		drawElements[i].draw(ctx);
	}
	
	removeUseless();
	
},updateTime);


document.addEventListener("keydown", function(event){
	rocket.setKey(event.keyCode, true);
});

document.addEventListener("keyup", function(event){
	rocket.setKey(event.keyCode, false);
});

document.addEventListener("keypress", function(event){
	if(event.keyCode === 102 || event.keyCode === 1072){
		fireEvent("fire", {x: rocket.x, y: rocket.y, angle: rocket.angle, rocketLength: rocket.height/2})
	}
});


rocket.setPosition(canvasWidth-rocket.width, canvasHeight - rocket.height);

var events = {
	fire : []
};

addListener("fire", 
	function(config){
		new Bullet(config);
	}
);

function addListener(eventName,functionCallback) {
	events[eventName].push(functionCallback);
}

function fireEvent(eventName, params){
	for(var i = 0; i < events[eventName].length; i++) {
		events[eventName][i](params);
	}
}
















