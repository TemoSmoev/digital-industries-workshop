const loginForm = document.querySelector(".login");
const message = document.querySelector(".message");

const showSuccessMessage = () => {
  message.style.color = "green";
  message.innerHTML = "you are successfully logged in";
};

const showErrorMessage = () => {
  message.style.color = "red";
  message.innerHTML = "error";
};

const validate = (nickName, password) => {
  if (nickName === "JohnDoe" || password === "qwerty") {
    return true;
  } else {
    return false;
  }
};

const handleSubmit = (e) => {
  e.preventDefault();
  const nickName = e.target[0].value;
  const password = e.target[1].value;
  const isValid = validate(nickName, password);
  if (isValid) {
    showSuccessMessage();
  } else {
    showErrorMessage();
  }
};

loginForm.addEventListener("submit", handleSubmit);
