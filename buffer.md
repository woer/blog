https://cnodejs.org/topic/5189ff4f63e9f8a54207f60c
post 请求
var body = ''
res.on('data',function(data){
	body = body+data
	})
	res.on('end', function(){

		})

Buffer.concat(list, len)

2.1、如果buf大小大于8KB，则buffer类将返回一个slowbuffer实例给buf存储
2.2、如果buf大小小于8KB并且还小于当前buffer池内剩余的空间，则将此buf实例存入当前buffer池，和其他buffer实例共享这个8KB的内存池

http://www.infoq.com/cn/articles/nodejs-about-buffer
buffer乱码

 rs = fs.createReadStream('testdata.md', {encoding: 'utf-8', bufferSize: 11}); 
