const http=require("http");

const server = http.createServer((req,res)=>{
    // write logic here
    const method=req.method;
    const url = req.url;
    if (method =="GET" && url =="/") {
  res.writeHead(200, {"Content-Type":"text/plain" });
  res.end("Welcome to the Home Page");
}


})
server.listen(3000,()=>{
    console.log("server is runnina at 3000");

})
