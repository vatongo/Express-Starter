const express =require('express');


const hostname = '127.0.0.1';
const port = 5000;

const app = express();

app.get("/", (req, res) => {
    res. send('Hello Express Js');
});

app.listen(port,() =>{
    console.log('server is running...');
});




