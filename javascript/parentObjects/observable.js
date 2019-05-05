function Observable() {
	this.test = "test"
}

/**
 * 
 * @param {object} params  {Object.<string, function>}
 */
Observable.prototype.on = function ( params ) {
	for( key in params){
		if(params.hasOwnProperty(key)){
			events.addListener(key, params[key]);
		}
	}
};

/**
 * 
 * @param {string} eventName Name of event
 * 
 */
Observable.prototype.fireEvent = function (eventName){
	var argumentsArray = [].slice.call(arguments);
	// eslint-disable-next-line no-magic-numbers
	var eventArgs = argumentsArray.slice(1)
	
	events.fireEvent(eventName, eventArgs);
};

