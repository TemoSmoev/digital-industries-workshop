const counterNode = document.getElementById("counter");
const startNode = document.getElementById("start");
const stopNode = document.getElementById("stop");

let count = 0;
let id = undefined;

const countFromLocalStorage = localStorage.getItem("count");
if (countFromLocalStorage) {
  count = Number(countFromLocalStorage);
  counterNode.innerHTML = countFromLocalStorage;
}

startNode.addEventListener("click", () => {
  if (!id) {
    id = setInterval(() => {
      count++;
      localStorage.setItem("count", count);
      counterNode.innerHTML = count;
    }, 1000);
  }
});

stopNode.addEventListener("click", () => {
  clearInterval(id);
  id = undefined;
});
