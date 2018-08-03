"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = require("./constants");

var _utils = require("./utils");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Collecte = function () {
  function Collecte() {
    var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _constants.defaultInput;
    var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _constants.defaultOptions;

    _classCallCheck(this, Collecte);

    // Init object params
    this._name = _constants.LibName;
    this._version = _constants.LibVersion;
    this._postUrl = url;
    this._question = input.question;
    this._answers = input.answers;
    this._optionalInput = options.optionalInput;
    this._gratitude = options.gratitude;
    this._parent = options.target;
    this._container = document.createElement("div");
  }

  _createClass(Collecte, [{
    key: "init",
    value: function init() {
      // Initialize questions
      var input = null;
      if (this._optionalInput) {
        input = (0, _utils.getOptionalQuestion)();
      }
      var question = (0, _utils.getQuestion)(this._question);
      // Init styles
      this.initStyles();
      // Append to body
      this._container.appendChild(question);
      if (input) {
        this._container.appendChild(input);
      }
      this._parent.appendChild(this._container);
    }
  }, {
    key: "initStyles",
    value: function initStyles() {
      // Container styles
      this._container.style.width = "300px";
      this._container.style.borderRadius = "5px";
      this._container.style.position = "absolute";
      this._container.style.right = "15px";
      this._container.style.bottom = "15px";
      this._container.style.padding = "10px";
      this._container.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    }
  }, {
    key: "version",
    get: function get() {
      return this._version;
    }
  }]);

  return Collecte;
}();

exports.default = Collecte;
module.exports = exports['default'];