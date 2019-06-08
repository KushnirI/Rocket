/**
 *
 * @constructor
 * @param {number} x Position by X
 * @param {number} y Position by Y
 * @param {number} width Obj width
 * @param {number} height Obj height
 * @param {object} [colorParams] Custom color parameters for health bar
 */
// eslint-disable-next-line no-unused-vars
function UfoBot(x, y, width, height, colorParams) {

    PIXI.Container.call(this);

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

    this.healthBar.healthPoints = this.startHealthPoints;

    this.addChild(this.healthBar);

    this.position.set(x, y);

    app.stage.addChild(this);
    collisionDetection.push(this);
    renderLoop.push(this);

}

UfoBot.prototype = Object.create(PIXI.Container.prototype);
UfoBot.prototype.constructor = UfoBot;

UfoBot.prototype.type = "bot";
UfoBot.prototype.startHealthPoints = 5;

UfoBot.prototype.update = function () {
    this.healthBar.animate();
};


UfoBot.prototype.applyDamage = function () {

    this.healthBar.applyDamage();
    // eslint-disable-next-line no-magic-numbers
    if (--this.currentHealthPoints === 0) {
        this.sprite.visible = false;
        this.visible = false;
    }

    this.fireEvent("notify:bot.damaged");
};

/**
 *
 * @param {object} params  {Object.<string, function>}
 */
UfoBot.prototype.on = function (params) {
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
};

UfoBot.prototype.fireEvent = function () {
    let argumentsArray = [].slice.call(arguments);
    // eslint-disable-next-line no-magic-numbers
    let eventArgs = argumentsArray.slice(1);

    // eslint-disable-next-line no-magic-numbers
    events.fireEvent(argumentsArray[0], eventArgs);
};