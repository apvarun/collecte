import { OptionalQuestion } from "./constants";
export function getOptionalQuestion() {
  const inputContainer = document.createElement("div");
  const question = document.createElement("p");
  question.innerHTML = OptionalQuestion;
  inputContainer.appendChild(question);
  return inputContainer;
}
export function getQuestion(input) {
  const inputContainer = document.createElement("div");
  const question = document.createElement("p");
  question.innerHTML = input;
  inputContainer.appendChild(question);
  return inputContainer;
}
