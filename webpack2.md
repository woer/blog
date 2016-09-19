http://www.alloyteam.com/2016/01/webpack-use-optimization/

gulp也用到了流(pipe)这样的内存处理方式，但感觉webpack更进一步。gulp是每一个任务(task)用一个流，而webpack是共享一个流。

与react一类模块化开发的框架搭配着用比较好
ExtractTextPlugin 模块 抽离css到一个文件而非内联
CommonsChunkPlugin 合并公共代码  有bug
externals。 然后用<script>单独将react引入或者别名配置


webpack 2 已经支持原生的 ES6 的模块加载器了，这意味着 webpack 2 能够理解和处理 import和export了，而不用把他们转化成 CommonJS 来处理了

http://www.cnblogs.com/sunshq/p/5073301.html
写loader

loaders 插入一个逻辑
https://github.com/lcxfs1991/blog/issues/1
写插件
