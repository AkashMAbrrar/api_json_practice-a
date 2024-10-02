// fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) =>
//   console.log(response)
// ); // .json is not similar but close to JSON.parse
// //   .then((json) => console.log(json));

// fetch("https://jsonplaceholder.typicode.com/todos/1");

// fetch(url)
//   .then((response) => response.json())
//   .then((json) => console.log(json));

function loadData() {
  const url = "https://jsonplaceholder.typicode.com/todos/1";

  fetch(url)
    .then((response) => response.json())
    .then((json) => console.log(json));
}

// API ==>> Application Programming Interface
// An API acts like a Link that allows two applications to talk to each other
// API is the part of the server that receives and sends responses.
