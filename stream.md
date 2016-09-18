
Stream提供了以下四种类型的流：
var Stream = require('stream')
var Readable = Stream.Readable
var Writable = Stream.Writable
var Duplex = Stream.Duplex
可读流中的数据（0, 1）与可写流中的数据（'a', 'b'）是隔离开的
var Transform = Stream.Transform
在这里，.pipe()方法会自动帮助我们监听data和end事件

流中的数据默认情况下都是Buffer类型
objectMode的选项，一旦设置为true，就能出现“种瓜得瓜，种豆得豆”的效果

https://github.com/woer/streamify-your-node-program

可读流通过push方法产生数据，存入readable的缓存中。 当调用push(null)时，便宣告了流的数据产生的结束。

pipe

readable.on('data', function (data) {
  var ret = writable.write(data)
  if (ret === false) {
    readable.pause()
  }
})

writable.on('drain', function () {
  readable.state.flowing = true
  flow(readable)
})



pipe的作用drain
使用流时，一定要确保下游正常消耗数据
