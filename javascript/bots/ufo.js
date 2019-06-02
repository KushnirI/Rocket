/**
 *
 * @constructor
 * @param {number} x Position by X
 * @param {number} y Position by Y
 * @param {number} width Obj width
 * @param {number} height Obj height
 * @param {object} colorParams Custom color parameters for health bar
 */
// eslint-disable-next-line no-unused-vars
function UfoBot(x, y, width, height, colorParams) {
    let me = this;

    this.width = width;
    this.height = height;
    this.currentHealthPoints = 5;

    this.container = new PIXI.Container();


    CollisionTexture.call(this, 0, 0, "bot.png");

    this.container.addChild(this.sprite);

    // eslint-disable-next-line no-magic-numbers
    this.healthBar = new HealthBar(me.sprite.x - me.width / 2, me.sprite.y + me.height / 2, me.width, 10, colorParams);

    this.healthBar.healthPoints = this.startHealthPoints;

    this.container.addChild(this.healthBar.bar);

    this.setPosition(x, y);

    app.stage.addChild(this.container);

}

UfoBot.prototype = Object.create(Texture.prototype);
UfoBot.prototype.constructor = UfoBot;

UfoBot.prototype.type = "bot";
UfoBot.prototype.startHealthPoints = 5;

UfoBot.prototype.update = function () {
    this.healthBar.animate();
};

/**
 *
 * @param {number} newX New x position
 * @param {number} newY New y position
 */
UfoBot.prototype.setPosition = function (newX, newY) {
    this.container.position.set(newX, newY);
    // eslint-disable-next-line no-magic-numbers
    this.globalX = this.container.x + this.width / 2;
    // eslint-disable-next-line no-magic-numbers
    this.globalY = this.container.y + this.height / 2;
};

UfoBot.prototype.applyDamage = function () {

    this.healthBar.applyDamage();
    // eslint-disable-next-line no-magic-numbers
    if (--this.currentHealthPoints === 0) {
        this.sprite.visible = false;
        this.container.visible = false;
    }

    this.fireEvent("notify:bot.damaged");
};
