// eslint-disable-next-line no-unused-vars
function RocketLives() {

    this.lives = 2;

    this.imgPanel = [
        // eslint-disable-next-line no-magic-numbers
        new ImgObject(0, 10, "images/heart.png"),
        // eslint-disable-next-line no-magic-numbers
        new ImgObject(30, 10, "images/heart.png"),
        // eslint-disable-next-line no-magic-numbers
        new ImgObject(60, 10, "images/heart.png"),
        // eslint-disable-next-line no-magic-numbers
        new ImgObject(90, 10, "images/plus.png")
    ];

    drawElements.push(this);

}

RocketLives.prototype.update = function () {
    // eslint-disable-next-line no-magic-numbers
    if (this.lives <= 0) {
        console.log("GAME OVER!!!");
        //call rocket's method instead of directly changing properties:
        rocket.shouldDraw = false;
        this.shouldDraw = false
    }
};

RocketLives.prototype.shouldDraw = true;

RocketLives.prototype.draw = function (ctx) {
    var visibleImagesNumber = Math.min(this.lives, this.imgPanel.length);

    for (var i = 0; i < visibleImagesNumber; i++) {
        if (this.imgPanel[i].loaded) {
            this.imgPanel[i].draw(ctx);
        }
    }
};

RocketLives.prototype.changeLiveAmount = function (amount) {
    this.lives += amount;
};
	


