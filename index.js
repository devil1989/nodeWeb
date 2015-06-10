var server=require("./server");
var route=require("./route");
var controllers=require("./Controller/");
var mapping={};
mapping["/"]=controllers.index;//首页的映射，以后其他页面的映射也直接放这边
mapping["/index"]=controllers.index;
server.start(route,mapping);