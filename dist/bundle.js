/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./javascript/engine.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./javascript/bots/circleBot.js":
/*!**************************************!*\
  !*** ./javascript/bots/circleBot.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CircleBot = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _engine = __webpack_require__(/*! ../engine */ "./javascript/engine.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 *
 * @constructor
 * @param {number} x Position by X
 * @param {number} y Position by Y
 * @param {number} radius Obj radius
 */
var CircleBot = exports.CircleBot = function (_PIXI$Graphics) {
    _inherits(CircleBot, _PIXI$Graphics);

    function CircleBot(x, y, radius) {
        _classCallCheck(this, CircleBot);

        // eslint-disable-next-line no-magic-numbers
        var _this = _possibleConstructorReturn(this, (CircleBot.__proto__ || Object.getPrototypeOf(CircleBot)).call(this));

        _this.lineStyle(2, 0x808B96, 1);
        // eslint-disable-next-line no-magic-numbers
        _this.beginFill(0x808B96);
        // eslint-disable-next-line no-magic-numbers
        _this.drawCircle(0, 0, radius);
        _this.endFill();
        _this.position.set(x, y);
        _engine.app.stage.addChild(_this);
        _this.radius = radius;
        _this.type = "bot";

        _this.healthPoints = 1;
        _engine.collisionDetection.push(_this);
        _this.startInteraction();
        _this.by({ "notify:gameStarted": function notifyGameStarted() {
                return _this.interactive = false;
            } });
        return _this;
    }

    _createClass(CircleBot, [{
        key: "startInteraction",
        value: function startInteraction() {
            var _this2 = this;

            this.interactive = true;
            this.on("mousedown", function () {
                _this2.selected = true;
            });

            this.on("mousemove", function (event) {
                if (_this2.selected) {
                    _this2.x = event.data.global.x;
                    _this2.y = event.data.global.y;
                }
            });

            this.on("mouseup", function () {
                _this2.selected = false;
            });
        }
    }, {
        key: "by",
        value: function by(params) {
            if (!this.eventHandlers) {
                this.eventHandlers = {};
            }

            for (var key in params) {
                if (params.hasOwnProperty(key)) {
                    if (!this.eventHandlers[key]) {
                        _engine.events.addListener(key, this);
                    }

                    this.eventHandlers[key] = params[key];
                }
            }
        }
    }, {
        key: "applyDamage",
        value: function applyDamage() {
            // eslint-disable-next-line no-magic-numbers
            if (this.healthPoints <= 0) {
                this.visible = false;
            }
            this.healthPoints--;
            this.tint = 0xF44336;
            this.alpha = 0.9;
        }
    }]);

    return CircleBot;
}(PIXI.Graphics);

/***/ }),

/***/ "./javascript/bots/ufo.js":
/*!********************************!*\
  !*** ./javascript/bots/ufo.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UfoBot = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _healthBar = __webpack_require__(/*! ../statusIndications/healthBar */ "./javascript/statusIndications/healthBar.js");

var _engine = __webpack_require__(/*! ../engine */ "./javascript/engine.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 *
 * @constructor
 * @param {number} x Position by X
 * @param {number} y Position by Y
 * @param {number} width Obj width
 * @param {number} height Obj height
 * @param {object} [colorParams] Custom color parameters for health bar
 */
var UfoBot = exports.UfoBot = function (_PIXI$Container) {
    _inherits(UfoBot, _PIXI$Container);

    function UfoBot(x, y, width, height, colorParams) {
        _classCallCheck(this, UfoBot);

        var _this = _possibleConstructorReturn(this, (UfoBot.__proto__ || Object.getPrototypeOf(UfoBot)).call(this));

        _this.sprite = new PIXI.Sprite(_engine.textures["bot.png"]);
        _this.sprite.width = width;
        _this.sprite.height = height;
        // eslint-disable-next-line no-magic-numbers
        _this.radius = _this.sprite.width / 2;
        // eslint-disable-next-line no-magic-numbers
        _this.sprite.anchor.set(0.5);
        _this.currentHealthPoints = 5;

        _this.addChild(_this.sprite);

        // eslint-disable-next-line no-magic-numbers
        _this.healthBar = new _healthBar.HealthBar(-width / 2, height / 2, width, 10, colorParams);

        _this.startHealthPoints = 5;
        _this.healthBar.healthPoints = _this.startHealthPoints;

        _this.addChild(_this.healthBar);
        _this.type = "bot";
        _this.position.set(x, y);

        _engine.app.stage.addChild(_this);
        _engine.collisionDetection.push(_this);
        _engine.renderLoop.push(_this);
        _this.startInteraction();
        _this.by({ "notify:gameStarted": function notifyGameStarted() {
                return _this.interactive = false;
            } });
        return _this;
    }

    _createClass(UfoBot, [{
        key: "startInteraction",
        value: function startInteraction() {
            var _this2 = this;

            this.interactive = true;
            this.on("mousedown", function () {
                _this2.selected = true;
            });

            this.on("mousemove", function (event) {
                if (_this2.selected) {
                    _this2.x = event.data.global.x;
                    _this2.y = event.data.global.y;
                }
            });

            this.on("mouseup", function () {
                _this2.selected = false;
            });
        }
    }, {
        key: "update",
        value: function update() {
            this.healthBar.animate();
        }
    }, {
        key: "applyDamage",
        value: function applyDamage() {

            this.healthBar.applyDamage();
            // eslint-disable-next-line no-magic-numbers
            if (--this.currentHealthPoints === 0) {
                this.visible = false;
            }

            this.fireEvent("notify:bot.damaged");
        }
    }, {
        key: "by",
        value: function by(params) {
            if (!this.eventHandlers) {
                this.eventHandlers = {};
            }

            for (var key in params) {
                if (params.hasOwnProperty(key)) {
                    if (!this.eventHandlers[key]) {
                        _engine.events.addListener(key, this);
                    }

                    this.eventHandlers[key] = params[key];
                }
            }
        }
    }, {
        key: "fireEvent",
        value: function fireEvent(eventName) {
            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
            }

            _engine.events.fireEvent(eventName, args);
        }
    }]);

    return UfoBot;
}(PIXI.Container);

/***/ }),

/***/ "./javascript/bullet.js":
/*!******************************!*\
  !*** ./javascript/bullet.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Bullet = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _engine = __webpack_require__(/*! ./engine */ "./javascript/engine.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @constructor
 * @param {object} config Start bullet configurations
 * @param {number} config.x Center of parent x
 * @param {number} config.y Center of parent y
 * @param {number} config.angle Parent direction
 * @param {number} config.rocketLength Distance from parent center to parent end
 */
var Bullet = exports.Bullet = function (_PIXI$Sprite) {
	_inherits(Bullet, _PIXI$Sprite);

	function Bullet(config) {
		_classCallCheck(this, Bullet);

		var _this = _possibleConstructorReturn(this, (Bullet.__proto__ || Object.getPrototypeOf(Bullet)).call(this, _engine.textures["bullet.png"]));

		_this.x = _this.getStartX(config.x, config.angle, config.rocketLength);
		_this.y = _this.getStartY(config.y, config.angle, config.rocketLength);
		_this.width = 18;
		_this.height = 18;
		// eslint-disable-next-line no-magic-numbers
		_this.anchor.set(0.5);
		_this.speed = 3;
		_this.type = "bullet";
		_this.rotation = config.angle;
		// eslint-disable-next-line no-magic-numbers
		_this.radius = _this.width / 2;

		_engine.collisionDetection.push(_this);
		_engine.renderLoop.push(_this);
		_engine.app.stage.addChild(_this);
		return _this;
	}

	/**
  *
  * @param {number} parentCenterX Center of parent x
  * @param {number} parentAngle Parent direction
  * @param {number} parentHalfLength Displacement from parent center to parent end
  * @return {number} Start x
  */


	_createClass(Bullet, [{
		key: "getStartX",
		value: function getStartX(parentCenterX, parentAngle, parentHalfLength) {
			// eslint-disable-next-line no-magic-numbers
			return parentCenterX + Math.cos(parentAngle - Math.PI / 2) * parentHalfLength;
		}

		/**
   *
   * @param {number} parentCenterY Center of parent y
   * @param {number} parentAngle Parent direction
   * @param {number} parentHalfLength Displacement from parent center to parent end
   * @return {number} Start y
   */

	}, {
		key: "getStartY",
		value: function getStartY(parentCenterY, parentAngle, parentHalfLength) {
			// eslint-disable-next-line no-magic-numbers
			return parentCenterY + Math.sin(parentAngle - Math.PI / 2) * parentHalfLength;
		}
	}, {
		key: "update",
		value: function update() {
			this.move(this.speed);
			// eslint-disable-next-line no-magic-numbers
			if (this.x > 1000 || this.y > 1000 || this.x < -200 || this.y < -200) {

				this.visible = false;
				(0, _engine.makeFiltration)();
			}
		}
	}, {
		key: "move",
		value: function move(step) {
			// eslint-disable-next-line no-magic-numbers
			this.x += Math.cos(this.rotation - Math.PI / 2) * step;
			// eslint-disable-next-line no-magic-numbers
			this.y += Math.sin(this.rotation - Math.PI / 2) * step;
		}
	}]);

	return Bullet;
}(PIXI.Sprite);

/***/ }),

/***/ "./javascript/engine.js":
/*!******************************!*\
  !*** ./javascript/engine.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.removeRocket = exports.makeFiltration = exports.gameStart = exports.filtrationRequired = exports.collisionDetection = exports.renderLoop = exports.selectedItem = exports.gameLaunched = exports.sounds = exports.events = exports.startGame = exports.shouldRemove = exports.bots = exports.supplies = exports.rocketLives = exports.rocket = exports.background = exports.textures = exports.app = undefined;

var _medicine = __webpack_require__(/*! ./supplies/medicine.js */ "./javascript/supplies/medicine.js");

var _circleBot = __webpack_require__(/*! ./bots/circleBot */ "./javascript/bots/circleBot.js");

var _ufo = __webpack_require__(/*! ./bots/ufo */ "./javascript/bots/ufo.js");

var _rocketLifes = __webpack_require__(/*! ./statusIndications/rocketLifes */ "./javascript/statusIndications/rocketLifes.js");

var _ammo = __webpack_require__(/*! ./supplies/ammo */ "./javascript/supplies/ammo.js");

var _rocket = __webpack_require__(/*! ./rocket */ "./javascript/rocket.js");

var _startGame = __webpack_require__(/*! ./startGame */ "./javascript/startGame.js");

var _events = __webpack_require__(/*! ./events */ "./javascript/events.js");

var _sounds = __webpack_require__(/*! ./sounds */ "./javascript/sounds.js");

var app = exports.app = new PIXI.Application({
	width: 700,
	height: 450
});

document.body.appendChild(app.view);

var textures = exports.textures = void 0,
    background = exports.background = void 0,

// eslint-disable-next-line no-unused-vars
rocket = exports.rocket = void 0,
    rocketLives = exports.rocketLives = void 0,

// eslint-disable-next-line no-unused-vars
supplies = exports.supplies = void 0,

// eslint-disable-next-line no-unused-vars
bots = exports.bots = void 0,

// eslint-disable-next-line no-unused-vars
shouldRemove = exports.shouldRemove = void 0,
    startGame = exports.startGame = void 0,
    events = exports.events = void 0,
    sounds = exports.sounds = void 0;

// eslint-disable-next-line no-unused-vars
var gameLaunched = exports.gameLaunched = false;
// eslint-disable-next-line no-unused-vars
var selectedItem = exports.selectedItem = null;

var renderLoop = exports.renderLoop = [];
var collisionDetection = exports.collisionDetection = [];
var filtrationRequired = exports.filtrationRequired = false;

PIXI.Loader.shared.add("./images/sheet.json").load(setup);

