//  4 Major rules of create element
/**
 * 1: get the element where you want to add the new elements out of the loop
 * 2: create child element
 * 3: set InnerText or InnerHtml
 * 4: AppendChild
 * **/

function loadPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((post) => disPlatPosts(post));
}

function disPlatPosts(posts) {
  const postContainer = document.getElementById("posts_container");

  for (const post of posts) {
    const Postdiv = document.createElement("div");
    Postdiv.innerHTML = `
    <h4>User- ${post.userId}</h4>
    <h5>post title: ${post.title} </h5>
    <p>Post Description: ${post.body}</p>
    `;
    postContainer.appendChild(Postdiv);
  }
}
loadPosts();
