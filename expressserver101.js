//node modules
const path=require('path');

// exteranal modules
const express = require('express')
const app = express()

// app.all('/',(req,res)=>{
//     res.send(`<h1>HI FROM EXPRESS APP PORT 4000</h1>`)
// });
app.use(express.static('public'))

app.all('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/node.html'));
})
app.all('*',(req,res)=>{
    res.send(`<h1 align="center">SORRY NO FILE FOUND</h1>`)
});

if (app.listen(4000)) {
    console.log('LISTENING AT PORT 4000')
} else {
    console.log('NOT STARTED')
}
