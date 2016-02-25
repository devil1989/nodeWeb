var http=require("http");
var url=require("url");

function start(){//rout和handle是在具体的页面执行的时候传入的参数
	console.log("start server")
	function onRequset(request,response){
		var pathName=url.parse(request.url).pathname;
		route(pathName,response);
	}
	http.createServer(onRequset).listen(8888);//监听端口号,执行这个后，需要在浏览器访问，这样才能执行它的侦听
}
module.exports={
	"start":start
};

server.start();//启动后台服务
//如何启动服务：cmd到server.js目录，然后执行 node server.js启动服务，然后就可以在http://localhost:8888/查看页面