function StartGame () {
	var me = this;
	
	document.getElementById("start").onclick = function (){
		document.getElementById("start").style.visibility = "hidden";
		gameLaunched = true;
		me.fireEvent("notify:gameStarted");
	}
}


StartGame.prototype = Object.create(Observable.prototype);
StartGame.prototype.constructor = StartGame;

// eslint-disable-next-line no-unused-vars
var startGame = new StartGame();

