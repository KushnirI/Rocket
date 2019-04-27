function Observable() {
	this.test = "test"
}

/**
 * 
 * @param {object} params Contains function names and function callback for each name
 */
Observable.prototype.on = function ( params ) {
	for( key in params){
		events.addListener(key, params[key]);
	}
	
};

/**
 * 
 * @param {string} eventName Name of event
 * params Arguments for functionCallback
 */
Observable.prototype.fireEvent = function (eventName){
	var args = [].slice.call(arguments);
	// eslint-disable-next-line no-magic-numbers
	var params = args.slice(1)
	events.fireEvent(eventName, params);
};

