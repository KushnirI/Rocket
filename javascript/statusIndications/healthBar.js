/**
 *
 * @constructor
 * @param {number} x Position by X
 * @param {number} y Position by Y
 * @param {number} width Bar width
 * @param {number} height Bar height
 * @param {object} colorParams Custom color parameters
 */
// eslint-disable-next-line no-unused-vars
function HealthBar(x, y, width, height, colorParams) {

    this.width = width;

    this.colors = {
        live: 0x388E3C,
        animation: 0xFFEE58,
        damage: 0xF44336
    };

    if (colorParams) {
        this.colors = {
            live: colorParams.live,
            animation: colorParams.animation,
            damage: colorParams.damage
        };
    }

    this.bar = new PIXI.Container();

    // eslint-disable-next-line no-magic-numbers
    this.damageLine = new Rectangle(x, y, width, height, this.colors.damage);
    // eslint-disable-next-line no-magic-numbers
    this.animationLine = new Rectangle(x, y, width, height, this.colors.animation);
    this.liveLine = new Rectangle(x, y, width, height, this.colors.live);

    this.bar.addChild(this.damageLine.sprite);
    this.bar.addChild(this.animationLine.sprite);
    this.bar.addChild(this.liveLine.sprite);

    this.healthPoints = 3;
}

HealthBar.prototype.animationStep = 0.5;

HealthBar.prototype.applyDamage = function () {
    this.liveLine.sprite.width -= this.width / this.healthPoints;

};

HealthBar.prototype.animate = function () {
    if (this.liveLine.sprite.width < this.animationLine.sprite.width) {
        this.animationLine.sprite.width -= this.animationStep;
    }
};
