/**
 *
 * @constructor
 * @param {number} x Position by X
 * @param {number} y Position by Y
 * @param {number} radius Obj radius
 */
// eslint-disable-next-line no-unused-vars
function CircleBot(x, y, radius) {

    this.globalX = x;
    this.globalY = y;

    this.sprite = new PIXI.Graphics();
    // eslint-disable-next-line no-magic-numbers
    this.sprite.lineStyle(4, 0x808B96, 1);
    // eslint-disable-next-line no-magic-numbers
    this.sprite.beginFill(0x808B96);
    // eslint-disable-next-line no-magic-numbers
    this.sprite.drawCircle(0, 0, radius);
    this.sprite.endFill();
    this.sprite.position.set(x, y);
    app.stage.addChild(this.sprite);

    this.radius = radius;

    this.healthPoints = 1;
    drawElements.push(this);
    collisionDetection.push(this);
}

CircleBot.prototype.applyDamage = function () {
    // eslint-disable-next-line no-magic-numbers
    if (this.healthPoints <= 0) {
        this.sprite.visible = false;
    }
    this.healthPoints--;
    this.sprite.tint = 0xF44336;
    this.sprite.alpha = 0.9;

};

CircleBot.prototype.type = "bot";

CircleBot.prototype.setPosition = function (newX, newY) {
    this.sprite.position.set(newX, newY);
    this.globalX = this.sprite.x;
    this.globalY = this.sprite.y;
};

CircleBot.prototype.update = function () {

};


