https://wohugb.gitbooks.io/pm2/content/features/log.html

 #用fork模式启动 app.js 而不是使用 cluster？？？？
 ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
pm2 是一个带有负载均衡功能的Node应用的进程管理器.
0秒停机重载
内建负载均衡
控制台检测
https://cnodejs.org/topic/563abbc07320b237394c5a5e
pm2 logs 日志分割
//app.keymetrics.io  
pm2-web
pm2 deploy ecosystem.json production setup
"max_memory_restart": "1024M",

pm2是node的守护进程，支持监控和日志，负载均衡，0s重启，集群（默认就是 cluster 模式） 自动重启不稳定的进程 开发模式下watch重启 pm2 deploy ecosystem.json production setup
－i max    
"max_memory_restart": "1024M",
pm2 monit
问题： 端口占用


惊群现象
简单说来，多线程/多进程等待同一个 socket 事件，当这个事件发生时，这些线程/进程被同时唤醒，就是惊群
多端口nginx代理
多个进程之间会竞争 accpet 一个连接，产生惊群现象，效率比较低。
由于无法控制一个新的连接由哪个进程来处理，必然导致各 worker 进程之间的负载非常不均衡。
http://taobaofed.org/blog/2015/11/03/nodejs-cluster/
