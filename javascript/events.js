export class Events {
	constructor(){
		this._events = {};
	}

	/**
	 *
	 * @param {string} eventName Name of event
	 * @param {function} eventListener Add function which should be done by event
	 */
	addListener(eventName, eventListener) {
		if( !this._events[eventName] ) {
			this.addEvent(eventName);
		}

		this._events[eventName].push(eventListener);
	}

	/**
	 *
	 * @param {string} eventName Name of event
	 */
	addEvent( eventName ) {
		this._events[eventName] = [];
	}

	/**
	 *
	 * @param {string} eventName Name of event
	 * @param {function} params Arguments for functionCallback
	 */
	fireEvent(eventName, params){
		let listeners = this._events[eventName];

		for(let i = 0; i < listeners.length; i++) {
			let listener = listeners[i];
			let handler = listener.eventHandlers[eventName];

			handler.apply(listener, params);
		}
	}
}

// export let events = new Events();




