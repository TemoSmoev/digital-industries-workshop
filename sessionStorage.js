const userName = document.getElementById("userName");

const userNameValue = sessionStorage.getItem("userName");
if (userNameValue) {
  userName.value = userNameValue;
}

userName.addEventListener("input", (e) => {
  console.log(e.target.value);
  sessionStorage.setItem("userName", e.target.value);
});