function setup() {
	exports.textures = textures = PIXI.Loader.shared.resources["./images/sheet.json"].textures;

	exports.background = background = new PIXI.Sprite(textures["space.png"]);
	app.stage.addChild(background);
	exports.events = events = new _events.Events();
	// eslint-disable-next-line no-magic-numbers
	exports.rocket = rocket = new _rocket.Rocket(60, 90, "battlecruiser.png");

	exports.rocketLives = rocketLives = new _rocketLifes.RocketLives();
	exports.startGame = startGame = new _startGame.StartGame();
	exports.sounds = sounds = new _sounds.Sounds();

	exports.supplies = supplies = [
	// eslint-disable-next-line no-magic-numbers
	new _medicine.Medicine(120, 270),
	// eslint-disable-next-line no-magic-numbers
	new _medicine.Medicine(540, 250),
	// eslint-disable-next-line no-magic-numbers
	new _medicine.Medicine(440, 50),
	// eslint-disable-next-line no-magic-numbers
	new _ammo.Ammo(660, 50),
	// eslint-disable-next-line no-magic-numbers
	new _ammo.Ammo(640, 400),
	// eslint-disable-next-line no-magic-numbers
	new _ammo.Ammo(610, 70),
	// eslint-disable-next-line no-magic-numbers
	new _ammo.Ammo(290, 380)];

	exports.bots = bots = [
	// eslint-disable-next-line no-magic-numbers
	new _ufo.UfoBot(358, 358, 75, 75),
	// eslint-disable-next-line no-magic-numbers
	new _ufo.UfoBot(205, 345, 50, 50),
	// eslint-disable-next-line no-magic-numbers
	new _ufo.UfoBot(305, 75, 50, 50),
	// eslint-disable-next-line no-magic-numbers
	new _ufo.UfoBot(605, 155, 110, 110, { live: 0x03A9F4, animation: 0xF57C00, damage: 0x000000 }),
	// eslint-disable-next-line no-magic-numbers
	new _ufo.UfoBot(525, 65, 70, 70),
	// eslint-disable-next-line no-magic-numbers
	new _circleBot.CircleBot(180, 200, 20),
	// eslint-disable-next-line no-magic-numbers
	new _circleBot.CircleBot(300, 300, 35),
	// eslint-disable-next-line no-magic-numbers
	new _circleBot.CircleBot(400, 180, 15)];

	app.ticker.add(function (delta) {
		return gameLoop(delta);
	});
}

var gameLoop = function gameLoop() {
	collisionCheck();
	rocketLives.update();

	for (var i = 0; i < renderLoop.length; i++) {
		renderLoop[i].update();
	}

	if (filtrationRequired) {
		removeUseless();
	}
};

function collisionCheck() {
	var obj1 = void 0,
	    obj2 = void 0,
	    dist = void 0;
	for (var i = 0; i < collisionDetection.length; i++) {
		obj1 = collisionDetection[i];

		for (var j = 0; j < collisionDetection.length; j++) {

			if (i !== j) {
				obj2 = collisionDetection[j];
				// eslint-disable-next-line no-magic-numbers
				dist = Math.sqrt(Math.pow(obj1.x - obj2.x, 2) + Math.pow(obj1.y - obj2.y, 2));

				if (dist < obj1.radius + obj2.radius) {

					if (obj1.type === "bot" && obj2.type === "bullet") {
						obj1.applyDamage();
						obj2.visible = false;
						exports.filtrationRequired = filtrationRequired = true;
					}

					if (obj1.type === "bot" && obj2.type === "rocket") {
						obj1.applyDamage();
						obj2.applyDamage();
						exports.filtrationRequired = filtrationRequired = true;
					}

					if (obj1.type === "medicine" && obj2.type === "rocket") {
						obj1.visible = false;
						obj2.applyLive();
						exports.filtrationRequired = filtrationRequired = true;
					}

					if (obj1.type === "ammo" && obj2.type === "rocket") {
						obj1.visible = false;
						obj2.applyAmmo();
						exports.filtrationRequired = filtrationRequired = true;
					}
				}
			}
		}
	}
}

function removeUseless() {
	exports.collisionDetection = collisionDetection = collisionDetection.filter(function (item) {
		return item.visible;
	});
	exports.renderLoop = renderLoop = renderLoop.filter(function (item) {
		return item.visible;
	});

	exports.shouldRemove = shouldRemove = false;
}

var gameStart = exports.gameStart = function gameStart() {
	exports.gameLaunched = gameLaunched = true;
};

var makeFiltration = exports.makeFiltration = function makeFiltration() {
	exports.filtrationRequired = filtrationRequired = true;
};

var removeRocket = exports.removeRocket = function removeRocket() {
	rocket.visible = false;
};

/***/ }),

/***/ "./javascript/events.js":
/*!******************************!*\
  !*** ./javascript/events.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Events = exports.Events = function () {
	function Events() {
		_classCallCheck(this, Events);

		this._events = {};
	}

	/**
  *
  * @param {string} eventName Name of event
  * @param {function} eventListener Add function which should be done by event
  */


	_createClass(Events, [{
		key: "addListener",
		value: function addListener(eventName, eventListener) {
			if (!this._events[eventName]) {
				this.addEvent(eventName);
			}

			this._events[eventName].push(eventListener);
		}

		/**
   *
   * @param {string} eventName Name of event
   */

	}, {
		key: "addEvent",
		value: function addEvent(eventName) {
			this._events[eventName] = [];
		}

		/**
   *
   * @param {string} eventName Name of event
   * @param {function} params Arguments for functionCallback
   */

	}, {
		key: "fireEvent",
		value: function fireEvent(eventName, params) {
			var listeners = this._events[eventName];

			for (var i = 0; i < listeners.length; i++) {
				var listener = listeners[i];
				var handler = listener.eventHandlers[eventName];

				handler.apply(listener, params);
			}
		}
	}]);

	return Events;
}();

/***/ }),

/***/ "./javascript/parentObjects/observable.js":
/*!************************************************!*\
  !*** ./javascript/parentObjects/observable.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Observable = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _engine = __webpack_require__(/*! ../engine */ "./javascript/engine.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Observable = exports.Observable = function () {
    function Observable() {
        _classCallCheck(this, Observable);
    }

    _createClass(Observable, [{
        key: "by",

        /**
         * @param {object} params  {Object.<string, function>}
         */
        value: function by(params) {
            if (!this.eventHandlers) {
                this.eventHandlers = {};
            }

            for (var key in params) {
                if (params.hasOwnProperty(key)) {
                    if (!this.eventHandlers[key]) {
                        _engine.events.addListener(key, this);
                    }

                    this.eventHandlers[key] = params[key];
                }
            }
        }
    }, {
        key: "fireEvent",
        value: function fireEvent(eventName) {
            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
            }

            _engine.events.fireEvent(eventName, args);
        }
    }]);

    return Observable;
}();

/***/ }),

/***/ "./javascript/parentObjects/rectangle.js":
/*!***********************************************!*\
  !*** ./javascript/parentObjects/rectangle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 *
 * @constructor
 * @param {number} x Position by X
 * @param {number} y Position by Y
 * @param {number} width Obj width
 * @param {number} height Obj height
 * @param {number} color Filling color in HEX
 */

var Rectangle = exports.Rectangle = function (_PIXI$Graphics) {
    _inherits(Rectangle, _PIXI$Graphics);

    function Rectangle(x, y, width, height, color) {
        _classCallCheck(this, Rectangle);

        // eslint-disable-next-line no-magic-numbers
        var _this = _possibleConstructorReturn(this, (Rectangle.__proto__ || Object.getPrototypeOf(Rectangle)).call(this));

        _this.lineStyle(1, 0x000000, 1);
        _this.beginFill(color);
        // eslint-disable-next-line no-magic-numbers
        _this.drawRect(0, 0, width, height);
        _this.endFill();
        _this.position.set(x, y);
        return _this;
    }

    return Rectangle;
}(PIXI.Graphics);

/***/ }),

/***/ "./javascript/rocket.js":
/*!******************************!*\
  !*** ./javascript/rocket.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Rocket = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bullet = __webpack_require__(/*! ./bullet */ "./javascript/bullet.js");

var _engine = __webpack_require__(/*! ./engine */ "./javascript/engine.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rocket = exports.Rocket = function (_PIXI$Sprite) {
	_inherits(Rocket, _PIXI$Sprite);

	function Rocket(x, y, fileName) {
		_classCallCheck(this, Rocket);

		var _this = _possibleConstructorReturn(this, (Rocket.__proto__ || Object.getPrototypeOf(Rocket)).call(this, _engine.textures[fileName]));

		_this.width = 90;
		_this.height = 90;
		_this.rotation = 0;
		_this.selected = false;
		// eslint-disable-next-line no-magic-numbers
		_this.anchor.set(0.5);
		_this.bulletsAmount = 50;
		_this.showBulletsAmount();
		// eslint-disable-next-line no-magic-numbers
		_this.radius = _this.width / 2;

		_this.controls = {
			key37: false,
			key38: false,
			key39: false,
			key40: false
		};

		_this.type = "rocket";
		_this.speed = 2;
		_this.angleStep = 0.05;

		_this.by({ "notify:gameStarted": _this.startGame });

		_engine.renderLoop.push(_this);
		_engine.app.stage.addChild(_this);
		_this.position.set(x, y);

		_this.startInteraction();
		return _this;
	}

	_createClass(Rocket, [{
		key: "startInteraction",
		value: function startInteraction() {
			var _this2 = this;

			this.interactive = true;
			this.on("mousedown", function () {
				_this2.selected = true;
			});

			this.on("mousemove", function (event) {
				if (_this2.selected) {
					_this2.x = event.data.global.x;
					_this2.y = event.data.global.y;
				}
			});

			this.on("mouseup", function () {
				_this2.selected = false;
			});
		}
	}, {
		key: "move",
		value: function move(step) {
			// eslint-disable-next-line no-magic-numbers
			this.x += Math.cos(this.rotation - Math.PI / 2) * step;
			// eslint-disable-next-line no-magic-numbers
			this.y += Math.sin(this.rotation - Math.PI / 2) * step;

			// eslint-disable-next-line no-magic-numbers
			if (this.x < this.width / 2) {
				// eslint-disable-next-line no-magic-numbers
				this.x = this.width / 2;
			}
			// eslint-disable-next-line no-magic-numbers
			if (this.y < this.height / 2) {
				// eslint-disable-next-line no-magic-numbers
				this.y = this.height / 2;
			}
			// eslint-disable-next-line no-magic-numbers
			if (this.x > 700 - this.width / 2) {
				// eslint-disable-next-line no-magic-numbers
				this.x = 700 - this.width / 2;
			}
			// eslint-disable-next-line no-magic-numbers
			if (this.y > 450 - this.height / 2) {
				// eslint-disable-next-line no-magic-numbers
				this.y = 450 - this.height / 2;
			}
		}
	}, {
		key: "startGame",
		value: function startGame() {
			var _this3 = this;

			_engine.collisionDetection.push(this);
			this.interactive = false;

			document.addEventListener("keydown", function (event) {
				_this3.setKey(event.keyCode, true);
			});

			document.addEventListener("keyup", function (event) {
				_this3.setKey(event.keyCode, false);
			});

			document.addEventListener("keypress", function (event) {
				// eslint-disable-next-line no-magic-numbers
				if (event.keyCode === 32) {
					// eslint-disable-next-line no-magic-numbers
					if (_this3.bulletsAmount > 0 && _engine.rocketLives.lives > 0) {
						// eslint-disable-next-line no-magic-numbers
						_this3.shoot({ x: _this3.x, y: _this3.y, angle: _this3.rotation, rocketLength: _this3.height / 2 });
					} else {
						console.log("no bullets!");
					}
				}
			});
		}
	}, {
		key: "shoot",
		value: function shoot(config) {
			new _bullet.Bullet(config);
			this.bulletsAmount--;
			this.showBulletsAmount();
			this.fireEvent("notify:rocket.fired", "arguments ", "added ", "using apply");
		}
	}, {
		key: "update",
		value: function update() {

			if (this.controls.key38) {
				this.move(this.speed);
			}
			if (this.controls.key40) {
				this.move(-this.speed);
			}
			if (this.controls.key37) {
				this.changeAngle(-this.angleStep);
			}
			if (this.controls.key39) {
				this.changeAngle(this.angleStep);
			}
		}

		/**
   *
   * @param {number} step Amount of angle displacement
   */

	}, {
		key: "changeAngle",
		value: function changeAngle(step) {
			this.rotation += step;
		}

		/**
   *
   * @param {number} keyCode Keyboard keyCode
   * @param {boolean} status Enable/disable
   */

	}, {
		key: "setKey",
		value: function setKey(keyCode, status) {
			this.controls["key" + keyCode] = status;
		}
	}, {
		key: "applyDamage",
		value: function applyDamage() {
			// eslint-disable-next-line no-magic-numbers
			this.position.set(60, 90);
			this.rotation = 0;
			// eslint-disable-next-line no-magic-numbers
			_engine.rocketLives.changeLivesAmount(-1);
		}
	}, {
		key: "applyLive",
		value: function applyLive() {
			// eslint-disable-next-line no-magic-numbers
			_engine.rocketLives.changeLivesAmount(1);
		}
	}, {
		key: "showBulletsAmount",
		value: function showBulletsAmount() {
			console.log("number of bullets: " + this.bulletsAmount);
		}
	}, {
		key: "applyAmmo",
		value: function applyAmmo() {
			this.bulletsAmount += 7;
			this.showBulletsAmount();
		}

		/**
   *
   * @param {object} params  {Object.<string, function>}
   */

	}, {
		key: "by",
		value: function by(params) {
			if (!this.eventHandlers) {
				this.eventHandlers = {};
			}

			for (var key in params) {
				if (params.hasOwnProperty(key)) {
					if (!this.eventHandlers[key]) {
						_engine.events.addListener(key, this);
					}

					this.eventHandlers[key] = params[key];
				}
			}
		}
	}, {
		key: "fireEvent",
		value: function fireEvent(eventName) {
			for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
				args[_key - 1] = arguments[_key];
			}

			_engine.events.fireEvent(eventName, args);
		}
	}]);

	return Rocket;
}(PIXI.Sprite);

