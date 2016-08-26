http://www.alloyteam.com/2015/10/prefetching-preloading-prebrowsing/

<link rel="dns-prefetch" href="//example.com">
提前解析DNS

<link rel="preconnect" href="http://css-tricks.com">
preconnect 会提前建立3次握手

<link rel="prefetch" href="image.png">
prefetch支持预拉取图片、脚本或者任何可以被浏览器缓存的资源

<link rel="preload" href="image.png">
preload草案建议允许始终预加载某些资源

ie中使用  new Image().src 去预加载文件，而其他浏览器使用动态插入的 <object> 标签来完成加载。


http://www.fantxi.com/blog/archives/preload-images-css-js/

js预加载图片使用new Image()基本够用了。但是css、js特殊一些，使用object需要判断浏览器。如果考虑到js、css、img都能兼容实现预加载，可以考虑使用iframe。
