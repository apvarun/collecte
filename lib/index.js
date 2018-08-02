"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = require("./utils");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FeedbackBee = function () {
  function FeedbackBee() {
    _classCallCheck(this, FeedbackBee);

    this._name = (0, _utils.getLibName)();
  }

  _createClass(FeedbackBee, [{
    key: "name",
    get: function get() {
      return this._name;
    }
  }]);

  return FeedbackBee;
}();

exports.default = FeedbackBee;
module.exports = exports['default'];