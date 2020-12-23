require('./config/config');

const express = require('express')
const app = express();


app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.get('/usuario',(req,res)=>{
    res.send('get Usuario');
});

app.post('/usuario',(req,res)=>{
    let body = req.body;

    if(body.nombre === undefined){
        res.status(400).json({
            ok:false,
            msg:'El nombre es necesario'
        });
    } 

    res.json({
        persona:body
    });
});

app.put('/usuario/:id',(req,res)=>{
    let id = req.params.id; 
    res.json({
        id

    });
});

app.delete('/usuario',(req,res)=>{
    res.send('delete Usuario');
});

app.listen(process.env.PORT,() =>{
    console.log('Webserver is online on port',process.env.PORT);
});