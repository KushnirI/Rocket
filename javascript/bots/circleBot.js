import {collisionDetection, app, events} from "../engine";

/**
 *
 * @constructor
 * @param {number} x Position by X
 * @param {number} y Position by Y
 * @param {number} radius Obj radius
 */
export class CircleBot extends PIXI.Graphics{
    constructor(x, y, radius) {
        super();
        // eslint-disable-next-line no-magic-numbers
        this.lineStyle(2, 0x808B96, 1);
        // eslint-disable-next-line no-magic-numbers
        this.beginFill(0x808B96);
        // eslint-disable-next-line no-magic-numbers
        this.drawCircle(0, 0, radius);
        this.endFill();
        this.position.set(x, y);
        app.stage.addChild(this);
        this.radius = radius;
        this.type = "bot";

        this.healthPoints = 1;
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

    applyDamage() {
        // eslint-disable-next-line no-magic-numbers
        if (this.healthPoints <= 0) {
            this.visible = false;
        }
        this.healthPoints--;
        this.tint = 0xF44336;
        this.alpha = 0.9;
    }
}