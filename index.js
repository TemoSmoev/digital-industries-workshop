const fetchPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts");
};
const fetchAuthors = () => {
  return fetch("https://jsonplaceholder.typicode.com/users");
};

fetchPosts();
fetchAuthors();

const wrapper = document.querySelector(".wrapper");
const search = document.querySelector(".search");

let allposts = [];

const createNode = (post) => {
  console.log(post);
  wrapper.innerHTML =
    wrapper.innerHTML +
    `
      <div class="post">
          <div class="post-title">${post.title}</div>
          <div class="post-description">${post.body}</div>
          <div class="post-author">${post.author.username}</div>
        </div>
      `;
};

Promise.all([fetchPosts(), fetchAuthors()])
  .then((valuesArr) => Promise.all(valuesArr.map((el) => el.json())))
  .then((elements) => {
    const posts = elements[0];
    const authors = elements[1];
    posts.forEach((post) => {
      const postWithAuthor = { ...post, author: authors[post.userId - 1] };
      allposts.push(postWithAuthor);
      createNode(postWithAuthor);
    });
  });

search.addEventListener("input", (e) => {
  wrapper.innerHTML = "";
  const inputValue = e.target.value;
  const filteredPosts = allposts.filter((post) => post.title.includes(inputValue));
  filteredPosts.forEach((post) => {
    createNode(post);
  });
});
