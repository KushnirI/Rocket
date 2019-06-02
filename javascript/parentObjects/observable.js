function Observable() {

}

/**
 *
 * @param {object} params  {Object.<string, function>}
 */
Observable.prototype.on = function (params) {
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

Observable.prototype.fireEvent = function () {
    let argumentsArray = [].slice.call(arguments);
    // eslint-disable-next-line no-magic-numbers
    let eventArgs = argumentsArray.slice(1);

    // eslint-disable-next-line no-magic-numbers
    events.fireEvent(argumentsArray[0], eventArgs);
};