/***/ }),

/***/ "./javascript/sounds.js":
/*!******************************!*\
  !*** ./javascript/sounds.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Sounds = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _observable = __webpack_require__(/*! ./parentObjects/observable */ "./javascript/parentObjects/observable.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sounds = exports.Sounds = function (_Observable) {
	_inherits(Sounds, _Observable);

	function Sounds() {
		_classCallCheck(this, Sounds);

		var _this = _possibleConstructorReturn(this, (Sounds.__proto__ || Object.getPrototypeOf(Sounds)).call(this));

		_this.fireMessage = "fire sound!";
		_this.botDamagedMessage = "Bot was damaged";

		_this.by({
			"notify:rocket.fired": _this.fireSound,
			"notify:bot.damaged": _this.botDamagedSound
		});
		return _this;
	}

	_createClass(Sounds, [{
		key: "botDamagedSound",
		value: function botDamagedSound() {
			console.log(this.botDamagedMessage);
		}
	}, {
		key: "fireSound",
		value: function fireSound(a, b, c) {
			console.log(a + b + c);
			console.log(this.fireMessage);
		}
	}]);

	return Sounds;
}(_observable.Observable);

/***/ }),

/***/ "./javascript/startGame.js":
/*!*********************************!*\
  !*** ./javascript/startGame.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.StartGame = undefined;

var _observable = __webpack_require__(/*! ./parentObjects/observable */ "./javascript/parentObjects/observable.js");

var _engine = __webpack_require__(/*! ./engine */ "./javascript/engine.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StartGame = exports.StartGame = function (_Observable) {
	_inherits(StartGame, _Observable);

	function StartGame() {
		_classCallCheck(this, StartGame);

		var _this = _possibleConstructorReturn(this, (StartGame.__proto__ || Object.getPrototypeOf(StartGame)).call(this));

		document.getElementById("start").onclick = function () {
			document.getElementById("start").style.visibility = "hidden";
			(0, _engine.gameStart)();
			_this.fireEvent("notify:gameStarted");
		};
		return _this;
	}

	return StartGame;
}(_observable.Observable);

/***/ }),

/***/ "./javascript/statusIndications/healthBar.js":
/*!***************************************************!*\
  !*** ./javascript/statusIndications/healthBar.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HealthBar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rectangle = __webpack_require__(/*! ../parentObjects/rectangle.js */ "./javascript/parentObjects/rectangle.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @constructor
 * @param {number} x Position by X
 * @param {number} y Position by Y
 * @param {number} width Bar width
 * @param {number} height Bar height
 * @param {object} [colorParams] Custom color parameters
 */
var HealthBar = exports.HealthBar = function (_PIXI$Container) {
    _inherits(HealthBar, _PIXI$Container);

    function HealthBar(x, y, width, height) {
        var colorParams = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : { live: 0x388E3C, animation: 0xFFEE58, damage: 0xF44336 };

        _classCallCheck(this, HealthBar);

        var _this = _possibleConstructorReturn(this, (HealthBar.__proto__ || Object.getPrototypeOf(HealthBar)).call(this));

        _this.width = width;
        _this.damageLine = _this.addChild(new _rectangle.Rectangle(x, y, width, height, colorParams.damage));
        _this.animationLine = _this.addChild(new _rectangle.Rectangle(x, y, width, height, colorParams.animation));
        _this.liveLine = _this.addChild(new _rectangle.Rectangle(x, y, width, height, colorParams.live));

        _this.healthPoints = 3;
        _this.animationStep = 0.5;
        return _this;
    }

    _createClass(HealthBar, [{
        key: "applyDamage",
        value: function applyDamage() {
            this.liveLine.width -= this.width / this.healthPoints;
        }
    }, {
        key: "animate",
        value: function animate() {
            if (this.liveLine.width < this.animationLine.width) {
                this.animationLine.width -= this.animationStep;
            }
        }
    }]);

    return HealthBar;
}(PIXI.Container);

/***/ }),

/***/ "./javascript/statusIndications/rocketLifes.js":
/*!*****************************************************!*\
  !*** ./javascript/statusIndications/rocketLifes.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RocketLives = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _engine = __webpack_require__(/*! ../engine */ "./javascript/engine.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RocketLives = exports.RocketLives = function (_PIXI$Container) {
    _inherits(RocketLives, _PIXI$Container);

    function RocketLives() {
        _classCallCheck(this, RocketLives);

        var _this = _possibleConstructorReturn(this, (RocketLives.__proto__ || Object.getPrototypeOf(RocketLives)).call(this));

        _this.lives = 2;
        _this.visibleLine = new PIXI.Container();

        // eslint-disable-next-line no-magic-numbers
        for (var i = 0; i < 3; i++) {
            var heart = new PIXI.Sprite(_engine.textures["heart.png"]);
            heart.width = 30;
            heart.height = 30;
            // eslint-disable-next-line no-magic-numbers
            heart.position.set(i * heart.width, 10);

            _this.visibleLine.addChild(heart);
        }

        var plus = new PIXI.Sprite(_engine.textures["plus.png"]);
        plus.width = 30;
        plus.height = 30;
        // eslint-disable-next-line no-magic-numbers
        plus.position.set(plus.width * 3, 10);

        _this.visibleLine.addChild(plus);

        _engine.app.stage.addChild(_this.visibleLine);

        _this.visibleLine.children.forEach(function (child) {
            child.visible = false;
        });

        _this.update();
        return _this;
    }

    _createClass(RocketLives, [{
        key: "update",
        value: function update() {

            var lastVisibleIndex = Math.min(this.visibleLine.children.length, this.lives);

            for (var i = 0; i < lastVisibleIndex; i++) {
                this.visibleLine.children[i].visible = true;
                // eslint-disable-next-line no-magic-numbers
                if (lastVisibleIndex < 4) {
                    // eslint-disable-next-line no-magic-numbers
                    this.visibleLine.children[i + 1].visible = false;
                }
            }

            // eslint-disable-next-line no-magic-numbers
            if (this.lives <= 0) {
                // eslint-disable-next-line no-magic-numbers
                this.visibleLine.children[0].visible = false;
                console.log("GAME OVER!!!");
                (0, _engine.removeRocket)();
            }
        }

        /**
         *
         * @param {number} increment Lives amount displacement
         */

    }, {
        key: "changeLivesAmount",
        value: function changeLivesAmount(increment) {
            this.lives += increment;
            this.update();
        }
    }]);

    return RocketLives;
}(PIXI.Container);

/***/ }),

/***/ "./javascript/supplies/ammo.js":
/*!*************************************!*\
  !*** ./javascript/supplies/ammo.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Ammo = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _engine = __webpack_require__(/*! ../engine */ "./javascript/engine.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Ammo = exports.Ammo = function (_PIXI$Sprite) {
	_inherits(Ammo, _PIXI$Sprite);

	function Ammo(x, y) {
		_classCallCheck(this, Ammo);

		// eslint-disable-next-line no-magic-numbers
		var _this = _possibleConstructorReturn(this, (Ammo.__proto__ || Object.getPrototypeOf(Ammo)).call(this, _engine.textures["ammo2.png"]));

		_this.anchor.set(0.5);
		_this.width = 45;
		_this.height = 45;
		_this.position.set(x, y);
		// eslint-disable-next-line no-magic-numbers
		_this.radius = _this.width / 2;
		_engine.app.stage.addChild(_this);
		_engine.collisionDetection.push(_this);

		_this.type = "ammo";
		_this.startInteraction();
		_this.by({ "notify:gameStarted": function notifyGameStarted() {
				return _this.interactive = false;
			} });
		return _this;
	}

	_createClass(Ammo, [{
		key: "startInteraction",
		value: function startInteraction() {
			var _this2 = this;

			this.interactive = true;
			this.on("mousedown", function () {
				_this2.selected = true;
			});

			this.on("mousemove", function (event) {
				if (_this2.selected) {
					_this2.x = event.data.global.x;
					_this2.y = event.data.global.y;
				}
			});

			this.on("mouseup", function () {
				_this2.selected = false;
			});
		}
	}, {
		key: "by",
		value: function by(params) {
			if (!this.eventHandlers) {
				this.eventHandlers = {};
			}

			for (var key in params) {
				if (params.hasOwnProperty(key)) {
					if (!this.eventHandlers[key]) {
						_engine.events.addListener(key, this);
					}

					this.eventHandlers[key] = params[key];
				}
			}
		}
	}]);

	return Ammo;
}(PIXI.Sprite);

/***/ }),

