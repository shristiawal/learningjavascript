const http = require('http');

const server= http.createServer((req,res)=>{
   const url =req.url;
   if(url==='/'){

res.write('<html>');
res.write('<head><title>Enter message</title></head>');
res.write('<body><from action ="/message method = "POST"><input type ="text" name= "message"><button type = "submit">send</button></body>')
res.write('</html>');
res.end();
   }

res.setHeader('content-type','text/html');
res.write('<html>');
res.write('<head><title>first page</title></head>');
res.write('<body><h1>hello frome my node js server!</h1></body>')
res.write('</html>');
res.end();
}); 
server.listen(4000);