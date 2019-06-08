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

    PIXI.Container.call(this);

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

    this.damageLine = this.addChild(new Rectangle(x, y, width, height, this.colors.damage));
    this.animationLine = this.addChild(new Rectangle(x, y, width, height, this.colors.animation));
    this.liveLine = this.addChild(new Rectangle(x, y, width, height, this.colors.live));

    this.healthPoints = 3;
}

HealthBar.prototype = Object.create(PIXI.Container.prototype);
HealthBar.prototype.constructor = HealthBar;

HealthBar.prototype.animationStep = 0.5;

HealthBar.prototype.applyDamage = function () {
    this.liveLine.width -= this.width / this.healthPoints;

};

HealthBar.prototype.animate = function () {
    if (this.liveLine.width < this.animationLine.width) {
        this.animationLine.width -= this.animationStep;
    }
};
