http://www.zcfy.cc/article/1136
虚拟dom
Virtual DOM 是真实 DOM 的任意一种表达形式
在 Virtual DOM 树上的改动，会创建一个新的 Virtual DOM 树。比较新老 Virtual DOM 树的算法，会计算差异并对真实 DOM 进行最小的更改，所谓“虚拟”
{ type: ‘…’, props: { … }, children: [ … ] }

<ul className=”list”>
  <li>item 1</li>
  <li>item 2</li>
</ul>
转译成：

React.createElement(‘ul’, { className: ‘list’ },
  React.createElement(‘li’, {}, ‘item 1’),
  React.createElement(‘li’, {}, ‘item 2’),
);

虚拟dom：
innerHTML: render html string + 重新创建所有 DOM 元素
Virtual DOM: render Virtual DOM + diff + 必要的 DOM 更新

angular track by $index
Angular 最不效率的地方在于任何小变动都有的和 watcher 数量相关的性能代价


初始渲染：Virtual DOM > 脏检查 >= 依赖收集
小量数据更新：依赖收集 >> Virtual DOM + 优化 > 脏检查（无法优化） > Virtual DOM 无优化
大量数据更新：脏检查 + 优化 >= 依赖收集 + 优化 > Virtual DOM（无法/无需优化）>> MVVM 无优化

React 比较更新前后的元素 key 值，如果相同则更新，如果不同则销毁之前的，重新创建一个元素

React只是使用起来非常友好并且易于理解，是virtual DOM让这一切成为可能，同时速度能够让人接受。DOM diff的目标并不在于让React变得比它的同胞更快，而是让你不用再考虑DOM，取而代之的是关注你前端的全局状态


渲染的结果不是实际的DOM节点
批量处理  在根结点setstate会重新渲染整个子树
http://www.zcfy.cc/article/1183
