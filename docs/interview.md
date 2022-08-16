---
stick: true #是否置顶
categories: [前端面试题] #标签
# date: "2021/10/19 21:18" #手动设置最后更新时间，如果有git commit，将使用该值作为最后更新时间
coverUrl: 'https://images.pexels.com/photos/55821/pyrenees-mountains-snow-zenith-55821.jpeg'
# time: 2021/10/14
date: "2022/5/11 23:59"
# layout: RegisterCom #为该md设置layout
---

# 前端面试题库(个人)
## 基础决定上限，观察看学习能力，代码书写风格


### HTML 与 DOM 基础
1. `<b>` 标签和 css 的 font-weight: bold 属性有什么区别  
2. 简述一下你对HTML语义化的理解？   
    - 把 HTML 的元素标签，属性都写的有意义，并且使用 HTML5 标准的语义化标签

3. iframe有那些缺点？  
    - iframe会阻塞主页面的Onload事件； 搜索引擎的检索程序无法解读这种页面，不利于SEO; iframe和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载。 使用iframe之前需要考虑这两个缺点。 如果需要使用iframe，最好是通过javascript动态给iframe添加src属性值，这样可以绕开以上两个问题。

4. 如何实现浏览器内多个标签页之间的通信?  
   - window.addEventListener(‘storage’, (e) => console.log(e)),onstorage以及storage事件，针对都是非当前页面对 localStorage进行修改时才会触发，当前页面修改localStorage不会触发监听函数。

5. webSocket如何兼容低浏览器？  

6. title与h1的区别、b与strong的区别、i与em的区别？  

7. 浏览器如何解析文档结构  

8. HTML 解析过程中遇到 script 标签会怎么样  
   - 停止解析DOM树并且开始下载js，因为 js 可能会改变现有 html 结构，所以是阻塞资源
   - 可以使用 async 或者 defer 实现异步加载 js，这样不会阻塞 DOM 解析

9. 如何优化页面的加载速度  

10. 跨域 CORS 的原理是什么  

11. JSON-P 是什么  
    - JSON-P 和 JSON 的性能区别是什么

12. 设置缓存的方式  
    - 服务器设置 expire 的 http 头信息
    - 客户端缓存
    - 缓存 Ajax 请求必须使用 GET 的方式

13. XSS 和 CSRF 的区别以及原理  

14. 正则表达式的工作原理  
    - JS 解析器遇到表达式时会将其编译成原生代码，所以需要把表达式写成字面量

### CSS
* 写动画的时候需要注意什么
* 介绍一下标准的CSS的盒子模型？低版本IE的盒子模型有什么不同的？
* CSS优先级算法如何计算？
* 请解释一下CSS3的Flexbox（弹性盒布局模型）,以及适用场景？
* 使用 CSS 预处理器吗？喜欢那个？
* CSS优化、提高性能的方法有哪些？
* 浏览器是怎样解析CSS选择器的？
* 抽离样式模块怎么写，说出思路，有无实践经验？
* 元素竖向的百分比设定是相对于容器的高度吗？
* 你对line-height是如何理解的？
* 让页面里的字体变清晰，变细用CSS怎么做？（-webkit-font-smoothing: antialiased;）
* 如果需要手动写动画，你认为最小时间间隔是多久，为什么？
* overflow: scroll时不能平滑滚动的问题怎么处理？
* style标签写在body后与body前有什么区别？
* rem布局的优缺点 
### JS
* 介绍JavaScript的基本数据类型。
* 说说写JavaScript的基本规范？
* Javascript如何实现继承？
* JavaScript有几种类型的值？（堆：原始数据类型和 栈：引用数据类型），你能画一下他们的内存图吗？
* 什么是window对象? 什么是document对象?
* 什么是闭包（closure），为什么要用它？
* .call() 和 .apply() 的作用和区别，bind 又是做什么的？
* new操作符具体干了什么呢?
* 那些操作会造成内存泄漏？
* Javascript中，有一个函数，执行时对象查找时，永远不会去查找原型，这个函数是？
    - hasOwnProperty
    - JS 对象分为自身属性与继承属性
* 对JSON的了解？
* 关于事件，IE与火狐的事件机制有什么区别？ 如何阻止冒泡？
* null，undefined的区别？
* JavaScript 原型，原型链 ? 有什么特点？
* 同步和异步的区别?
* 模块化开发怎么做？
* 如何做数据的状态管理
* DOM 操作为什么这么慢
    -  getElementByXX 和 querySelector 的区别是什么
* JS 代码最优运行时间是多少
* 为什么需要使用 JS 的事件代理功能
* JS Bridge 的原理
* EventLoop 是什么
* 作用域链是什么
    - JS 引擎如何解析标识符的，例如 this window 和其它
    - 如何达到最高的作用域链的效率
* JS 的 JIT 是什么

### 前端框架
### React
* React 的应用场景
* 描述一下React 生命周期
* 为什么循环产生的组件中要利用上key这个特殊的prop？
* React-router 路由的实现原理？
* 受控组件(Controlled Component)与非受控组件* (Uncontrolled Component)的区别
* React为什么自己定义一套事件体系呢，与浏览器原生事件体系有什么关系？
* 什么时候应该选择用class实现一个组件，什么时候用一个函数实现一个组件？
* 什么是HoC（Higher-Order Component）？适用于什么场景？
* 并不是父子关系的组件，如何实现相互的数据通信？
    - 父组件的 state
    - context
    - eventEmitter
    - redux，比较复杂

* setState 调用后发生了什么

    1. getInitialState，componentWillMount，render，componentWillUpdate 中setState都不会引起updateComponent。但在componentDidMount和componentDidUpdate中则会。

    2. 直接调用this.setState()
       - 因为在整个生命周期中就是一个事物操作,所以标识位isBatchingUpdates = true,所以流程到了enqueueUpdate()时,实例对象都会加入到dirtyComponents 数组中
       - 接着执行componentWillMount()
       - 将所有的setState操作进行合并(相同的操作合并成一个)
       - 渲染
       - 执行componentDidMount()
       - 事物结束,调用close方法->调用runBatchUpdate()
       - 继续走更新流程

    2. 使用setTimeout()方法调用
       - setTimeout()没在事物中 isBatchingUpdates = false 所以就直接走直接更新操作

* virtual DOM 是什么
* 为什么会出现virtual DOM
* diff 算法是什么
    - React 的 3 个 diff 结构
* React与Vue，各自的组件更新进行对比，它们有哪些区别？
    - React 使用 state，VUE 使用 watcher

* React Native 的底层实现
    - android 使用 webkit 解析 js
    - iOS 使用 JavaScript-core 解析 js

### React Native
* js bridge 是什么

### VUE
1. VUE 的应用场景
2. VUE 的数据绑定过程
    - 把 Vue 的实例中的 data 对象，通过 defineProperty 设置 getter 和 setter，在 setter 中设置 watcher 监听对应的对象的变化

### Node
* Node 的运作原理
    - 模块加载
    - JS 模块与 C 模块的交互
    - Node 的异步机制
    - Node 的异步 I/O 原理
    - Node 是单线程吗？
    - Node 的 V8 内存限制，以及如何突破内存限制
    - Buffer 对象是什么
    - 如何处理异常
    - 如何启用多线程   

### 开发工具
1. 使用什么开发工具
2. 搭建的开发环境问题
    - 团队如何搭建开发环境