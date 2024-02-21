const http =require('http');

const express =require ('express');

const handling = express();


handling.use('/add-product',(req,res,next)=>{
    console.log('in another middleware');
    res.send('<h1> The "Add Product" page </h1>');
});
    handling.use('/',(req,res,next)=>{
        console.log('in another middleware');
        res.send('<h1>hello from express !!!</h1>');

});
 
//const server =http.createServer(handling);

handling.listen(3000);