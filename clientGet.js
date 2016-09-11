var http=require('http');
var url=require('url');
var util=require('util');
 http.createServer(function(req,res){
        console.log('aaaa');
		var params=url.parse(req.url,true);
		console.log('bbb');
		console.log(util.inspect(params));
		console.log('ccc');
		res.end(params.query.name);
 }).listen(3000)

 http.get({
    host:'localhost',
		path:'/user?name=panfeifei&age=12',
		port:3000},function(res){
		res.setEncoding('utf-8');
		res.on('data',function(data){
		     console.log('ddd'+data);
		});
 });