// eslint-disable-next-line no-unused-vars
function RocketLives() {

    this.lives = 2;
    this.visibleLine = new PIXI.Container();

    // eslint-disable-next-line no-magic-numbers
    for (let i = 0; i < 3; i++) {
        let heart = new PIXI.Sprite(textures["heart.png"]);
        heart.width = 30;
        heart.height = 30;
        // eslint-disable-next-line no-magic-numbers
        heart.position.set(i * heart.width, 10);

        this.visibleLine.addChild(heart);
    }

    let plus = new PIXI.Sprite(textures["plus.png"]);
    plus.width = 30;
    plus.height = 30;
    // eslint-disable-next-line no-magic-numbers
    plus.position.set(plus.width * 3, 10);

    this.visibleLine.addChild(plus);

    app.stage.addChild(this.visibleLine);
    this.update();

}

RocketLives.prototype.update = function () {

    this.visibleLine.children.forEach(function (children) {
        children.visible = false;
    });

    let MaxAmountOfTextures = Math.min(this.visibleLine.children.length, this.lives);

    for (let i = 0; i < MaxAmountOfTextures; i++) {
        this.visibleLine.children[i].visible = true;
    }

    // eslint-disable-next-line no-magic-numbers
    if (this.lives <= 0) {
        console.log("GAME OVER!!!");
        rocket.visible = false;
    }
};

/**
 *
 * @param {number} increment Lives amount displacement
 */
RocketLives.prototype.changeLivesAmount = function (increment) {
    this.lives += increment;
    this.update();
};
	