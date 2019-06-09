import {events} from "../engine";

export class Observable {
    constructor(){

    }
    /**
     *
     * @param {object} params  {Object.<string, function>}
     */
    by(params) {
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
    }

    fireEvent(eventName, ...args) {
        events.fireEvent(eventName, args);
    }

}


