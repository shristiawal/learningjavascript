const fs=require('fs');
const requestHandler= (req,res)=>{
    const url =req.url;
    const method = req.method;

    if(url==='/'){
        res.write('<html>');
        res.write('<head><title>Enter message</title></head>');
        res.write("<body><form action='/message' method='POST'><input type ='text' name= 'message'><button type = 'Submit'>send</button></form></body>")
        res.write('</html>');
        return res.end();
    }
    
    
    
    if(url==='/message' && method==='POST'){
                const body =[];
            req.on('data',(chunk)=> {
                console.log(chunk);
                body.push(chunk);
            });
    
            req.on('end',()=>{
                const parsedBody = Buffer.concat(body).toString();
                const message =parsedBody.split('=')[1];
                fs.writeFileSync('message.txt',message);
                res.statusCode =302;
                res.setHeader('location','/');
                return res.end();
            
            
            });
    
        }
        res.setHeader('Content-Type','Text/html')
        res.write('<html>');
        res.write('<head><title> my first page</title><head>');
        res.write('<body><h1>Hello from my node.js server!</h1></body>')
        res.write('</html>')
        res.end();
    
};

module.exports = {
    handler :requestHandler,
    someText:'some hard coded text'
};