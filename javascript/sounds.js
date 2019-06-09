import {Observable} from "./parentObjects/observable";


export class Sounds extends Observable{
	constructor(){
		super();
		this.fireMessage = "fire sound!";
		this.botDamagedMessage = "Bot was damaged";

		this.by({
			"notify:rocket.fired" : this.fireSound,
			"notify:bot.damaged" : this.botDamagedSound
		});
	}

	botDamagedSound(){
		console.log(this.botDamagedMessage);
	}

	fireSound(a, b, c) {
		console.log(a + b + c);
		console.log(this.fireMessage);
	}
}

