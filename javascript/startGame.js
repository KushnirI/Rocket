import {Observable} from "./parentObjects/observable";
import {gameStart} from "./engine";

export class StartGame extends Observable{
	constructor(){
		super();

		document.getElementById("start").onclick = () => {
			document.getElementById("start").style.visibility = "hidden";
			gameStart();
			this.fireEvent("notify:gameStarted");
		}

	}
}



