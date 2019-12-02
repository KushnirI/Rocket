import {textures, app, removeRocket} from "../engine";

export class RocketLives extends PIXI.Container{
    constructor(){
        super();
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

        this.visibleLine.children.forEach((child) => {
            child.visible = false;
        });

        this.update();
    }

    update() {

        let lastVisibleIndex = Math.min(this.visibleLine.children.length, this.lives);

        for (let i = 0; i < lastVisibleIndex; i++) {
            this.visibleLine.children[i].visible = true;
            // eslint-disable-next-line no-magic-numbers
            if (lastVisibleIndex < 4){
                // eslint-disable-next-line no-magic-numbers
                this.visibleLine.children[i+1].visible = false;
            }

        }

        // eslint-disable-next-line no-magic-numbers
        if (this.lives <= 0) {
            // eslint-disable-next-line no-magic-numbers
            this.visibleLine.children[0].visible = false;
            console.log("GAME OVER!!!");
            removeRocket();
        }
    }

    /**
     *
     * @param {number} increment Lives amount displacement
     */
    changeLivesAmount(increment) {
        this.lives += increment;
        this.update();
    }
}