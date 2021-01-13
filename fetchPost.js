
document.getElementById('addPost').addEventListener('submit',addPost);
function addPost(e){
    let title = document.getElementById('title').value
    let body = document.getElementById('body').value
    console.log(title)
    console.log(body)
    e.preventDefault();
   fetch('https://jsonplaceholder.typicode.com/posts',{
    method:'POST',
    body:JSON.stringify({body:body,title:title, userId: 1,}),
    headers:{
        'Accept':'application/json,text/plain,*/*,charset=UTF-8 ',
        'Content-type':'application/json,charset=UTF-8 '
    }
   }).then(res=>{
       res.json()
   }).then(data=>{
       console.log(data)
   })
}
