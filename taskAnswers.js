// 1 task

let blockSize = 200;
const block = document.createElement("div");
block.style.width = `${blockSize}px`;
block.style.height = `${blockSize}px`;
block.style.backgroundColor = "black";

document.querySelector(".root").appendChild(block);

const increaseButton = document.querySelector(".increase-width");
const decreaseButton = document.querySelector(".decrease-width");

increaseButton.addEventListener("click", () => {
  blockSize = blockSize + 20;
  block.style.width = `${blockSize}px`;
  block.style.height = `${blockSize}px`;
});

decreaseButton.addEventListener("click", () => {
  blockSize = blockSize - 20;
  block.style.width = `${blockSize}px`;
  block.style.height = `${blockSize}px`;
});

// 2 task

const form = document.querySelector(".validationForm");

const inputs = form.querySelectorAll("input");

const nickNameInput = inputs[0];
const emailInput = inputs[1];
const ageInput = inputs[2];

const errorMessageDiv = document.querySelector(".error-message");
const clearErrorMessageButton = document.querySelector(".clear");

const showErrorMessage = (inputs) => {
  const inputNames = inputs.map((input) => input.name);
  errorMessageDiv.innerHTML = `please fill following inputs: ${inputNames.join(", ")}`;
};

const clearErrorMessage = () => {
  errorMessageDiv.innerHTML = "";
};

const getEmptyInputs = () => {
  const emptyInputs = [nickNameInput, emailInput, ageInput].filter((input) => input.value === "");
  return emptyInputs;
};

const handleSubmit = (e) => {
  e.preventDefault();

  const emptyInputs = getEmptyInputs();

  if (emptyInputs.length) {
    showErrorMessage(emptyInputs);
  } else {
    clearErrorMessage();
  }
};

form.addEventListener("submit", handleSubmit);
clearErrorMessageButton.addEventListener("click", clearErrorMessage);
