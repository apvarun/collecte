export const LibName = "Collecte";
export const LibVersion = "1.0.2";

export const defaultInput = {
  question: "",
  answers: [],
};
export const defaultOptions = {
  optionalInput: false,
  gratitude: "Thank you for your feedback!",
  target: document.body,
  callback: data => console.table(data),
};

export const OptionalQuestion = "Any comments ?";
