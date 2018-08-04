import { LibName, LibVersion, defaultInput, defaultOptions } from "./constants";
import { getQuestion, getOptionalQuestion } from "./utils";

export default class Collecte {
  constructor(inputs, option) {
    // defaults
    const options = Object.assign({}, defaultOptions, option);
    const input = Object.assign({}, defaultInput, inputs);
    // Init object params
    this._name = LibName;
    this._version = LibVersion;
    this._question = input.question;
    this._answers = input.answers;
    this._optionalInput = options.optionalInput;
    this._gratitude = options.gratitude;
    this._parent = options.target;
    this._callback = options.callback;
    this._container = document.createElement("div");
    // DOM elements and user selected data
    this._elements = {};
    this._output = {
      answer: "",
      input: "",
    };
  }
  get name() {
    return this._name;
  }
  get version() {
    return this._version;
  }
  init() {
    // Validate
    if (!this._container) {
      this._container = document.createElement("div");
    }
    // Initialize questions
    this._elements.question = getQuestion(
      this._question,
      this._answers,
      data => {
        if (this._optionalInput) {
          this._output.question = data;
          return;
        }
        this._callback(data);
        this.finish();
      }
    );
    // Optional input question
    this._elements.input = null;
    if (this._optionalInput) {
      this._elements.input = getOptionalQuestion();
    }
    // Init styles
    this.initStyles();
    this._container.classList.add("collecte-container");
    // Append to body
    this._container.appendChild(this._elements.question);
    if (this._elements.input) {
      this._container.appendChild(this._elements.input);
    }
    // Add to DOM
    this._parent.appendChild(this._container);
    this._container.classList.add("animate-in");
  }
  initStyles() {
    // Create our stylesheet
    const style = document.createElement("style");
    style.innerHTML = `
    .collecte-container{
      width: 300px;
      border-radius: 5px;
      position: absolute;
      right: 15px;
      bottom: 15px;
      padding: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
      background-color: #FFFFFF;
    }
    .animate-in {
      -webkit-animation-name: fadeIn;
      animation-name: fadeIn;
      -webkit-animation-duration: 300ms;
      animation-duration: 300ms;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
    }
    .animate-out {
      -webkit-animation-name: fadeOut;
      animation-name: fadeOut;
      -webkit-animation-duration: 300ms;
      animation-duration: 300ms;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
    }
    @keyframes fadeIn {
      from {
        opacity: 0;
        visibility: hidden;
      }
      to {
        opacity: 1;
        visibility: visible;
      }
    }
    @keyframes fadeOut {
      from {
        opacity: 1;
        visibility: visible;
      }
      to {
        opacity: 0;
        visibility: hidden;
      }
    }`;
    // Fetch the first script tag in the page
    const ref = document.querySelector("script");
    // Insert custom styles for Collecte before the first script tag
    ref.parentNode.insertBefore(style, ref);
  }
  finish() {
    // Empty the original container
    const elt = this._container;
    while (elt.firstChild) elt.removeChild(elt.firstChild);
    // Say Thanks
    const thank = document.createElement("p");
    thank.style.margin = "8px 0";
    thank.innerHTML = this._gratitude;
    elt.appendChild(thank);
    setTimeout(() => {
      elt.classList.add("animate-out");
      elt.addEventListener(
        "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
        () => elt.remove()
      );
    }, 1500);
  }
}
