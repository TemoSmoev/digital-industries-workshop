const userName = document.getElementById("userName");

const userNameValue = localStorage.getItem("userName");
if (userNameValue) {
  userName.value = userNameValue;
}

userName.addEventListener("input", (e) => {
  console.log(e.target.value);
  localStorage.setItem("userName", e.target.value);
});
