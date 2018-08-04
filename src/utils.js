import { OptionalQuestion } from "./constants";

export function getOptionalQuestion() {
  const inputContainer = document.createElement("div");
  const question = document.createElement("p");
  question.innerHTML = OptionalQuestion;
  inputContainer.appendChild(question);
  return inputContainer;
}
export function getQuestion(inputQuestion, inputAnswer, callback) {
  // Question container
  const inputContainer = document.createElement("div");
  // Question
  const question = document.createElement("p");
  question.innerHTML = inputQuestion;
  question.style.margin = "5px 0";
  // Answers
  const answers = document.createElement("div");
  answers.style.display = "flex";
  answers.style.justifyContent = "space-between";
  inputAnswer.map(val => {
    const answer = document.createElement("span");
    answer.innerHTML = val;
    answer.style.padding = "4px 8px";
    answer.style.margin = "4px";
    answer.style.backgroundColor = "#DDD";
    answer.style.borderRadius = "2px";
    answer.style.cursor = "pointer";
    answer.style.textAlign = "center";
    answer.style.verticalAlign = "middle";
    answers.appendChild(answer);
  });
  // Add answer click listener
  answers.addEventListener("click", evt => {
    callback(evt.target.innerHTML);
  });
  // Appending question and answer to the container
  inputContainer.appendChild(question);
  inputContainer.appendChild(document.createElement("hr"));
  inputContainer.appendChild(answers);

  return inputContainer;
}
