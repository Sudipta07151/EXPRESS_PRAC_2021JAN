const empDetails = (resourceLocation) => {
    return new Promise((resolve,reject)=>{
        const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                const data=JSON.parse(request.responseText)
                resolve(data)
            }
            else if (request.readyState === 4) {
                reject('FAILED TO FETCH')
            }
        })
        request.open('GET',resourceLocation)
        request.send()
    })
}

empDetails('./emp/emp1.json').then(data=>{
    console.log(data);
    return empDetails('./emp/emp2.json')
}).then(data=>{
    console.log(data);
    return empDetails('./emp/emp3.json')
}).then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(err)
})





// {
//     if (err) {
//         console.log(err, data)
//     } else {
//         const JSONdata=JSON.parse(data);
//         const arr=Array.from(JSONdata)
//         arr.forEach(element=>{
//             document.write((`<p>${element.firstName} ${element.lastName} ${element.emailAddress} ${element.phoneNumber}</p>`))
//         });
//     }
// })
