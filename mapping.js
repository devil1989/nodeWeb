/*
 *@desc：页面url和controller入口函数做一一对应
 */

var controllers=require("./controller");//控制器，是各个页面的入口

var mapping={//首页的映射，以后其他页面的映射也直接放这边,url做属性，对应的值就是controller中对应的页面处理函数
	"/":controllers.index,
	"/index":controllers.index
};

module.exports={
	"mapping":mapping
}