/***/ "./javascript/supplies/medicine.js":
/*!*****************************************!*\
  !*** ./javascript/supplies/medicine.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Medicine = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _engine = __webpack_require__(/*! ../engine */ "./javascript/engine.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Medicine = exports.Medicine = function (_PIXI$Sprite) {
	_inherits(Medicine, _PIXI$Sprite);

	function Medicine(x, y) {
		_classCallCheck(this, Medicine);

		// eslint-disable-next-line no-magic-numbers
		var _this = _possibleConstructorReturn(this, (Medicine.__proto__ || Object.getPrototypeOf(Medicine)).call(this, _engine.textures["medicine.png"]));

		_this.anchor.set(0.5);
		_this.width = 45;
		_this.height = 45;
		_this.position.set(x, y);
		// eslint-disable-next-line no-magic-numbers
		_this.radius = _this.width / 2;
		_engine.app.stage.addChild(_this);
		_this.type = "medicine";
		_engine.collisionDetection.push(_this);

		_this.startInteraction();
		_this.by({ "notify:gameStarted": function notifyGameStarted() {
				return _this.interactive = false;
			} });
		return _this;
	}

	_createClass(Medicine, [{
		key: "startInteraction",
		value: function startInteraction() {
			var _this2 = this;

			this.interactive = true;
			this.on("mousedown", function () {
				_this2.selected = true;
			});

			this.on("mousemove", function (event) {
				if (_this2.selected) {
					_this2.x = event.data.global.x;
					_this2.y = event.data.global.y;
				}
			});

			this.on("mouseup", function () {
				_this2.selected = false;
			});
		}
	}, {
		key: "by",
		value: function by(params) {
			if (!this.eventHandlers) {
				this.eventHandlers = {};
			}

			for (var key in params) {
				if (params.hasOwnProperty(key)) {
					if (!this.eventHandlers[key]) {
						_engine.events.addListener(key, this);
					}

					this.eventHandlers[key] = params[key];
				}
			}
		}
	}]);

	return Medicine;
}(PIXI.Sprite);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9ib3RzL2NpcmNsZUJvdC5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L2JvdHMvdWZvLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvYnVsbGV0LmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvZW5naW5lLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvZXZlbnRzLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvcGFyZW50T2JqZWN0cy9vYnNlcnZhYmxlLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvcGFyZW50T2JqZWN0cy9yZWN0YW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9yb2NrZXQuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9zb3VuZHMuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9zdGFydEdhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9zdGF0dXNJbmRpY2F0aW9ucy9oZWFsdGhCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9zdGF0dXNJbmRpY2F0aW9ucy9yb2NrZXRMaWZlcy5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L3N1cHBsaWVzL2FtbW8uanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9zdXBwbGllcy9tZWRpY2luZS5qcyJdLCJuYW1lcyI6WyJDaXJjbGVCb3QiLCJ4IiwieSIsInJhZGl1cyIsImxpbmVTdHlsZSIsImJlZ2luRmlsbCIsImRyYXdDaXJjbGUiLCJlbmRGaWxsIiwicG9zaXRpb24iLCJzZXQiLCJhcHAiLCJzdGFnZSIsImFkZENoaWxkIiwidHlwZSIsImhlYWx0aFBvaW50cyIsImNvbGxpc2lvbkRldGVjdGlvbiIsInB1c2giLCJzdGFydEludGVyYWN0aW9uIiwiYnkiLCJpbnRlcmFjdGl2ZSIsIm9uIiwic2VsZWN0ZWQiLCJldmVudCIsImRhdGEiLCJnbG9iYWwiLCJwYXJhbXMiLCJldmVudEhhbmRsZXJzIiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJldmVudHMiLCJhZGRMaXN0ZW5lciIsInZpc2libGUiLCJ0aW50IiwiYWxwaGEiLCJQSVhJIiwiR3JhcGhpY3MiLCJVZm9Cb3QiLCJ3aWR0aCIsImhlaWdodCIsImNvbG9yUGFyYW1zIiwic3ByaXRlIiwiU3ByaXRlIiwidGV4dHVyZXMiLCJhbmNob3IiLCJjdXJyZW50SGVhbHRoUG9pbnRzIiwiaGVhbHRoQmFyIiwiSGVhbHRoQmFyIiwic3RhcnRIZWFsdGhQb2ludHMiLCJyZW5kZXJMb29wIiwiYW5pbWF0ZSIsImFwcGx5RGFtYWdlIiwiZmlyZUV2ZW50IiwiZXZlbnROYW1lIiwiYXJncyIsIkNvbnRhaW5lciIsIkJ1bGxldCIsImNvbmZpZyIsImdldFN0YXJ0WCIsImFuZ2xlIiwicm9ja2V0TGVuZ3RoIiwiZ2V0U3RhcnRZIiwic3BlZWQiLCJyb3RhdGlvbiIsInBhcmVudENlbnRlclgiLCJwYXJlbnRBbmdsZSIsInBhcmVudEhhbGZMZW5ndGgiLCJNYXRoIiwiY29zIiwiUEkiLCJwYXJlbnRDZW50ZXJZIiwic2luIiwibW92ZSIsInN0ZXAiLCJBcHBsaWNhdGlvbiIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwidmlldyIsImJhY2tncm91bmQiLCJyb2NrZXQiLCJyb2NrZXRMaXZlcyIsInN1cHBsaWVzIiwiYm90cyIsInNob3VsZFJlbW92ZSIsInN0YXJ0R2FtZSIsInNvdW5kcyIsImdhbWVMYXVuY2hlZCIsInNlbGVjdGVkSXRlbSIsImZpbHRyYXRpb25SZXF1aXJlZCIsIkxvYWRlciIsInNoYXJlZCIsImFkZCIsImxvYWQiLCJzZXR1cCIsInJlc291cmNlcyIsIkV2ZW50cyIsIlJvY2tldCIsIlJvY2tldExpdmVzIiwiU3RhcnRHYW1lIiwiU291bmRzIiwiTWVkaWNpbmUiLCJBbW1vIiwibGl2ZSIsImFuaW1hdGlvbiIsImRhbWFnZSIsInRpY2tlciIsImdhbWVMb29wIiwiZGVsdGEiLCJjb2xsaXNpb25DaGVjayIsInVwZGF0ZSIsImkiLCJsZW5ndGgiLCJyZW1vdmVVc2VsZXNzIiwib2JqMSIsIm9iajIiLCJkaXN0IiwiaiIsInNxcnQiLCJwb3ciLCJhcHBseUxpdmUiLCJhcHBseUFtbW8iLCJmaWx0ZXIiLCJpdGVtIiwiZ2FtZVN0YXJ0IiwibWFrZUZpbHRyYXRpb24iLCJyZW1vdmVSb2NrZXQiLCJfZXZlbnRzIiwiZXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50IiwibGlzdGVuZXJzIiwibGlzdGVuZXIiLCJoYW5kbGVyIiwiYXBwbHkiLCJPYnNlcnZhYmxlIiwiUmVjdGFuZ2xlIiwiY29sb3IiLCJkcmF3UmVjdCIsImZpbGVOYW1lIiwiYnVsbGV0c0Ftb3VudCIsInNob3dCdWxsZXRzQW1vdW50IiwiY29udHJvbHMiLCJrZXkzNyIsImtleTM4Iiwia2V5MzkiLCJrZXk0MCIsImFuZ2xlU3RlcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXRLZXkiLCJrZXlDb2RlIiwibGl2ZXMiLCJzaG9vdCIsImNvbnNvbGUiLCJsb2ciLCJjaGFuZ2VBbmdsZSIsInN0YXR1cyIsImNoYW5nZUxpdmVzQW1vdW50IiwiZmlyZU1lc3NhZ2UiLCJib3REYW1hZ2VkTWVzc2FnZSIsImZpcmVTb3VuZCIsImJvdERhbWFnZWRTb3VuZCIsImEiLCJiIiwiYyIsImdldEVsZW1lbnRCeUlkIiwib25jbGljayIsInN0eWxlIiwidmlzaWJpbGl0eSIsImRhbWFnZUxpbmUiLCJhbmltYXRpb25MaW5lIiwibGl2ZUxpbmUiLCJhbmltYXRpb25TdGVwIiwidmlzaWJsZUxpbmUiLCJoZWFydCIsInBsdXMiLCJjaGlsZHJlbiIsImZvckVhY2giLCJjaGlsZCIsImxhc3RWaXNpYmxlSW5kZXgiLCJtaW4iLCJpbmNyZW1lbnQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FB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LEdBQW5CLEVBQXdCLElBQXhCO0FBQ0E7O0FBRUQsVUFBS0QsYUFBTCxDQUFtQkMsR0FBbkIsSUFBMEJGLE9BQU9FLEdBQVAsQ0FBMUI7QUFDQTtBQUNEO0FBQ0Q7Ozs7RUFsRDRCTyxLQUFLTyxNIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vamF2YXNjcmlwdC9lbmdpbmUuanNcIik7XG4iLCJpbXBvcnQge2NvbGxpc2lvbkRldGVjdGlvbiwgYXBwLCBldmVudHN9IGZyb20gXCIuLi9lbmdpbmVcIjtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHBhcmFtIHtudW1iZXJ9IHggUG9zaXRpb24gYnkgWFxyXG4gKiBAcGFyYW0ge251bWJlcn0geSBQb3NpdGlvbiBieSBZXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSByYWRpdXMgT2JqIHJhZGl1c1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENpcmNsZUJvdCBleHRlbmRzIFBJWEkuR3JhcGhpY3N7XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCByYWRpdXMpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1tYWdpYy1udW1iZXJzXHJcbiAgICAgICAgdGhpcy5saW5lU3R5bGUoMiwgMHg4MDhCOTYsIDEpO1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1tYWdpYy1udW1iZXJzXHJcbiAgICAgICAgdGhpcy5iZWdpbkZpbGwoMHg4MDhCOTYpO1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1tYWdpYy1udW1iZXJzXHJcbiAgICAgICAgdGhpcy5kcmF3Q2lyY2xlKDAsIDAsIHJhZGl1cyk7XHJcbiAgICAgICAgdGhpcy5lbmRGaWxsKCk7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5zZXQoeCwgeSk7XHJcbiAgICAgICAgYXBwLnN0YWdlLmFkZENoaWxkKHRoaXMpO1xyXG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IFwiYm90XCI7XHJcblxyXG4gICAgICAgIHRoaXMuaGVhbHRoUG9pbnRzID0gMTtcclxuICAgICAgICBjb2xsaXNpb25EZXRlY3Rpb24ucHVzaCh0aGlzKTtcclxuICAgICAgICB0aGlzLnN0YXJ0SW50ZXJhY3Rpb24oKTtcclxuICAgICAgICB0aGlzLmJ5KHsgXCJub3RpZnk6Z2FtZVN0YXJ0ZWRcIiA6ICgpID0+ICB0aGlzLmludGVyYWN0aXZlID0gZmFsc2V9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydEludGVyYWN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMub24oXCJtb3VzZWRvd25cIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5vbihcIm1vdXNlbW92ZVwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYodGhpcy5zZWxlY3RlZCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnggPSBldmVudC5kYXRhLmdsb2JhbC54O1xyXG4gICAgICAgICAgICAgICAgdGhpcy55ID0gZXZlbnQuZGF0YS5nbG9iYWwueTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLm9uKFwibW91c2V1cFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBieShwYXJhbXMpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZXZlbnRIYW5kbGVycykge1xyXG4gICAgICAgICAgICB0aGlzLmV2ZW50SGFuZGxlcnMgPSB7fTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBwYXJhbXMpIHtcclxuICAgICAgICAgICAgaWYgKHBhcmFtcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZXZlbnRIYW5kbGVyc1trZXldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRzLmFkZExpc3RlbmVyKGtleSwgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudEhhbmRsZXJzW2tleV0gPSBwYXJhbXNba2V5XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhcHBseURhbWFnZSgpIHtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbWFnaWMtbnVtYmVyc1xyXG4gICAgICAgIGlmICh0aGlzLmhlYWx0aFBvaW50cyA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhlYWx0aFBvaW50cy0tO1xyXG4gICAgICAgIHRoaXMudGludCA9IDB4RjQ0MzM2O1xyXG4gICAgICAgIHRoaXMuYWxwaGEgPSAwLjk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0hlYWx0aEJhcn0gZnJvbSBcIi4uL3N0YXR1c0luZGljYXRpb25zL2hlYWx0aEJhclwiO1xyXG5pbXBvcnR7dGV4dHVyZXMsIHJlbmRlckxvb3AsIGNvbGxpc2lvbkRldGVjdGlvbiwgYXBwLCBldmVudHN9IGZyb20gXCIuLi9lbmdpbmVcIjtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHBhcmFtIHtudW1iZXJ9IHggUG9zaXRpb24gYnkgWFxyXG4gKiBAcGFyYW0ge251bWJlcn0geSBQb3NpdGlvbiBieSBZXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCBPYmogd2lkdGhcclxuICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBPYmogaGVpZ2h0XHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBbY29sb3JQYXJhbXNdIEN1c3RvbSBjb2xvciBwYXJhbWV0ZXJzIGZvciBoZWFsdGggYmFyXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVWZvQm90IGV4dGVuZHMgUElYSS5Db250YWluZXJ7XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb2xvclBhcmFtcykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3ByaXRlID0gbmV3IFBJWEkuU3ByaXRlKHRleHR1cmVzW1wiYm90LnBuZ1wiXSk7XHJcbiAgICAgICAgdGhpcy5zcHJpdGUud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLnNwcml0ZS5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW1hZ2ljLW51bWJlcnNcclxuICAgICAgICB0aGlzLnJhZGl1cyA9IHRoaXMuc3ByaXRlLndpZHRoLzI7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW1hZ2ljLW51bWJlcnNcclxuICAgICAgICB0aGlzLnNwcml0ZS5hbmNob3Iuc2V0KDAuNSk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SGVhbHRoUG9pbnRzID0gNTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLnNwcml0ZSk7XHJcblxyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1tYWdpYy1udW1iZXJzXHJcbiAgICAgICAgdGhpcy5oZWFsdGhCYXIgPSBuZXcgSGVhbHRoQmFyKCAtd2lkdGgvMiwgaGVpZ2h0LzIsIHdpZHRoLCAxMCwgY29sb3JQYXJhbXMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXJ0SGVhbHRoUG9pbnRzID0gNTtcclxuICAgICAgICB0aGlzLmhlYWx0aEJhci5oZWFsdGhQb2ludHMgPSB0aGlzLnN0YXJ0SGVhbHRoUG9pbnRzO1xyXG5cclxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuaGVhbHRoQmFyKTtcclxuICAgICAgICB0aGlzLnR5cGUgPSBcImJvdFwiO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24uc2V0KHgsIHkpO1xyXG5cclxuICAgICAgICBhcHAuc3RhZ2UuYWRkQ2hpbGQodGhpcyk7XHJcbiAgICAgICAgY29sbGlzaW9uRGV0ZWN0aW9uLnB1c2godGhpcyk7XHJcbiAgICAgICAgcmVuZGVyTG9vcC5wdXNoKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc3RhcnRJbnRlcmFjdGlvbigpO1xyXG4gICAgICAgIHRoaXMuYnkoeyBcIm5vdGlmeTpnYW1lU3RhcnRlZFwiIDogKCkgPT4gIHRoaXMuaW50ZXJhY3RpdmUgPSBmYWxzZX0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0SW50ZXJhY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5vbihcIm1vdXNlZG93blwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLm9uKFwibW91c2Vtb3ZlXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZih0aGlzLnNlbGVjdGVkKXtcclxuICAgICAgICAgICAgICAgIHRoaXMueCA9IGV2ZW50LmRhdGEuZ2xvYmFsLng7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnkgPSBldmVudC5kYXRhLmdsb2JhbC55O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMub24oXCJtb3VzZXVwXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLmhlYWx0aEJhci5hbmltYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXBwbHlEYW1hZ2UoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuaGVhbHRoQmFyLmFwcGx5RGFtYWdlKCk7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW1hZ2ljLW51bWJlcnNcclxuICAgICAgICBpZiAoLS10aGlzLmN1cnJlbnRIZWFsdGhQb2ludHMgPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmZpcmVFdmVudChcIm5vdGlmeTpib3QuZGFtYWdlZFwiKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgYnkocGFyYW1zKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmV2ZW50SGFuZGxlcnMpIHtcclxuICAgICAgICAgICAgdGhpcy5ldmVudEhhbmRsZXJzID0ge307XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHBhcmFtcykge1xyXG4gICAgICAgICAgICBpZiAocGFyYW1zLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5ldmVudEhhbmRsZXJzW2tleV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudHMuYWRkTGlzdGVuZXIoa2V5LCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50SGFuZGxlcnNba2V5XSA9IHBhcmFtc1trZXldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZpcmVFdmVudChldmVudE5hbWUsIC4uLmFyZ3MpIHtcclxuICAgICAgICBldmVudHMuZmlyZUV2ZW50KGV2ZW50TmFtZSwgYXJncyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge3JlbmRlckxvb3AsIGNvbGxpc2lvbkRldGVjdGlvbiwgYXBwLCBtYWtlRmlsdHJhdGlvbiwgdGV4dHVyZXN9IGZyb20gXCIuL2VuZ2luZVwiO1xyXG5cclxuLyoqXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIFN0YXJ0IGJ1bGxldCBjb25maWd1cmF0aW9uc1xyXG4gKiBAcGFyYW0ge251bWJlcn0gY29uZmlnLnggQ2VudGVyIG9mIHBhcmVudCB4XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBjb25maWcueSBDZW50ZXIgb2YgcGFyZW50IHlcclxuICogQHBhcmFtIHtudW1iZXJ9IGNvbmZpZy5hbmdsZSBQYXJlbnQgZGlyZWN0aW9uXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBjb25maWcucm9ja2V0TGVuZ3RoIERpc3RhbmNlIGZyb20gcGFyZW50IGNlbnRlciB0byBwYXJlbnQgZW5kXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQnVsbGV0IGV4dGVuZHMgUElYSS5TcHJpdGV7XHJcblx0Y29uc3RydWN0b3IoY29uZmlnKXtcclxuXHRcdHN1cGVyKHRleHR1cmVzW1wiYnVsbGV0LnBuZ1wiXSk7XHJcblx0XHR0aGlzLnggPSB0aGlzLmdldFN0YXJ0WChjb25maWcueCwgY29uZmlnLmFuZ2xlLCBjb25maWcucm9ja2V0TGVuZ3RoKTtcclxuXHRcdHRoaXMueSA9IHRoaXMuZ2V0U3RhcnRZKGNvbmZpZy55LCBjb25maWcuYW5nbGUsIGNvbmZpZy5yb2NrZXRMZW5ndGgpO1xyXG5cdFx0dGhpcy53aWR0aCA9IDE4O1xyXG5cdFx0dGhpcy5oZWlnaHQgPSAxODtcclxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1tYWdpYy1udW1iZXJzXHJcblx0XHR0aGlzLmFuY2hvci5zZXQoMC41KTtcclxuXHRcdHRoaXMuc3BlZWQgPSAzO1xyXG5cdFx0dGhpcy50eXBlID0gXCJidWxsZXRcIjtcclxuXHRcdHRoaXMucm90YXRpb24gPSBjb25maWcuYW5nbGU7XHJcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbWFnaWMtbnVtYmVyc1xyXG5cdFx0dGhpcy5yYWRpdXMgPSB0aGlzLndpZHRoLzI7XHJcblxyXG5cdFx0Y29sbGlzaW9uRGV0ZWN0aW9uLnB1c2godGhpcyk7XHJcblx0XHRyZW5kZXJMb29wLnB1c2godGhpcyk7XHJcblx0XHRhcHAuc3RhZ2UuYWRkQ2hpbGQodGhpcyk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBwYXJlbnRDZW50ZXJYIENlbnRlciBvZiBwYXJlbnQgeFxyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBwYXJlbnRBbmdsZSBQYXJlbnQgZGlyZWN0aW9uXHJcblx0ICogQHBhcmFtIHtudW1iZXJ9IHBhcmVudEhhbGZMZW5ndGggRGlzcGxhY2VtZW50IGZyb20gcGFyZW50IGNlbnRlciB0byBwYXJlbnQgZW5kXHJcblx0ICogQHJldHVybiB7bnVtYmVyfSBTdGFydCB4XHJcblx0ICovXHJcblx0Z2V0U3RhcnRYKHBhcmVudENlbnRlclgsIHBhcmVudEFuZ2xlLCBwYXJlbnRIYWxmTGVuZ3RoKSB7XHJcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbWFnaWMtbnVtYmVyc1xyXG5cdFx0cmV0dXJuIHBhcmVudENlbnRlclggKyBNYXRoLmNvcyhwYXJlbnRBbmdsZSAtIE1hdGguUEkvMikgKiBwYXJlbnRIYWxmTGVuZ3RoO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge251bWJlcn0gcGFyZW50Q2VudGVyWSBDZW50ZXIgb2YgcGFyZW50IHlcclxuXHQgKiBAcGFyYW0ge251bWJlcn0gcGFyZW50QW5nbGUgUGFyZW50IGRpcmVjdGlvblxyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBwYXJlbnRIYWxmTGVuZ3RoIERpc3BsYWNlbWVudCBmcm9tIHBhcmVudCBjZW50ZXIgdG8gcGFyZW50IGVuZFxyXG5cdCAqIEByZXR1cm4ge251bWJlcn0gU3RhcnQgeVxyXG5cdCAqL1xyXG5cdGdldFN0YXJ0WShwYXJlbnRDZW50ZXJZLCBwYXJlbnRBbmdsZSwgcGFyZW50SGFsZkxlbmd0aCkge1xyXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW1hZ2ljLW51bWJlcnNcclxuXHRcdHJldHVybiBwYXJlbnRDZW50ZXJZICsgTWF0aC5zaW4ocGFyZW50QW5nbGUgLSBNYXRoLlBJLzIpICogcGFyZW50SGFsZkxlbmd0aDtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZSgpIHtcclxuXHRcdHRoaXMubW92ZSh0aGlzLnNwZWVkKTtcclxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1tYWdpYy1udW1iZXJzXHJcblx0XHRpZih0aGlzLnggPiAxMDAwICB8fCB0aGlzLnkgPiAxMDAwIHx8dGhpcy54IDwgLTIwMCB8fCB0aGlzLnkgPCAtMjAwKSB7XHJcblxyXG5cdFx0XHR0aGlzLnZpc2libGUgPSBmYWxzZTtcclxuXHRcdFx0bWFrZUZpbHRyYXRpb24oKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG1vdmUoc3RlcCl7XHJcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW1hZ2ljLW51bWJlcnNcclxuXHR0aGlzLnggKz0gTWF0aC5jb3ModGhpcy5yb3RhdGlvbiAtIE1hdGguUEkvMikgKiBzdGVwO1xyXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1tYWdpYy1udW1iZXJzXHJcblx0dGhpcy55ICs9IE1hdGguc2luKHRoaXMucm90YXRpb24gLSBNYXRoLlBJLzIpICogc3RlcDtcclxuXHJcblx0fVxyXG59IiwiaW1wb3J0IHtNZWRpY2luZX0gZnJvbSBcIi4vc3VwcGxpZXMvbWVkaWNpbmUuanNcIjtcclxuaW1wb3J0IHtDaXJjbGVCb3R9IGZyb20gXCIuL2JvdHMvY2lyY2xlQm90XCI7XHJcbmltcG9ydCB7VWZvQm90fSBmcm9tIFwiLi9ib3RzL3Vmb1wiO1xyXG5pbXBvcnQge1JvY2tldExpdmVzfSBmcm9tIFwiLi9zdGF0dXNJbmRpY2F0aW9ucy9yb2NrZXRMaWZlc1wiO1xyXG5pbXBvcnQge0FtbW99IGZyb20gXCIuL3N1cHBsaWVzL2FtbW9cIjtcclxuaW1wb3J0IHtSb2NrZXR9IGZyb20gXCIuL3JvY2tldFwiO1xyXG5pbXBvcnQge1N0YXJ0R2FtZX0gZnJvbSBcIi4vc3RhcnRHYW1lXCI7XHJcbmltcG9ydCB7RXZlbnRzfSBmcm9tIFwiLi9ldmVudHNcIjtcclxuaW1wb3J0IHtTb3VuZHN9IGZyb20gXCIuL3NvdW5kc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFwcCA9IG5ldyBQSVhJLkFwcGxpY2F0aW9uKHtcclxuXHR3aWR0aDogNzAwLFxyXG5cdGhlaWdodDogNDUwXHJcbn0pO1xyXG5cclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhcHAudmlldyk7XHJcblxyXG5leHBvcnQgbGV0IHRleHR1cmVzLFxyXG5cdGJhY2tncm91bmQsXHJcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXHJcblx0cm9ja2V0LFxyXG5cdHJvY2tldExpdmVzLFxyXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xyXG5cdHN1cHBsaWVzLFxyXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xyXG5cdGJvdHMsXHJcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXHJcblx0c2hvdWxkUmVtb3ZlLFxyXG5cdHN0YXJ0R2FtZSxcclxuXHRldmVudHMsXHJcblx0c291bmRzO1xyXG5cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXHJcbmV4cG9ydCBsZXQgZ2FtZUxhdW5jaGVkID0gZmFsc2U7XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xyXG5leHBvcnQgbGV0IHNlbGVjdGVkSXRlbSA9IG51bGw7XHJcblxyXG5leHBvcnQgbGV0IHJlbmRlckxvb3AgPSBbXTtcclxuZXhwb3J0IGxldCBjb2xsaXNpb25EZXRlY3Rpb24gPSBbXTtcclxuZXhwb3J0IGxldCBmaWx0cmF0aW9uUmVxdWlyZWQgPSBmYWxzZTtcclxuXHJcblBJWEkuTG9hZGVyLnNoYXJlZFxyXG5cdC5hZGQoXCIuL2ltYWdlcy9zaGVldC5qc29uXCIpXHJcblx0LmxvYWQoc2V0dXApO1xyXG5cclxuZnVuY3Rpb24gc2V0dXAgKCkge1xyXG5cdHRleHR1cmVzID0gUElYSS5Mb2FkZXIuc2hhcmVkLnJlc291cmNlc1tcIi4vaW1hZ2VzL3NoZWV0Lmpzb25cIl0udGV4dHVyZXM7XHJcblx0XHJcblx0YmFja2dyb3VuZCA9IG5ldyBQSVhJLlNwcml0ZSh0ZXh0dXJlc1tcInNwYWNlLnBuZ1wiXSk7XHJcblx0YXBwLnN0YWdlLmFkZENoaWxkKGJhY2tncm91bmQpO1xyXG5cdGV2ZW50cyA9IG5ldyBFdmVudHMoKTtcclxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbWFnaWMtbnVtYmVyc1xyXG5cdHJvY2tldCA9IG5ldyBSb2NrZXQoNjAsIDkwLCBcImJhdHRsZWNydWlzZXIucG5nXCIpO1xyXG5cclxuXHRyb2NrZXRMaXZlcyA9IG5ldyBSb2NrZXRMaXZlcygpO1xyXG5cdHN0YXJ0R2FtZSA9IG5ldyBTdGFydEdhbWUoKTtcclxuXHRzb3VuZHMgPSBuZXcgU291bmRzKCk7XHJcblxyXG5cclxuXHRzdXBwbGllcyA9IFtcclxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1tYWdpYy1udW1iZXJzXHJcblx0XHRuZXcgTWVkaWNpbmUoMTIwLCAyNzApLFxyXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW1hZ2ljLW51bWJlcnNcclxuXHRcdG5ldyBNZWRpY2luZSg1NDAsIDI1MCksXHJcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbWFnaWMtbnVtYmVyc1xyXG5cdFx0bmV3IE1lZGljaW5lKDQ0MCwgNTApLFxyXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW1hZ2ljLW51bWJlcnNcclxuXHRcdG5ldyBBbW1vKDY2MCwgNTApLFxyXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW1hZ2ljLW51bWJlcnNcclxuXHRcdG5ldyBBbW1vKDY0MCwgNDAwKSxcclxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1tYWdpYy1udW1iZXJzXHJcblx0XHRuZXcgQW1tbyg2MTAsIDcwKSxcclxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1tYWdpYy1udW1iZXJzXHJcblx0XHRuZXcgQW1tbygyOTAsIDM4MClcclxuXHRdO1xyXG5cclxuXHRib3RzID0gW1xyXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW1hZ2ljLW51bWJlcnNcclxuXHRcdG5ldyBVZm9Cb3QoMzU4LCAzNTgsIDc1LCA3NSksXHJcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbWFnaWMtbnVtYmVyc1xyXG5cdFx0bmV3IFVmb0JvdCgyMDUsIDM0NSwgNTAsIDUwKSxcclxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1tYWdpYy1udW1iZXJzXHJcblx0XHRuZXcgVWZvQm90KDMwNSwgNzUsIDUwLCA1MCksXHJcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbWFnaWMtbnVtYmVyc1xyXG5cdFx0bmV3IFVmb0JvdCg2MDUsIDE1NSwgMTEwLCAxMTAsIHtsaXZlIDogMHgwM0E5RjQsIGFuaW1hdGlvbiA6IDB4RjU3QzAwLCBkYW1hZ2UgOiAweDAwMDAwMCB9KSxcclxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1tYWdpYy1udW1iZXJzXHJcblx0XHRuZXcgVWZvQm90KDUyNSwgNjUsIDcwLCA3MCksXHJcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbWFnaWMtbnVtYmVyc1xyXG5cdFx0bmV3IENpcmNsZUJvdCgxODAsIDIwMCwgMjApLFxyXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW1hZ2ljLW51bWJlcnNcclxuXHRcdG5ldyBDaXJjbGVCb3QoMzAwLCAzMDAsIDM1KSxcclxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1tYWdpYy1udW1iZXJzXHJcblx0XHRuZXcgQ2lyY2xlQm90KDQwMCwgMTgwLCAxNSlcclxuXHRdO1xyXG5cclxuXHRhcHAudGlja2VyLmFkZChkZWx0YSA9PiBnYW1lTG9vcChkZWx0YSkpO1xyXG5cclxufVxyXG5cclxuY29uc3QgZ2FtZUxvb3AgPSAoKSA9PntcclxuXHRjb2xsaXNpb25DaGVjaygpO1xyXG5cdHJvY2tldExpdmVzLnVwZGF0ZSgpO1xyXG5cclxuXHRmb3IobGV0IGkgPSAwOyBpIDwgcmVuZGVyTG9vcC5sZW5ndGg7IGkrKyl7XHJcblx0XHRyZW5kZXJMb29wW2ldLnVwZGF0ZSgpO1xyXG5cdH1cclxuXHJcblx0aWYoZmlsdHJhdGlvblJlcXVpcmVkKXtcclxuXHRcdHJlbW92ZVVzZWxlc3MoKTtcclxuXHR9XHJcbn07XHJcblxyXG5cclxuZnVuY3Rpb24gY29sbGlzaW9uQ2hlY2sgKCkge1xyXG5cdGxldCBvYmoxLCBvYmoyLCBkaXN0O1xyXG5cdGZvcihsZXQgaSA9IDA7IGkgPCBjb2xsaXNpb25EZXRlY3Rpb24ubGVuZ3RoOyBpKyspIHtcclxuXHRcdG9iajEgPSBjb2xsaXNpb25EZXRlY3Rpb25baV07XHJcblxyXG5cdFx0Zm9yKGxldCBqID0gMDsgaiA8IGNvbGxpc2lvbkRldGVjdGlvbi5sZW5ndGg7IGorKyl7XHJcblxyXG5cdFx0XHRpZihpICE9PSBqKXtcclxuXHRcdFx0XHRvYmoyID0gY29sbGlzaW9uRGV0ZWN0aW9uW2pdO1xyXG5cdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1tYWdpYy1udW1iZXJzXHJcblx0XHRcdFx0ZGlzdCA9IE1hdGguc3FydChNYXRoLnBvdyhvYmoxLnggLSBvYmoyLngsMikgKyBNYXRoLnBvdyhvYmoxLnkgLSBvYmoyLnksIDIpKTtcclxuXHJcblx0XHRcdFx0aWYoIGRpc3QgPCBvYmoxLnJhZGl1cyArIG9iajIucmFkaXVzKXtcclxuXHJcblx0XHRcdFx0XHRpZihvYmoxLnR5cGUgPT09IFwiYm90XCIgJiYgb2JqMi50eXBlID09PSBcImJ1bGxldFwiKXtcclxuXHRcdFx0XHRcdFx0b2JqMS5hcHBseURhbWFnZSgpO1xyXG5cdFx0XHRcdFx0XHRvYmoyLnZpc2libGUgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0ZmlsdHJhdGlvblJlcXVpcmVkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRpZihvYmoxLnR5cGUgPT09IFwiYm90XCIgJiYgb2JqMi50eXBlID09PSBcInJvY2tldFwiKXtcclxuXHRcdFx0XHRcdFx0b2JqMS5hcHBseURhbWFnZSgpO1xyXG5cdFx0XHRcdFx0XHRvYmoyLmFwcGx5RGFtYWdlKCk7XHJcblx0XHRcdFx0XHRcdGZpbHRyYXRpb25SZXF1aXJlZCA9IHRydWU7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aWYob2JqMS50eXBlID09PSBcIm1lZGljaW5lXCIgJiYgb2JqMi50eXBlID09PSBcInJvY2tldFwiKXtcclxuXHRcdFx0XHRcdFx0b2JqMS52aXNpYmxlID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdG9iajIuYXBwbHlMaXZlKCk7XHJcblx0XHRcdFx0XHRcdGZpbHRyYXRpb25SZXF1aXJlZCA9IHRydWU7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aWYob2JqMS50eXBlID09PSBcImFtbW9cIiAmJiBvYmoyLnR5cGUgPT09IFwicm9ja2V0XCIpe1xyXG5cdFx0XHRcdFx0XHRvYmoxLnZpc2libGUgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0b2JqMi5hcHBseUFtbW8oKTtcclxuXHRcdFx0XHRcdFx0ZmlsdHJhdGlvblJlcXVpcmVkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVVzZWxlc3MgKCkge1xyXG5cdGNvbGxpc2lvbkRldGVjdGlvbiA9IGNvbGxpc2lvbkRldGVjdGlvbi5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0udmlzaWJsZSk7XHJcblx0cmVuZGVyTG9vcCA9IHJlbmRlckxvb3AuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnZpc2libGUpO1xyXG5cclxuXHRzaG91bGRSZW1vdmUgPSBmYWxzZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdhbWVTdGFydCA9ICgpID0+IHtcclxuXHRnYW1lTGF1bmNoZWQgPSB0cnVlO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG1ha2VGaWx0cmF0aW9uID0gKCkgPT4ge1xyXG5cdGZpbHRyYXRpb25SZXF1aXJlZCA9IHRydWU7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlUm9ja2V0ID0gKCkgPT4ge1xyXG5cdHJvY2tldC52aXNpYmxlID0gZmFsc2U7XHJcbn07IiwiZXhwb3J0IGNsYXNzIEV2ZW50cyB7XHJcblx0Y29uc3RydWN0b3IoKXtcclxuXHRcdHRoaXMuX2V2ZW50cyA9IHt9O1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIE5hbWUgb2YgZXZlbnRcclxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBldmVudExpc3RlbmVyIEFkZCBmdW5jdGlvbiB3aGljaCBzaG91bGQgYmUgZG9uZSBieSBldmVudFxyXG5cdCAqL1xyXG5cdGFkZExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lcikge1xyXG5cdFx0aWYoICF0aGlzLl9ldmVudHNbZXZlbnROYW1lXSApIHtcclxuXHRcdFx0dGhpcy5hZGRFdmVudChldmVudE5hbWUpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuX2V2ZW50c1tldmVudE5hbWVdLnB1c2goZXZlbnRMaXN0ZW5lcik7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgTmFtZSBvZiBldmVudFxyXG5cdCAqL1xyXG5cdGFkZEV2ZW50KCBldmVudE5hbWUgKSB7XHJcblx0XHR0aGlzLl9ldmVudHNbZXZlbnROYW1lXSA9IFtdO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIE5hbWUgb2YgZXZlbnRcclxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwYXJhbXMgQXJndW1lbnRzIGZvciBmdW5jdGlvbkNhbGxiYWNrXHJcblx0ICovXHJcblx0ZmlyZUV2ZW50KGV2ZW50TmFtZSwgcGFyYW1zKXtcclxuXHRcdGxldCBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbZXZlbnROYW1lXTtcclxuXHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGxldCBsaXN0ZW5lciA9IGxpc3RlbmVyc1tpXTtcclxuXHRcdFx0bGV0IGhhbmRsZXIgPSBsaXN0ZW5lci5ldmVudEhhbmRsZXJzW2V2ZW50TmFtZV07XHJcblxyXG5cdFx0XHRoYW5kbGVyLmFwcGx5KGxpc3RlbmVyLCBwYXJhbXMpO1xyXG5cdFx0fVxyXG5cdH1cclxufSIsImltcG9ydCB7ZXZlbnRzfSBmcm9tIFwiLi4vZW5naW5lXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgT2JzZXJ2YWJsZSB7XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbXMgIHtPYmplY3QuPHN0cmluZywgZnVuY3Rpb24+fVxyXG4gICAgICovXHJcbiAgICBieShwYXJhbXMpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZXZlbnRIYW5kbGVycykge1xyXG4gICAgICAgICAgICB0aGlzLmV2ZW50SGFuZGxlcnMgPSB7fTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gcGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGlmIChwYXJhbXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmV2ZW50SGFuZGxlcnNba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50cy5hZGRMaXN0ZW5lcihrZXksIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyc1trZXldID0gcGFyYW1zW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmlyZUV2ZW50KGV2ZW50TmFtZSwgLi4uYXJncykge1xyXG4gICAgICAgIGV2ZW50cy5maXJlRXZlbnQoZXZlbnROYW1lLCBhcmdzKTtcclxuICAgIH1cclxufSIsIi8qKlxyXG4gKlxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHBhcmFtIHtudW1iZXJ9IHggUG9zaXRpb24gYnkgWFxyXG4gKiBAcGFyYW0ge251bWJlcn0geSBQb3NpdGlvbiBieSBZXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCBPYmogd2lkdGhcclxuICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBPYmogaGVpZ2h0XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBjb2xvciBGaWxsaW5nIGNvbG9yIGluIEhFWFxyXG4gKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBSZWN0YW5nbGUgZXh0ZW5kcyBQSVhJLkdyYXBoaWNze1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCwgY29sb3IpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbWFnaWMtbnVtYmVyc1xyXG4gICAgICAgIHRoaXMubGluZVN0eWxlKDEsIDB4MDAwMDAwLCAxKTtcclxuICAgICAgICB0aGlzLmJlZ2luRmlsbChjb2xvcik7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW1hZ2ljLW51bWJlcnNcclxuICAgICAgICB0aGlzLmRyYXdSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuZW5kRmlsbCgpO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24uc2V0KHgsIHkpO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7QnVsbGV0fSBmcm9tIFwiLi9idWxsZXRcIjtcclxuaW1wb3J0IHtldmVudHMsIHRleHR1cmVzLCByZW5kZXJMb29wLCBjb2xsaXNpb25EZXRlY3Rpb24sIGFwcCwgcm9ja2V0TGl2ZXN9IGZyb20gXCIuL2VuZ2luZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJvY2tldCBleHRlbmRzIFBJWEkuU3ByaXRle1xyXG5cdGNvbnN0cnVjdG9yKHgsIHksIGZpbGVOYW1lKXtcclxuXHRcdHN1cGVyKHRleHR1cmVzW2ZpbGVOYW1lXSk7XHJcblxyXG5cdFx0dGhpcy53aWR0aCA9IDkwO1xyXG5cdFx0dGhpcy5oZWlnaHQgPSA5MDtcclxuXHRcdHRoaXMucm90YXRpb24gPSAwO1xyXG5cdFx0dGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xyXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW1hZ2ljLW51bWJlcnNcclxuXHRcdHRoaXMuYW5jaG9yLnNldCgwLjUpO1xyXG5cdFx0dGhpcy5idWxsZXRzQW1vdW50ID0gNTA7XHJcblx0XHR0aGlzLnNob3dCdWxsZXRzQW1vdW50KCk7XHJcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbWFnaWMtbnVtYmVyc1xyXG5cdFx0dGhpcy5yYWRpdXMgPSB0aGlzLndpZHRoLzI7XHJcblxyXG5cdFx0dGhpcy5jb250cm9scyA9IHtcclxuXHRcdFx0a2V5MzcgOiBmYWxzZSxcclxuXHRcdFx0a2V5MzggOiBmYWxzZSxcclxuXHRcdFx0a2V5MzkgOiBmYWxzZSxcclxuXHRcdFx0a2V5NDAgOiBmYWxzZVxyXG5cdFx0fTtcclxuXHJcblx0XHR0aGlzLnR5cGUgPSBcInJvY2tldFwiO1xyXG5cdFx0dGhpcy5zcGVlZCA9IDI7XHJcblx0XHR0aGlzLmFuZ2xlU3RlcCA9IDAuMDU7XHJcblxyXG5cdFx0dGhpcy5ieSh7IFwibm90aWZ5OmdhbWVTdGFydGVkXCIgOiB0aGlzLnN0YXJ0R2FtZSB9KTtcclxuXHJcblx0XHRyZW5kZXJMb29wLnB1c2godGhpcyk7XHJcblx0XHRhcHAuc3RhZ2UuYWRkQ2hpbGQodGhpcyk7XHJcblx0XHR0aGlzLnBvc2l0aW9uLnNldCh4LCB5KTtcclxuXHJcblx0XHR0aGlzLnN0YXJ0SW50ZXJhY3Rpb24oKVxyXG5cdH1cclxuXHJcblx0c3RhcnRJbnRlcmFjdGlvbigpIHtcclxuXHRcdHRoaXMuaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG5cdFx0dGhpcy5vbihcIm1vdXNlZG93blwiLCAoKSA9PiB7XHJcblx0XHRcdHRoaXMuc2VsZWN0ZWQgPSB0cnVlO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5vbihcIm1vdXNlbW92ZVwiLCAoZXZlbnQpID0+IHtcclxuXHRcdFx0aWYodGhpcy5zZWxlY3RlZCl7XHJcblx0XHRcdFx0dGhpcy54ID0gZXZlbnQuZGF0YS5nbG9iYWwueDtcclxuXHRcdFx0XHR0aGlzLnkgPSBldmVudC5kYXRhLmdsb2JhbC55O1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLm9uKFwibW91c2V1cFwiLCAoKSA9PiB7XHJcblx0XHRcdHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0bW92ZShzdGVwKXtcclxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1tYWdpYy1udW1iZXJzXHJcblx0XHR0aGlzLnggKz0gTWF0aC5jb3ModGhpcy5yb3RhdGlvbiAtIE1hdGguUEkvMikgKiBzdGVwO1xyXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW1hZ2ljLW51bWJlcnNcclxuXHRcdHRoaXMueSArPSBNYXRoLnNpbih0aGlzLnJvdGF0aW9uIC0gTWF0aC5QSS8yKSAqIHN0ZXA7XHJcblxyXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW1hZ2ljLW51bWJlcnNcclxuXHRcdGlmKHRoaXMueCA8IHRoaXMud2lkdGgvMikge1xyXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbWFnaWMtbnVtYmVyc1xyXG5cdFx0XHR0aGlzLnggPSB0aGlzLndpZHRoLzI7XHJcblx0XHR9XHJcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbWFnaWMtbnVtYmVyc1xyXG5cdFx0aWYodGhpcy55IDwgdGhpcy5oZWlnaHQvMikge1xyXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbWFnaWMtbnVtYmVyc1xyXG5cdFx0XHR0aGlzLnkgPSB0aGlzLmhlaWdodC8yO1xyXG5cdFx0fVxyXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW1hZ2ljLW51bWJlcnNcclxuXHRcdGlmKHRoaXMueCA+IDcwMCAtIHRoaXMud2lkdGgvMikge1xyXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbWFnaWMtbnVtYmVyc1xyXG5cdFx0XHR0aGlzLnggPSA3MDAgLSB0aGlzLndpZHRoLzI7XHJcblx0XHR9XHJcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbWFnaWMtbnVtYmVyc1xyXG5cdFx0aWYodGhpcy55ID4gNDUwIC0gdGhpcy5oZWlnaHQvMikge1xyXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbWFnaWMtbnVtYmVyc1xyXG5cdFx0XHR0aGlzLnkgPSA0NTAgLSB0aGlzLmhlaWdodC8yO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c3RhcnRHYW1lKCkge1xyXG5cdFx0Y29sbGlzaW9uRGV0ZWN0aW9uLnB1c2godGhpcyk7XHJcblx0XHR0aGlzLmludGVyYWN0aXZlID0gZmFsc2U7XHJcblxyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KSA9PiB7XHJcblx0XHRcdHRoaXMuc2V0S2V5KGV2ZW50LmtleUNvZGUsIHRydWUpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChldmVudCkgPT4ge1xyXG5cdFx0XHR0aGlzLnNldEtleShldmVudC5rZXlDb2RlLCBmYWxzZSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGV2ZW50KSA9PntcclxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW1hZ2ljLW51bWJlcnNcclxuXHRcdFx0aWYoZXZlbnQua2V5Q29kZSA9PT0gMzIpe1xyXG5cdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1tYWdpYy1udW1iZXJzXHJcblx0XHRcdFx0aWYodGhpcy5idWxsZXRzQW1vdW50ID4gMCAmJiByb2NrZXRMaXZlcy5saXZlcyA+IDApe1xyXG5cdFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW1hZ2ljLW51bWJlcnNcclxuXHRcdFx0XHRcdHRoaXMuc2hvb3Qoe3g6IHRoaXMueCwgeTogdGhpcy55LCBhbmdsZTogdGhpcy5yb3RhdGlvbiwgcm9ja2V0TGVuZ3RoOiB0aGlzLmhlaWdodC8yfSk7XHJcblxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIm5vIGJ1bGxldHMhXCIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRzaG9vdChjb25maWcpIHtcclxuXHRcdG5ldyBCdWxsZXQoY29uZmlnKTtcclxuXHRcdHRoaXMuYnVsbGV0c0Ftb3VudC0tO1xyXG5cdFx0dGhpcy5zaG93QnVsbGV0c0Ftb3VudCgpO1xyXG5cdFx0dGhpcy5maXJlRXZlbnQoXCJub3RpZnk6cm9ja2V0LmZpcmVkXCIsIFwiYXJndW1lbnRzIFwiLCBcImFkZGVkIFwiLCBcInVzaW5nIGFwcGx5XCIpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlKCl7XHJcblxyXG5cdFx0aWYodGhpcy5jb250cm9scy5rZXkzOCl7XHJcblx0XHRcdHRoaXMubW92ZSh0aGlzLnNwZWVkKTtcclxuXHRcdH1cclxuXHRcdGlmKHRoaXMuY29udHJvbHMua2V5NDApe1xyXG5cdFx0XHR0aGlzLm1vdmUoLXRoaXMuc3BlZWQpO1xyXG5cdFx0fVxyXG5cdFx0aWYodGhpcy5jb250cm9scy5rZXkzNyl7XHJcblx0XHRcdHRoaXMuY2hhbmdlQW5nbGUoLXRoaXMuYW5nbGVTdGVwKTtcclxuXHRcdH1cclxuXHRcdGlmKHRoaXMuY29udHJvbHMua2V5Mzkpe1xyXG5cdFx0XHR0aGlzLmNoYW5nZUFuZ2xlKHRoaXMuYW5nbGVTdGVwKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtudW1iZXJ9IHN0ZXAgQW1vdW50IG9mIGFuZ2xlIGRpc3BsYWNlbWVudFxyXG5cdCAqL1xyXG5cdGNoYW5nZUFuZ2xlKHN0ZXApe1xyXG5cdFx0dGhpcy5yb3RhdGlvbiArPSBzdGVwO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge251bWJlcn0ga2V5Q29kZSBLZXlib2FyZCBrZXlDb2RlXHJcblx0ICogQHBhcmFtIHtib29sZWFufSBzdGF0dXMgRW5hYmxlL2Rpc2FibGVcclxuXHQgKi9cclxuXHRzZXRLZXkoa2V5Q29kZSwgc3RhdHVzKXtcclxuXHRcdHRoaXMuY29udHJvbHNbXCJrZXlcIiArIGtleUNvZGVdID0gc3RhdHVzO1xyXG5cdH1cclxuXHJcblx0YXBwbHlEYW1hZ2UoKXtcclxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1tYWdpYy1udW1iZXJzXHJcblx0XHR0aGlzLnBvc2l0aW9uLnNldCg2MCwgOTApO1xyXG5cdFx0dGhpcy5yb3RhdGlvbiA9IDA7XHJcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbWFnaWMtbnVtYmVyc1xyXG5cdFx0cm9ja2V0TGl2ZXMuY2hhbmdlTGl2ZXNBbW91bnQoIC0xICk7XHJcblx0fVxyXG5cclxuXHRhcHBseUxpdmUoKXtcclxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1tYWdpYy1udW1iZXJzXHJcblx0XHRyb2NrZXRMaXZlcy5jaGFuZ2VMaXZlc0Ftb3VudCggMSApO1xyXG5cdH1cclxuXHJcblx0c2hvd0J1bGxldHNBbW91bnQoKXtcclxuXHRcdGNvbnNvbGUubG9nKFwibnVtYmVyIG9mIGJ1bGxldHM6IFwiICsgdGhpcy5idWxsZXRzQW1vdW50KTtcclxuXHR9XHJcblxyXG5cdGFwcGx5QW1tbygpe1xyXG5cdFx0dGhpcy5idWxsZXRzQW1vdW50ICs9IDc7XHJcblx0XHR0aGlzLnNob3dCdWxsZXRzQW1vdW50KCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbXMgIHtPYmplY3QuPHN0cmluZywgZnVuY3Rpb24+fVxyXG5cdCAqL1xyXG5cdGJ5KHBhcmFtcykge1xyXG5cdFx0aWYgKCF0aGlzLmV2ZW50SGFuZGxlcnMpIHtcclxuXHRcdFx0dGhpcy5ldmVudEhhbmRsZXJzID0ge307XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yIChsZXQga2V5IGluIHBhcmFtcykge1xyXG5cdFx0XHRpZiAocGFyYW1zLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuXHRcdFx0XHRpZiAoIXRoaXMuZXZlbnRIYW5kbGVyc1trZXldKSB7XHJcblx0XHRcdFx0XHRldmVudHMuYWRkTGlzdGVuZXIoa2V5LCB0aGlzKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHRoaXMuZXZlbnRIYW5kbGVyc1trZXldID0gcGFyYW1zW2tleV07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZpcmVFdmVudChldmVudE5hbWUsIC4uLmFyZ3MpIHtcclxuXHRcdGV2ZW50cy5maXJlRXZlbnQoZXZlbnROYW1lLCBhcmdzKTtcclxuXHR9XHJcbn0iLCJpbXBvcnQge09ic2VydmFibGV9IGZyb20gXCIuL3BhcmVudE9iamVjdHMvb2JzZXJ2YWJsZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNvdW5kcyBleHRlbmRzIE9ic2VydmFibGV7XHJcblx0Y29uc3RydWN0b3IoKXtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLmZpcmVNZXNzYWdlID0gXCJmaXJlIHNvdW5kIVwiO1xyXG5cdFx0dGhpcy5ib3REYW1hZ2VkTWVzc2FnZSA9IFwiQm90IHdhcyBkYW1hZ2VkXCI7XHJcblxyXG5cdFx0dGhpcy5ieSh7XHJcblx0XHRcdFwibm90aWZ5OnJvY2tldC5maXJlZFwiIDogdGhpcy5maXJlU291bmQsXHJcblx0XHRcdFwibm90aWZ5OmJvdC5kYW1hZ2VkXCIgOiB0aGlzLmJvdERhbWFnZWRTb3VuZFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRib3REYW1hZ2VkU291bmQoKXtcclxuXHRcdGNvbnNvbGUubG9nKHRoaXMuYm90RGFtYWdlZE1lc3NhZ2UpO1xyXG5cdH1cclxuXHJcblx0ZmlyZVNvdW5kKGEsIGIsIGMpIHtcclxuXHRcdGNvbnNvbGUubG9nKGEgKyBiICsgYyk7XHJcblx0XHRjb25zb2xlLmxvZyh0aGlzLmZpcmVNZXNzYWdlKTtcclxuXHR9XHJcbn0iLCJpbXBvcnQge09ic2VydmFibGV9IGZyb20gXCIuL3BhcmVudE9iamVjdHMvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQge2dhbWVTdGFydH0gZnJvbSBcIi4vZW5naW5lXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3RhcnRHYW1lIGV4dGVuZHMgT2JzZXJ2YWJsZXtcclxuXHRjb25zdHJ1Y3Rvcigpe1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0XCIpLm9uY2xpY2sgPSAoKSA9PiB7XHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnRcIikuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcblx0XHRcdGdhbWVTdGFydCgpO1xyXG5cdFx0XHR0aGlzLmZpcmVFdmVudChcIm5vdGlmeTpnYW1lU3RhcnRlZFwiKTtcclxuXHRcdH1cclxuXHR9XHJcbn0iLCJpbXBvcnQge1JlY3RhbmdsZX0gZnJvbSBcIi4uL3BhcmVudE9iamVjdHMvcmVjdGFuZ2xlLmpzXCI7XHJcblxyXG4vKipcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB4IFBvc2l0aW9uIGJ5IFhcclxuICogQHBhcmFtIHtudW1iZXJ9IHkgUG9zaXRpb24gYnkgWVxyXG4gKiBAcGFyYW0ge251bWJlcn0gd2lkdGggQmFyIHdpZHRoXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgQmFyIGhlaWdodFxyXG4gKiBAcGFyYW0ge29iamVjdH0gW2NvbG9yUGFyYW1zXSBDdXN0b20gY29sb3IgcGFyYW1ldGVyc1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEhlYWx0aEJhciBleHRlbmRzIFBJWEkuQ29udGFpbmVye1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCwgY29sb3JQYXJhbXMgPSB7bGl2ZTogMHgzODhFM0MsIGFuaW1hdGlvbjogMHhGRkVFNTgsIGRhbWFnZTogMHhGNDQzMzZ9KXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmRhbWFnZUxpbmUgPSB0aGlzLmFkZENoaWxkKG5ldyBSZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgY29sb3JQYXJhbXMuZGFtYWdlKSk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25MaW5lID0gdGhpcy5hZGRDaGlsZChuZXcgUmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQsIGNvbG9yUGFyYW1zLmFuaW1hdGlvbikpO1xyXG4gICAgICAgIHRoaXMubGl2ZUxpbmUgPSB0aGlzLmFkZENoaWxkKG5ldyBSZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgY29sb3JQYXJhbXMubGl2ZSkpO1xyXG5cclxuICAgICAgICB0aGlzLmhlYWx0aFBvaW50cyA9IDM7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25TdGVwID0gMC41O1xyXG4gICAgfVxyXG5cclxuICAgIGFwcGx5RGFtYWdlKCkge1xyXG4gICAgICAgIHRoaXMubGl2ZUxpbmUud2lkdGggLT0gdGhpcy53aWR0aCAvIHRoaXMuaGVhbHRoUG9pbnRzO1xyXG4gICAgfVxyXG5cclxuICAgIGFuaW1hdGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubGl2ZUxpbmUud2lkdGggPCB0aGlzLmFuaW1hdGlvbkxpbmUud2lkdGgpIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25MaW5lLndpZHRoIC09IHRoaXMuYW5pbWF0aW9uU3RlcDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQge3RleHR1cmVzLCBhcHAsIHJlbW92ZVJvY2tldH0gZnJvbSBcIi4uL2VuZ2luZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJvY2tldExpdmVzIGV4dGVuZHMgUElYSS5Db250YWluZXJ7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5saXZlcyA9IDI7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlTGluZSA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xyXG5cclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbWFnaWMtbnVtYmVyc1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBoZWFydCA9IG5ldyBQSVhJLlNwcml0ZSh0ZXh0dXJlc1tcImhlYXJ0LnBuZ1wiXSk7XHJcbiAgICAgICAgICAgIGhlYXJ0LndpZHRoID0gMzA7XHJcbiAgICAgICAgICAgIGhlYXJ0LmhlaWdodCA9IDMwO1xyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbWFnaWMtbnVtYmVyc1xyXG4gICAgICAgICAgICBoZWFydC5wb3NpdGlvbi5zZXQoaSAqIGhlYXJ0LndpZHRoLCAxMCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnZpc2libGVMaW5lLmFkZENoaWxkKGhlYXJ0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBwbHVzID0gbmV3IFBJWEkuU3ByaXRlKHRleHR1cmVzW1wicGx1cy5wbmdcIl0pO1xyXG4gICAgICAgIHBsdXMud2lkdGggPSAzMDtcclxuICAgICAgICBwbHVzLmhlaWdodCA9IDMwO1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1tYWdpYy1udW1iZXJzXHJcbiAgICAgICAgcGx1cy5wb3NpdGlvbi5zZXQocGx1cy53aWR0aCAqIDMsIDEwKTtcclxuXHJcbiAgICAgICAgdGhpcy52aXNpYmxlTGluZS5hZGRDaGlsZChwbHVzKTtcclxuXHJcbiAgICAgICAgYXBwLnN0YWdlLmFkZENoaWxkKHRoaXMudmlzaWJsZUxpbmUpO1xyXG5cclxuICAgICAgICB0aGlzLnZpc2libGVMaW5lLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XHJcbiAgICAgICAgICAgIGNoaWxkLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcblxyXG4gICAgICAgIGxldCBsYXN0VmlzaWJsZUluZGV4ID0gTWF0aC5taW4odGhpcy52aXNpYmxlTGluZS5jaGlsZHJlbi5sZW5ndGgsIHRoaXMubGl2ZXMpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxhc3RWaXNpYmxlSW5kZXg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnZpc2libGVMaW5lLmNoaWxkcmVuW2ldLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbWFnaWMtbnVtYmVyc1xyXG4gICAgICAgICAgICBpZiAobGFzdFZpc2libGVJbmRleCA8IDQpe1xyXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW1hZ2ljLW51bWJlcnNcclxuICAgICAgICAgICAgICAgIHRoaXMudmlzaWJsZUxpbmUuY2hpbGRyZW5baSsxXS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbWFnaWMtbnVtYmVyc1xyXG4gICAgICAgIGlmICh0aGlzLmxpdmVzIDw9IDApIHtcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW1hZ2ljLW51bWJlcnNcclxuICAgICAgICAgICAgdGhpcy52aXNpYmxlTGluZS5jaGlsZHJlblswXS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR0FNRSBPVkVSISEhXCIpO1xyXG4gICAgICAgICAgICByZW1vdmVSb2NrZXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluY3JlbWVudCBMaXZlcyBhbW91bnQgZGlzcGxhY2VtZW50XHJcbiAgICAgKi9cclxuICAgIGNoYW5nZUxpdmVzQW1vdW50KGluY3JlbWVudCkge1xyXG4gICAgICAgIHRoaXMubGl2ZXMgKz0gaW5jcmVtZW50O1xyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge3RleHR1cmVzLCBjb2xsaXNpb25EZXRlY3Rpb24sIGFwcCwgZXZlbnRzfSBmcm9tIFwiLi4vZW5naW5lXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQW1tbyBleHRlbmRzIFBJWEkuU3ByaXRle1xyXG5cdGNvbnN0cnVjdG9yKHgsIHkpe1xyXG5cdFx0c3VwZXIodGV4dHVyZXNbXCJhbW1vMi5wbmdcIl0pO1xyXG5cclxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1tYWdpYy1udW1iZXJzXHJcblx0XHR0aGlzLmFuY2hvci5zZXQoMC41KTtcclxuXHRcdHRoaXMud2lkdGggPSA0NTtcclxuXHRcdHRoaXMuaGVpZ2h0ID0gNDU7XHJcblx0XHR0aGlzLnBvc2l0aW9uLnNldCh4LCB5KTtcclxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1tYWdpYy1udW1iZXJzXHJcblx0XHR0aGlzLnJhZGl1cyA9IHRoaXMud2lkdGgvMjtcclxuXHRcdGFwcC5zdGFnZS5hZGRDaGlsZCh0aGlzKTtcclxuXHRcdGNvbGxpc2lvbkRldGVjdGlvbi5wdXNoKHRoaXMpO1xyXG5cclxuXHRcdHRoaXMudHlwZSA9IFwiYW1tb1wiO1xyXG5cdFx0dGhpcy5zdGFydEludGVyYWN0aW9uKCk7XHJcblx0XHR0aGlzLmJ5KHsgXCJub3RpZnk6Z2FtZVN0YXJ0ZWRcIiA6ICgpID0+ICB0aGlzLmludGVyYWN0aXZlID0gZmFsc2V9KTtcclxuXHR9XHJcblxyXG5cdHN0YXJ0SW50ZXJhY3Rpb24oKSB7XHJcblx0XHR0aGlzLmludGVyYWN0aXZlID0gdHJ1ZTtcclxuXHRcdHRoaXMub24oXCJtb3VzZWRvd25cIiwgKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnNlbGVjdGVkID0gdHJ1ZTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMub24oXCJtb3VzZW1vdmVcIiwgKGV2ZW50KSA9PiB7XHJcblx0XHRcdGlmKHRoaXMuc2VsZWN0ZWQpe1xyXG5cdFx0XHRcdHRoaXMueCA9IGV2ZW50LmRhdGEuZ2xvYmFsLng7XHJcblx0XHRcdFx0dGhpcy55ID0gZXZlbnQuZGF0YS5nbG9iYWwueTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5vbihcIm1vdXNldXBcIiwgKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnNlbGVjdGVkID0gZmFsc2U7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGJ5KHBhcmFtcykge1xyXG5cdFx0aWYgKCF0aGlzLmV2ZW50SGFuZGxlcnMpIHtcclxuXHRcdFx0dGhpcy5ldmVudEhhbmRsZXJzID0ge307XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yIChsZXQga2V5IGluIHBhcmFtcykge1xyXG5cdFx0XHRpZiAocGFyYW1zLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuXHRcdFx0XHRpZiAoIXRoaXMuZXZlbnRIYW5kbGVyc1trZXldKSB7XHJcblx0XHRcdFx0XHRldmVudHMuYWRkTGlzdGVuZXIoa2V5LCB0aGlzKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHRoaXMuZXZlbnRIYW5kbGVyc1trZXldID0gcGFyYW1zW2tleV07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHt0ZXh0dXJlcywgY29sbGlzaW9uRGV0ZWN0aW9uLCBhcHAsIGV2ZW50c30gZnJvbSBcIi4uL2VuZ2luZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1lZGljaW5lIGV4dGVuZHMgUElYSS5TcHJpdGV7XHJcblx0Y29uc3RydWN0b3IgKHgsIHkpIHtcclxuXHRcdHN1cGVyKHRleHR1cmVzW1wibWVkaWNpbmUucG5nXCJdKTtcclxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1tYWdpYy1udW1iZXJzXHJcblx0XHR0aGlzLmFuY2hvci5zZXQoMC41KTtcclxuXHRcdHRoaXMud2lkdGggPSA0NTtcclxuXHRcdHRoaXMuaGVpZ2h0ID0gNDU7XHJcblx0XHR0aGlzLnBvc2l0aW9uLnNldCh4LCB5KTtcclxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1tYWdpYy1udW1iZXJzXHJcblx0XHR0aGlzLnJhZGl1cyA9IHRoaXMud2lkdGgvMjtcclxuXHRcdGFwcC5zdGFnZS5hZGRDaGlsZCh0aGlzKTtcclxuXHRcdHRoaXMudHlwZSA9IFwibWVkaWNpbmVcIjtcclxuXHRcdGNvbGxpc2lvbkRldGVjdGlvbi5wdXNoKHRoaXMpO1xyXG5cclxuXHRcdHRoaXMuc3RhcnRJbnRlcmFjdGlvbigpO1xyXG5cdFx0dGhpcy5ieSh7IFwibm90aWZ5OmdhbWVTdGFydGVkXCIgOiAoKSA9PiAgdGhpcy5pbnRlcmFjdGl2ZSA9IGZhbHNlfSk7XHJcblx0fVxyXG5cclxuXHRzdGFydEludGVyYWN0aW9uKCkge1xyXG5cdFx0dGhpcy5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcblx0XHR0aGlzLm9uKFwibW91c2Vkb3duXCIsICgpID0+IHtcclxuXHRcdFx0dGhpcy5zZWxlY3RlZCA9IHRydWU7XHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLm9uKFwibW91c2Vtb3ZlXCIsIChldmVudCkgPT4ge1xyXG5cdFx0XHRpZih0aGlzLnNlbGVjdGVkKXtcclxuXHRcdFx0XHR0aGlzLnggPSBldmVudC5kYXRhLmdsb2JhbC54O1xyXG5cdFx0XHRcdHRoaXMueSA9IGV2ZW50LmRhdGEuZ2xvYmFsLnk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMub24oXCJtb3VzZXVwXCIsICgpID0+IHtcclxuXHRcdFx0dGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRieShwYXJhbXMpIHtcclxuXHRcdGlmICghdGhpcy5ldmVudEhhbmRsZXJzKSB7XHJcblx0XHRcdHRoaXMuZXZlbnRIYW5kbGVycyA9IHt9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvciAobGV0IGtleSBpbiBwYXJhbXMpIHtcclxuXHRcdFx0aWYgKHBhcmFtcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcblx0XHRcdFx0aWYgKCF0aGlzLmV2ZW50SGFuZGxlcnNba2V5XSkge1xyXG5cdFx0XHRcdFx0ZXZlbnRzLmFkZExpc3RlbmVyKGtleSwgdGhpcyk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR0aGlzLmV2ZW50SGFuZGxlcnNba2V5XSA9IHBhcmFtc1trZXldO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==