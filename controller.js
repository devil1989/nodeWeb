
//首页controller
function index(response){
	// response.write('456321789');
	response.write('<!DOCTYPE html><html lang="en"><head> <meta charset="UTF-8"> <title>Document</title> </head> <body>jeffreychen</body> </html>');
	response.end();//结束,这个必须写，否则会报错
}

//列表页controller
function list(){

}


module.exports={
	index:index,
	list:list
}