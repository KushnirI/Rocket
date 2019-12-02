/**
 *
 * @constructor
 * @param {number} x Position by X
 * @param {number} y Position by Y
 * @param {number} width Obj width
 * @param {number} height Obj height
 * @param {number} color Filling color in HEX
 */

export class Rectangle extends PIXI.Graphics{
    constructor(x, y, width, height, color) {
        super();

        // eslint-disable-next-line no-magic-numbers
        this.lineStyle(1, 0x000000, 1);
        this.beginFill(color);
        // eslint-disable-next-line no-magic-numbers
        this.drawRect(0, 0, width, height);
        this.endFill();
        this.position.set(x, y);
    }

}