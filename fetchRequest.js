fetch('./emp/emp3.json').then(response=>{
    return response.json();
}).then(data=>{
    console.log(data)
}).catch(err=>{
    console.log('ERROR SECTION: '+err)
})