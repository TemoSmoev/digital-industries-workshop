let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hello world");
  }, 1000);
});
