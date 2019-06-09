import {Rectangle} from "../parentObjects/rectangle.js";
/**
 *
 * @constructor
 * @param {number} x Position by X
 * @param {number} y Position by Y
 * @param {number} width Bar width
 * @param {number} height Bar height
 * @param {object} [colorParams] Custom color parameters
 */
export class HealthBar extends PIXI.Container{
    constructor(x, y, width, height, colorParams = {live: 0x388E3C, animation: 0xFFEE58, damage: 0xF44336}){
        super();
        this.width = width;
        this.damageLine = this.addChild(new Rectangle(x, y, width, height, colorParams.damage));
        this.animationLine = this.addChild(new Rectangle(x, y, width, height, colorParams.animation));
        this.liveLine = this.addChild(new Rectangle(x, y, width, height, colorParams.live));

        this.healthPoints = 3;
        this.animationStep = 0.5;
    }

    applyDamage() {
        this.liveLine.width -= this.width / this.healthPoints;
    }

    animate() {
        if (this.liveLine.width < this.animationLine.width) {
            this.animationLine.width -= this.animationStep;
        }
    }
}


