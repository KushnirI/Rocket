let app = new PIXI.Application({
	width: 700,
	height: 450
});

document.body.appendChild(app.view);

PIXI.Loader.shared
	.add("./images/sheet.json")
	.load(setup);

let textures,
	background,
	// eslint-disable-next-line no-unused-vars
	rocket,
	rocketLives,
	// eslint-disable-next-line no-unused-vars
	supplies,
	// eslint-disable-next-line no-unused-vars
	bots,
	// eslint-disable-next-line no-unused-vars
	shouldRemove;

// eslint-disable-next-line no-unused-vars
let gameLaunched = false;
// eslint-disable-next-line no-unused-vars
let selectedItem = null;

let renderLoop = [];
let collisionDetection = [];
let filtrationRequired = false;

function setup () {
	textures = PIXI.Loader.shared.resources["./images/sheet.json"].textures;
	
	background = new PIXI.Sprite(textures["space.png"]);
	app.stage.addChild(background);
	// eslint-disable-next-line no-magic-numbers
	rocket = new Rocket(60, 90, "battlecruiser.png");

	rocketLives = new RocketLives();

	supplies = [
		// eslint-disable-next-line no-magic-numbers
		new Medicine(120, 270),
		// eslint-disable-next-line no-magic-numbers
		new Medicine(540, 250),
		// eslint-disable-next-line no-magic-numbers
		new Medicine(440, 50),
		// eslint-disable-next-line no-magic-numbers
		new Ammo(660, 50),
		// eslint-disable-next-line no-magic-numbers
		new Ammo(640, 400),
		// eslint-disable-next-line no-magic-numbers
		new Ammo(610, 70),
		// eslint-disable-next-line no-magic-numbers
		new Ammo(290, 380)
	];

	bots = [
		// eslint-disable-next-line no-magic-numbers
		new UfoBot(358, 358, 75, 75),
		// eslint-disable-next-line no-magic-numbers
		new UfoBot(205, 345, 50, 50),
		// eslint-disable-next-line no-magic-numbers
		new UfoBot(305, 75, 50, 50),
		// eslint-disable-next-line no-magic-numbers
		new UfoBot(605, 155, 110, 110, {live : 0x03A9F4, animation : 0xF57C00, damage : 0x000000 }),
		// eslint-disable-next-line no-magic-numbers
		new UfoBot(525, 65, 70, 70),
		// eslint-disable-next-line no-magic-numbers
		new CircleBot(180, 200, 20),
		// eslint-disable-next-line no-magic-numbers
		new CircleBot(300, 300, 35),
		// eslint-disable-next-line no-magic-numbers
		new CircleBot(400, 180, 15)
	];

	app.ticker.add(delta => gameLoop(delta));

	// eslint-disable-next-line no-unused-vars
	let dragItems = new DragItems();
	dragItems.startInteraction();

}

function gameLoop () {
	collisionCheck();
	rocketLives.update();

	for(let i = 0; i < renderLoop.length; i++){
		renderLoop[i].update();
	}

	if(filtrationRequired){
		removeUseless();
	}
}


function collisionCheck() {
	let obj1, obj2, dist;
	for(let i = 0; i < collisionDetection.length; i++) {
		obj1 = collisionDetection[i];

		for(let j = 0; j < collisionDetection.length; j++){

			if(i !== j){
				obj2 = collisionDetection[j];
				// eslint-disable-next-line no-magic-numbers
				dist = Math.sqrt(Math.pow(obj1.x - obj2.x,2) + Math.pow(obj1.y - obj2.y, 2));

				if( dist < obj1.radius + obj2.radius){

					if(obj1.type === "bot" && obj2.type === "bullet"){
						obj1.applyDamage();
						obj2.visible = false;
						filtrationRequired = true;
					}

					if(obj1.type === "bot" && obj2.type === "rocket"){
						obj1.applyDamage();
						obj2.applyDamage();
						filtrationRequired = true;
					}

					if(obj1.type === "medicine" && obj2.type === "rocket"){
						obj1.visible = false;
						obj2.applyLive();
						filtrationRequired = true;
					}

					if(obj1.type === "ammo" && obj2.type === "rocket"){
						obj1.visible = false;
						obj2.applyAmmo();
						filtrationRequired = true;
					}
				}
			}
		}
	}
}

function removeUseless() {

	collisionDetection = collisionDetection.filter(function(item){
		return item.visible;
	});

	renderLoop = renderLoop.filter(function(item){
		return item.visible;
	});

	shouldRemove = false;

}


