const todos = (callback) => {
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            callback(undefined, request.responseText)
        } else if (request.readyState === 4) {
            callback('COULD NOT FETCH DATA', undefined)
        }
    })
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')
    request.send()
}

todos((err, data) => {
    if (err) {
        console.log(err, data)
    } else {
        const JSONdata=JSON.parse(data);
        const arr=Array.from(JSONdata)
        arr.forEach(element=>{
            document.write((`<p>${element.id} ${element.title}</p>`))
        });
    }
})
