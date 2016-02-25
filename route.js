/*
 *@author: jeffrey chen
 *@date : 2015/06/09
 *@desc:路由器，把对应的请求根据参数不同分配到不同的页面处理函数处理（MVC中，路由器应该把数据传输到Controller）
 */
var mapping=require("./mapping").mapping;

// var errorInfo=require("./Data/errorInfo").errorInfo;//通过相对路径获取对应文件的数据，返回的是那个文件的exports对象
function route(pathName,response){
	if( mapping&&(typeof mapping[pathName] === "function")) {
		mapping[pathName](response);
	}
	else{
		response.writeHead(404,{"Content-Type":"text/plain"});//写http请求头
		// response.write(errorInfo["404"]);
		response.end();
	}
}

module.exports={
	"route":route,
	"mapping":
};