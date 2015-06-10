var http=require("http");
var url=require("url");

function start(rout,handle){
	function onRequset(request,response){
		var pathName=url.parse(request.url).pathname;
		route(handle,pathName,response);
	}
	http.createServer(onRequset).listen(8888);//监听端口号
}
exports.start=start;