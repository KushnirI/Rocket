function Observable() {

}

/**
 * 
 * @param {string} eventName Name of event
 * @param {function} functionCallback Add function which should be done by event
 */
Observable.prototype.on = function (eventName, functionCallback) {
	events.addListener(eventName, functionCallback);
};

/**
 * 
 * @param {string} eventName Name of event
 * @param {function} params Arguments for functionCallback
 */
Observable.prototype.fireEvent = function (eventName, params){
	events.fireEvent(eventName, params);
};
