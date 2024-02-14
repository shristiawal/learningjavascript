const http = require('http');

const server= http.createServer((req,res)=>{
   const url =req.url;
   if(url==='/'){

res.write('<html>');
res.write('<head><title>Enter message</title></head>');
res.write('<body><from action ="/message method = "POST"><input type ="text" name= "message"><button type = "submit">send</button>"</body>')
res.write('</html>');
res.end();
   }


}); 
