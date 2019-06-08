function DragItems() {
    let me = this;

    app.stage.hitArea = app.screen;

    app.stage.on("mousedown", function(event) {
        let dist, obj;
        for (let i = 0; i < renderLoop.length; i++) {

            obj = renderLoop[i];
            // eslint-disable-next-line no-magic-numbers
            dist = Math.sqrt(Math.pow(obj.x - event.data.global.x, 2) + Math.pow(obj.y - event.data.global.y, 2));

            if (dist < renderLoop[i].radius) {
                selectedItem = renderLoop[i];

            }
        }
    });
    app.stage.on ("mousemove", function(event) {
        if (selectedItem) {
            // eslint-disable-next-line no-magic-numbers
            selectedItem.position.set(event.data.global.x, event.data.global.y);
        }
    });
    app.stage.on ("mouseup", function() {
        selectedItem = null;
    });

    this.startInteraction = function () {
        app.stage.interactive = true;
    };

    this.stopInteraction = function () {
        app.stage.interactive = false;
    };

    this.on({"notify:gameStarted" : me.stopInteraction });
}

DragItems.prototype = Object.create(Observable.prototype);
DragItems.prototype.constructor = DragItems;


