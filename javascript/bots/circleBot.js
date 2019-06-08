/**
 *
 * @constructor
 * @param {number} x Position by X
 * @param {number} y Position by Y
 * @param {number} radius Obj radius
 */
// eslint-disable-next-line no-unused-vars
function CircleBot(x, y, radius) {

    PIXI.Graphics.call(this);
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

    this.healthPoints = 1;
    renderLoop.push(this);
    collisionDetection.push(this);
}

CircleBot.prototype = Object.create(PIXI.Graphics.prototype);
CircleBot.prototype.constructor = CircleBot;

CircleBot.prototype.applyDamage = function () {
    // eslint-disable-next-line no-magic-numbers
    if (this.healthPoints <= 0) {
        this.visible = false;
    }
    this.healthPoints--;
    this.tint = 0xF44336;
    this.alpha = 0.9;

};

CircleBot.prototype.type = "bot";

CircleBot.prototype.update = function () {

};


