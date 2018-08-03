"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOptionalQuestion = getOptionalQuestion;
exports.getQuestion = getQuestion;

var _constants = require("./constants");

function getOptionalQuestion() {
  var inputContainer = document.createElement("div");
  var question = document.createElement("p");
  question.innerHTML = _constants.OptionalQuestion;
  inputContainer.appendChild(question);
  return inputContainer;
}
function getQuestion(input) {
  var inputContainer = document.createElement("div");
  var question = document.createElement("p");
  question.innerHTML = input;
  inputContainer.appendChild(question);
  return inputContainer;
}