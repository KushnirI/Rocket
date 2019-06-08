/**
 *
 * @constructor
 * @param {number} x Position by X
 * @param {number} y Position by Y
 * @param {number} width Obj width
 * @param {number} height Obj height
 * @param {number} color Filling color in HEX
 */
// eslint-disable-next-line no-unused-vars
function Rectangle(x, y, width, height, color) {

    PIXI.Graphics.call(this);

    // eslint-disable-next-line no-magic-numbers
    this.lineStyle(1, 0x000000, 1);
    this.beginFill(color);
    // eslint-disable-next-line no-magic-numbers
    this.drawRect(0, 0, width, height);
    this.endFill();
    this.position.set(x, y);

}
Rectangle.prototype = Object.create(PIXI.Graphics.prototype);
Rectangle.prototype.constructor = Rectangle;





