const http = require('http');
const fs =require('fs');


const server= http.createServer((req,res)=>{
   
    const url =req.url;
   const method = req.method;

    
   console.log(url);
   console.log(method);

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
                console.log(parsedBody);
            });

                fs.writeFileSync('message.txt', 'Dummy');
                res.statusCode =302;
                res.setHeader('location','/');
                return res.end ();
   }


}); 
server.listen(3000);