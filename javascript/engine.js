import {Medicine} from "./supplies/medicine.js";
import {CircleBot} from "./bots/circleBot";
import {UfoBot} from "./bots/ufo";
import {RocketLives} from "./statusIndications/rocketLifes";
import {Ammo} from "./supplies/ammo";
import {Rocket} from "./rocket";
import {StartGame} from "./startGame";
import {Events} from "./events";
import {Sounds} from "./sounds";

export const app = new PIXI.Application({
	width: 700,
	height: 450
});

document.body.appendChild(app.view);

export let textures,
	background,
	// eslint-disable-next-line no-unused-vars
	rocket,
	rocketLives,
	// eslint-disable-next-line no-unused-vars
	supplies,
	// eslint-disable-next-line no-unused-vars
	bots,
	// eslint-disable-next-line no-unused-vars
	shouldRemove,
	startGame,
	events,
	sounds;

// eslint-disable-next-line no-unused-vars
export let gameLaunched = false;
// eslint-disable-next-line no-unused-vars
export let selectedItem = null;

export let renderLoop = [];
export let collisionDetection = [];
export let filtrationRequired = false;

PIXI.Loader.shared
	.add("./images/sheet.json")
	.load(setup);

function setup () {
	textures = PIXI.Loader.shared.resources["./images/sheet.json"].textures;
	
	background = new PIXI.Sprite(textures["space.png"]);
	app.stage.addChild(background);
	events = new Events();
	// eslint-disable-next-line no-magic-numbers
	rocket = new Rocket(60, 90, "battlecruiser.png");

	rocketLives = new RocketLives();
	startGame = new StartGame();
	sounds = new Sounds();


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

}

const gameLoop = () =>{
	collisionCheck();
	rocketLives.update();

	for(let i = 0; i < renderLoop.length; i++){
		renderLoop[i].update();
	}

	if(filtrationRequired){
		removeUseless();
	}
};


const collisionCheck = () =>{
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
};

const removeUseless = () => {

	collisionDetection = collisionDetection.filter((item) => item.visible);
	renderLoop = renderLoop.filter((item) => item.visible);

	shouldRemove = false;
};

export const gameStart = () => {
	gameLaunched = true;
};

export const makeFiltration = () => {
	filtrationRequired = true;
};

export const removeRocket = () => {
	rocket.visible = false;
};


