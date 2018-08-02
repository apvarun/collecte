import { getLibName } from "./utils";

export default class FeedbackBee {
  constructor() {
    this._name = getLibName();
  }
  get name() {
    return this._name;
  }
}
