getEmpDetails=async(resource)=>{
    const response=await fetch(resource)
    if(response.status!==200){
        throw new Error('CANNOT FETCH DATA!!!');
    }
    const data=await response.json()
    return data
}

getEmpDetails('./emp/emp1.json').then(data=>{
    console.log(data)
}).catch(err=>{
    console.log(`ERR MSG: ${err.message}`)
})