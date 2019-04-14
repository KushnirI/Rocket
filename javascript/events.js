function Events (){
	this._eventsArr = [];
}

/**
 * 
 * @param {string} eventName Name of event
 * @param {function} functionCallback Add function which should be done by event
 */
Events.prototype.addListener = function (eventName, functionCallback) {
	if( !this._eventsArr[eventName] ) {
		this.addEvent(eventName);
	}
	
	this._eventsArr[eventName].push(functionCallback);
};

/**
 * 
 * @param {string} eventName Name of event
 */
Events.prototype.addEvent = function ( eventName ) {
	this._eventsArr[eventName] = [];
}

/**
 * 
 * @param {string} eventName Name of event
 * @param {function} params Arguments for functionCallback
 */
Events.prototype.fireEvent = function (eventName, params){
	for(var i = 0; i < this._eventsArr[eventName].length; i++) {
		events._eventsArr[eventName][i](params);
	}
}


var events = new Events;






























