const container = document.querySelector;
let uri = "http://localhost:3000/posts";

const renderPosts = async () => {
  const response = await fetch(uri);
  const posts = await response.json();
  console.log(posts);
  let template = "";
  posts.forEach((post) => {
    template += `
    <div class="post">
      <h2>${post.title}</h2>
      <p><small>${post.likes} likes </small></p>
      <p>${post.body.slice(0, 200)}</p>
      <a href="/details.html">read more... </a>
    </div>
    `;
  });
  container.innerHTML = template;
};

window.addEventListener("DOMContentLoaded", () => renderPosts());
