const todos = (resourceLocation,callback) => {
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            callback(undefined, request.responseText)
        } else if (request.readyState === 4) {
            callback('COULD NOT FETCH DATA', undefined)
        }
    })
    request.open('GET',resourceLocation)
    request.send()
}

todos('./emp/emp1.json',(err, data)=> {
    if (err) {
        console.log(err, data)
    } else {
        const JSONdata=JSON.parse(data);
        const arr=Array.from(JSONdata)
        arr.forEach(element=>{
            document.write((`<p>${element.firstName} ${element.lastName} ${element.emailAddress} ${element.phoneNumber}</p>`))
        });
    }
    todos('./emp/emp2.json',(err, data)=> {
        if (err) {
            console.log(err, data)
        } else {
            const JSONdata=JSON.parse(data);
            const arr=Array.from(JSONdata)
            arr.forEach(element=>{
                document.write((`<p>${element.firstName} ${element.lastName} ${element.emailAddress} ${element.phoneNumber}</p>`))
            });
        }
        todos('./emp/emp3.json',(err, data)=> {
            if (err) {
                console.log(err, data)
            } else {
                const JSONdata=JSON.parse(data);
                const arr=Array.from(JSONdata)
                arr.forEach(element=>{
                    document.write((`<p>${element.firstName} ${element.lastName} ${element.emailAddress} ${element.phoneNumber}</p>`))
                });
            }
        })
    })
})
