const fetchPosts = () => fetch("https://jsonplaceholder.typicode.com/posts").then((res)=>res.json());
const fetchUserById = (id) => fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => res.json());

const todosNode=document.querySelector('.todos')
const searchBarNode=document.querySelector('.input')

const totalPosts=[]

const clearPosts=()=>{
  todosNode.innerHTML=''
}

const renderPost=(post)=>{
  todosNode.innerHTML+=`
    <div class="todo">
        <div class="title"> <span>title:</span> ${post.title}</div>
        <div class="description"> <span>description:</span> ${post.description}</div>
        <div class="author"> <span>author:</span> ${post.author}</div>
      </div>
    `
}

searchBarNode.addEventListener('input',(e)=>{
  clearPosts()
  const searchValue=e.target.value
  const filteredPosts=totalPosts.filter((post)=>post.title.includes(searchValue))
  filteredPosts.forEach((post)=>renderPost(post))
})

const initialise = () => {
  fetchPosts().then((posts) => {
    posts.forEach(post => {
      fetchUserById(post.userId).then((user)=>{
        const postWithUserName={title:post.title,description:post.body,author:user.name}
        totalPosts.push(postWithUserName)
        renderPost(postWithUserName)
      })
    });
  });
};
initialise();

// posts.filter((post)=>post.title.includes(keyword))