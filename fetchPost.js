
document.getElementById('addPost').addEventListener('submit',addPost);
function addPost(e){
    e.preventDefault();
    let title = document.getElementById('title').value
    let body = document.getElementById('body').value
    console.log(title)
    console.log(body)
   fetch('https://jsonplaceholder.typicode.com/posts',{
    method:'POST',
    headers:{
        'Accept':'application/json,text/plain,*/*',
        'Content-type':'application/json;charset=UTF-8'
    },
    body:JSON.stringify({title:title, body:body}),
   }).then((response) => response.json())
   .then((json) => console.log(json));
}

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
}).then((response) => response.json())
.then((json) => console.log(json));
  