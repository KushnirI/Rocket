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

    this.sprite = new PIXI.Graphics();
    // eslint-disable-next-line no-magic-numbers
    this.sprite.lineStyle(1, 0x000000, 1);
    this.sprite.beginFill(color);
    // eslint-disable-next-line no-magic-numbers
    this.sprite.drawRect(0, 0, width, height);
    this.sprite.endFill();
    this.sprite.position.set(x, y);

}

Rectangle.prototype.update = function() {

};



