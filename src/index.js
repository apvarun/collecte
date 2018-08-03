import { LibName, LibVersion, defaultInput, defaultOptions } from "./constants";
import { getQuestion, getOptionalQuestion } from "./utils";

export default class FeedbackBee {
  constructor(input = defaultInput, url = "", options = defaultOptions) {
    // Init object params
    this._name = LibName;
    this._version = LibVersion;
    this._postUrl = url;
    this._question = input.question;
    this._answers = input.answers;
    this._optionalInput = options.optionalInput;
    this._gratitude = options.gratitude;
    this._parent = options.target;
    this._container = document.createElement("div");
  }
  get name() {
    return this._name;
  }
  get version() {
    return this._version;
  }
  init() {
    // Initialize questions
    let input = null;
    if (this._optionalInput) {
      input = getOptionalQuestion();
    }
    const question = getQuestion(this._question);
    // Init styles
    this.initStyles();
    // Append to body
    this._container.appendChild(question);
    if (input) {
      this._container.appendChild(input);
    }
    this._parent.appendChild(this._container);
  }
  initStyles() {
    // Container styles
    this._container.style.width = "300px";
    this._container.style.borderRadius = "5px";
    this._container.style.position = "absolute";
    this._container.style.right = "15px";
    this._container.style.bottom = "15px";
    this._container.style.padding = "10px";
    this._container.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
  }
}
