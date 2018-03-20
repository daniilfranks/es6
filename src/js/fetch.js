/*
function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.status))
  }
}

function json(response) {
  return response.json()
}

// Show
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(status)
  .then(json)
  .then(data => console.log(data))
  .catch(error => console.log(error))

// All
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(status)
  .then(json)
  .then(data => console.log(data))
  .catch(error => console.log(error))

// Create
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'Title',
      body: 'text body',
      userId: 1
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(status)
  .then(json)
  .then(data => console.log(data))
  .catch(error => console.log(error))

// Update
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
      id: 1,
      title: 'New Title',
      body: 'new text',
      userId: 1
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(status)
  .then(json)
  .then(data => console.log(data))
  .catch(error => console.log(error))

fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
      title: 'Update Title',
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(status)
  .then(json)
  .then(data => console.log(data))
  .catch(error => console.log(error))

// Delete
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE'
})
  .then(status)
  .then(json)
  .then(data => console.log(data))
  .catch(error => console.log(error))

// Filtering
fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
  .then(status)
  .then(json)
  .then(data => console.log(data))
  .catch(error => console.log(error))

// Nested
fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
  .then(status)
  .then(json)
  .then(data => console.log(data))
  .catch(error => console.log(error))


// Form post
const url = 'http://jsonplaceholder.typicode.com/';
let params = "posts"
let post = document.getElementById('post');

post.addEventListener("submit", (event) => { SendForm(event) });

function SendForm(event) {
  event.preventDefault();

  let options = {
    method: 'POST',
    body: JSON.stringify({
      title: post[0].value,
      body: post[1].value,
      userId: post[2].value
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }

  fetch(`${url}${params}`, options)
  .then(status)
  .then(json)
  .then(data => console.log(data))
  .catch(error => console.log(error))
}
*/







