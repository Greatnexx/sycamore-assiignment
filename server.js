// server using built in using node.js http module


const http = require('http');
const server = http.createServer((req,res)=>{
    res.write(200,{'content-Type': 'text/plain'});
    res.end('Hello World');
})
server.listen(3000,() =>{
    console.log('server is running on port 3000');
    
});



// Basic express server with routes for home and about


const express= require ('express')
const app= express();

app.get('/',(req,res)=>{
    res.send('Welcome to my Hompage')
})
app.get('/about',(req,res)=>{
    res.send('Welcome to my About Page')
})


app.listen(8000,()=>{
    console.log('Server is running on port 8000');
    
})


// comparison

/*

The broiler plates for express is  more easy to read and understand
In the express we dont need to specify the content types and   

*/
