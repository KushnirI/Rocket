function Events (){
	this._events = {};
}

/**
 * 
 * @param {string} eventName Name of event
 * @param {function} functionCallback Add function which should be done by event
 */
Events.prototype.addListener = function (eventName, functionCallback) {
	if( !this._events[eventName] ) {
		this.addEvent(eventName);
	}
	
	this._events[eventName].push(functionCallback);
};

/**
 * 
 * @param {string} eventName Name of event
 */
Events.prototype.addEvent = function ( eventName ) {
	this._events[eventName] = [];
}

/**
 * 
 * @param {string} eventName Name of event
 * @param {function} params Arguments for functionCallback
 */
Events.prototype.fireEvent = function (eventName, params){
	var listeners = this._events[eventName];
	
	for(var i = 0; i < listeners.length; i++) {

		listeners[i].apply(this, params);
	}
}

// eslint-disable-next-line no-unused-vars
var events = new Events();


