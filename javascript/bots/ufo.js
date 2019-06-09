import {HealthBar} from "../statusIndications/healthBar";
import {events} from "../engine";
import{textures, renderLoop, collisionDetection, app} from "../engine";


/**
 *
 * @constructor
 * @param {number} x Position by X
 * @param {number} y Position by Y
 * @param {number} width Obj width
 * @param {number} height Obj height
 * @param {object} [colorParams] Custom color parameters for health bar
 */
export class UfoBot extends PIXI.Container{
    constructor(x, y, width, height, colorParams) {
        super();
        this.sprite = new PIXI.Sprite(textures["bot.png"]);
        this.sprite.width = width;
        this.sprite.height = height;
        // eslint-disable-next-line no-magic-numbers
        this.radius = this.sprite.width/2;
        // eslint-disable-next-line no-magic-numbers
        this.sprite.anchor.set(0.5);
        this.currentHealthPoints = 5;

        this.addChild(this.sprite);

        // eslint-disable-next-line no-magic-numbers
        this.healthBar = new HealthBar( -width/2, height/2, width, 10, colorParams);

        this.startHealthPoints = 5;
        this.healthBar.healthPoints = this.startHealthPoints;

        this.addChild(this.healthBar);
        this.type = "bot";
        this.position.set(x, y);

        app.stage.addChild(this);
        collisionDetection.push(this);
        renderLoop.push(this);
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

    update() {
        this.healthBar.animate();
    }

    applyDamage() {

        this.healthBar.applyDamage();
        // eslint-disable-next-line no-magic-numbers
        if (--this.currentHealthPoints === 0) {
            this.sprite.visible = false;
            this.visible = false;
        }

        this.fireEvent("notify:bot.damaged");
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

    fireEvent(eventName, ...args) {
        events.fireEvent(eventName, args);
    }
}





