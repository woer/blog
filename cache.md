浏览器缓存控制机制有两种：HTML Meta标签 vs. HTTP头信息
1，使用meta标签 设置Pragma no-cache
2，HTTP头信息控制缓存
用户第一次发起请求，返回值里面会包含缓存协商包括expires，cache－control，etag，last－modofied
用户第二次发起请求如果没有过期 返回200（from cache） 由Cache-Control与Expires的作用一致共同作用
如果已经过期last－modified 和etag 向服务器传递if－no-match 由服务器决策是不是返回304，如果服务器有更新就200

用户行为与缓存
Ctrl+F5刷新 都无效
F5/按钮刷新 Expires/Cache-Control 无效
