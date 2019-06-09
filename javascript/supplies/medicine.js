import {textures, collisionDetection, app, events} from "../engine";

export class Medicine extends PIXI.Sprite{
	constructor (x, y) {
		super(textures["medicine.png"]);
		// eslint-disable-next-line no-magic-numbers
		this.anchor.set(0.5);
		this.width = 45;
		this.height = 45;
		this.position.set(x, y);
		// eslint-disable-next-line no-magic-numbers
		this.radius = this.width/2;
		app.stage.addChild(this);
		this.type = "medicine";
		collisionDetection.push(this);

		this.startInteraction();
		this.by({ "notify:gameStarted" : () =>  this.interactive = false});
	}

	startInteraction() {
		this.interactive = true;
		this.on("mousedown", () => {
			this.selected = true;
		});

		this.on("mousemove", (event) => {
			if(this.selected){
				this.x = event.data.global.x;
				this.y = event.data.global.y;
			}
		});

		this.on("mouseup", () => {
			this.selected = false;
		});
	}

	by(params) {
		if (!this.eventHandlers) {
			this.eventHandlers = {};
		}

		for (let key in params) {
			if (params.hasOwnProperty(key)) {
				if (!this.eventHandlers[key]) {
					events.addListener(key, this);
				}

				this.eventHandlers[key] = params[key];
			}
		}
	}
}