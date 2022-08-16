---
stick: true #是否置顶
categories: [Promise] #标签
# date: "2021/10/19 21:18" #手动设置最后更新时间，如果有git commit，将使用该值作为最后更新时间
coverUrl: 'https://images.pexels.com/photos/326256/pexels-photo-326256.jpeg'
# time: 2021/10/14
date: "2022/5/20 23:59"


# layout: RegisterCom #为该md设置layout
---

<!-- 
FrontMatter使用
链接：https://aurora.xcye.xyz/learn/frontmatter.html

---
date: "2021/111/27" #手动设置此篇文章发布时间
tag: [tag1,tag2] #设置此篇文章的标签
categories: [cate1,cate2,cate3] #设置此篇文章的类别
keyword: key1,key2 #设置此篇文章的关键词
description: 这是一个描述 #设置此篇文章的描述
sticky: true #是否置顶该篇文章
coverUrl: "https://aurora.xcye.xyz/avatar.jpg" #设置封面图
title: 这是第一篇文章 # 设置标题
--- 
-->

# 简易的Promise实现
### 什么是 Promise

>Promise 对象是一个代理对象（代理一个值），被代理的值在Promise对象创建时可能是未知的。它允许你为异步操作的成功和失败分别绑定相应的处理方法（handlers）。 这让异步方法可以像同步方法那样返回值，但并不是立即返回最终执行结果，而是一个能代表未来出现的结果的promise对象
>
来自 MDN 的定义

一个 Promise有以下几种状态:

* pending: 初始状态，既不是成功，也不是失败状态。
* fulfilled: 意味着操作成功完成。
* rejected: 意味着操作失败。

>pending 状态的 Promise 对象可能会变为fulfilled 状态并传递一个值给相应的状态处理方法，也可能变为失败状态（rejected）并传递失败信息。
当其中任一种情况出现时，Promise 对象的 then 方法绑定的处理方法（handlers ）就会被调用（then方法包含两个参数：onfulfilled 和 onrejected，它们都是 Function 类型。当Promise状态为fulfilled时，调用 then 的 onfulfilled 方法，当Promise状态为rejected时，调用 then 的 onrejected 方法， 所以在异步操作的完成和绑定处理方法之间不存在竞争）。
>
### 实现
于是按照 Promise 的定义简单实现了一个 Promise 对象

```javascript
function PromiseA(executor) {
if(typeof executor !== 'function') return console.error('executor mast be a function');
this.status = 'pedding';
this.thenCallback
this.catchCallback
this.finalCallback
this.executor = executor;
let done = () => {
    if(typeof this.finalCallback === 'function') {
    this.finalCallback();
    }
}
let resolve = (value) => {
    this.status = 'fulfilled'
    this.thenCallback(value);
    done();
}
let reject = (reason) => {
    this.status = 'rejected';
    this.catchCallback(reason)
    done();
}
executor(resolve, reject);
return this;
}

PromiseA.prototype.then = function(thenCallback) {
this.thenCallback = thenCallback;
return this;
}

PromiseA.prototype.catch = function(catchCallback) {
this.catchCallback = catchCallback;
return this;
}

PromiseA.prototype.final = function(finalCallback) {
this.finalCallback = finalCallback;
return this;
}

var p = new PromiseA((resolve, reject) => {
setTimeout(() => {
    if(Math.random() < 0.5) {
    resolve('resolve')
    } else {
    reject('reject')
    }
}, 1000);
})

p.then((res) => {
console.log(res)
}).catch(err => {
console.log(err)
}).final(() => {
console.log('final')
})
```