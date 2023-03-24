const express = require('express');
const nodemon = require('nodemon');
const path = require('path');

const app = express();

const Todos = ["Go to movies","Buy GroceRies","Watch Movies", "Go to shopping"];

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));
app.use('/',express.static(path.join(__dirname,'public')));

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get('/',(req,res)=>{
    res.send('CSR and SSR');
})


app.get('/todos',(req,res)=>{
    res.json(Todos);
})

app.post('/todos',(req,res)=>{
    console.log(req.body);
    res.send('POST REQUEST');
    // res.json(Todos);
})

app.listen(8000,()=>{
    console.log('server started at port 3000');
})