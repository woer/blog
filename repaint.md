我们知道如果长时间的执行 JS 会阻塞主线程


JS是单线程的，但是浏览器可以开启多个线程，渲染一个网页需要两个重要的线程来共同完成：
Main Thread 主线程
Compositor Thread 绘制线程(我自己翻译的)

手机上使用CSS动画时很多时候会感到卡顿
开启GPU加速 transform: translate3d(0,0,0); 可解决


requestAnimationFrame
CSS3 transition或animation动画也是走的跟你一样的绘制原理
