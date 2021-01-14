
document.getElementById('addPost').addEventListener('submit',addPost);
function addPost(e){
    e.preventDefault();
    let title = document.getElementById('title').value
    let body = document.getElementById('body').value
    console.log(title)
    console.log(body)
    axios.post('https://jsonplaceholder.typicode.com/posts',{
        title:title,
        body:body
    }).then(res=>{
        console.log(res.data)
    })
}

