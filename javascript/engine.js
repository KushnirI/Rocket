let app = new PIXI.Application({
	width: 700,
	height: 450
});

document.body.appendChild(app.view);

PIXI.Loader.shared
	.add("./images/sheet.json")
	.load(setup);

let id,
	state,
	play,
	background,
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

let drawElements = [];
let collisionDetection = [];
let filtrationRequired = false;

function setup () {
	id = PIXI.Loader.shared.resources["./images/sheet.json"].textures;
	
	background = new PIXI.Sprite(id["space.png"]);
	app.stage.addChild(background);
	// eslint-disable-next-line no-magic-numbers
	rocket = new Rocket(0, 0, "battlecruiser.png");
	// eslint-disable-next-line no-magic-numbers
	rocket.setPosition(30, 40);
	
	rocketLives = new RocketLives();

	supplies = [
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

	bots = [
		// eslint-disable-next-line no-magic-numbers
		new UfoBot(320, 320, 75, 75),
		// eslint-disable-next-line no-magic-numbers
		new UfoBot(180, 320, 50, 50),
		// eslint-disable-next-line no-magic-numbers
		new UfoBot(280, 50, 50, 50),
		// eslint-disable-next-line no-magic-numbers
		new UfoBot(550, 100, 110, 110, {live : 0x03A9F4, animation : 0xF57C00, damage : 0x000000 }),
		// eslint-disable-next-line no-magic-numbers
		new UfoBot(490, 30, 70, 70),
		// eslint-disable-next-line no-magic-numbers
		new CircleBot(180, 200, 20),
		// eslint-disable-next-line no-magic-numbers
		new CircleBot(300, 300, 35),
		// eslint-disable-next-line no-magic-numbers
		new CircleBot(400, 180, 15)
	];

		state = play;

	app.ticker.add(delta => gameLoop(delta));
}

function gameLoop () {
	state();
}

play = function () {

	collisionCheck();
	rocketLives.update();

	for(let i = 0; i < drawElements.length; i++){
		drawElements[i].update();
	}

	if(filtrationRequired){
		removeUseless();
	}
};

function collisionCheck() {
	let obj1, obj2, dist;
	for(let i = 0; i < collisionDetection.length; i++) {
		obj1 = collisionDetection[i];

		for(let j = 0; j < collisionDetection.length; j++){

			if(i !== j){
				obj2 = collisionDetection[j];
				// eslint-disable-next-line no-magic-numbers
				dist = Math.sqrt(Math.pow(obj1.globalX - obj2.globalX,2) + Math.pow(obj1.globalY - obj2.globalY, 2));

				if( dist < obj1.radius + obj2.radius){

					if(obj1.type === "bot" && obj2.type === "bullet"){
						obj1.applyDamage();
						obj2.sprite.visible = false;
						filtrationRequired = true;
					}

					if(obj1.type === "bot" && obj2.type === "rocket"){
						obj1.applyDamage();
						obj2.applyDamage();
						filtrationRequired = true;
					}

					if(obj1.type === "medicine" && obj2.type === "rocket"){
						obj1.sprite.visible = false;
						obj2.applyLive();
						filtrationRequired = true;
					}

					if(obj1.type === "ammo" && obj2.type === "rocket"){
						obj1.sprite.visible = false;
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
		return item.sprite.visible;
	});

	drawElements = drawElements.filter(function(item){
		return item.sprite.visible;
	});

	shouldRemove = false;

}


