---
stick: true #是否置顶
categories: [Cookie] #标签
# date: "2021/10/19 21:18" #手动设置最后更新时间，如果有git commit，将使用该值作为最后更新时间
coverUrl: 'https://images.pexels.com/photos/6043246/pexels-photo-6043246.jpeg'
# time: 2021/10/14
date: "2022/5/5 23:59"
# layout: RegisterCom #为该md设置layout
---

# 浏览器 Cookie及相关属性
## Cookie 介绍


### 为什么出现 Cookie？
HTTP 是一个无状态的协议（这里的 HTTP 是指 HTTP 1.x），它的每个请求都是完全独立的，每个请求包含了处理这个请求所需的完整的数据，发送请求不涉及到状态变更。简单的理解就是同一个客户端连续两次发送请求到服务器，服务器也识别不出这是同一个客户端发送的请求。
为了解决 HTTP 无状态导致的问题，出现了 Cookie。 Cookie 的存在也不只是为了解决通讯协议无状态的问题。

### 什么是 Cookie ？
含义：类型为「小型文本文件」，指某些网站为了辨别用户身份而储存在用户本地终端上的数据（不超过 4KB）。
组成：它由一个名称（Name）、一个值（Value）和其它几个用于控制 Cookie 有效期、安全性、使用范围等可选属性组成。
查看：
● 对于存放在浏览器的 cookie, 打开浏览器的开发者工具，在Application - Cookies 里查看到当前页面的 Cookie
● 对于存在本地文件的 cookie，打开文件查看

### Cookie 的作用是什么？
Cookie 主要用于以下三个方面：

1. 会话状态管理（如用户登录状态、购物车、游戏分数或其它需要记录的信息）
2. 个性化设置（如用户自定义设置、主题等）
3. 浏览器行为跟踪（如跟踪分析用户行为等）

### Cookie 是怎么设置的？

简单来说就是：
1. 客户端发送 HTTP 请求到服务器
2. 当服务器收到 HTTP 请求时，在响应头里面添加一个 Set-Cookie 字段
3. 浏览器收到响应后保存 Cookie
4. 之后对该服务器每一次请求中都通过 Cookie 字段将 Cookie 信息发送给服务器。

### Cookies 的属性有哪些？

#### Name/Value
用 JavaScript 操作 Cookie 的时候注意对 Value 进行编码处理。

#### Expires
Expires 用于设置 Cookie 的过期时间。设定的过期时间只与客户端相关，而不是服务端。
Set-Cookie: name=value; Expires=Wed, 21 Oct 2021 07:28:00 GMT;
● 当 Expires 属性缺省时，表示是会话性 Cookie，Cookie 值保存在客户端内存中，并在用户关闭浏览器时失效。有些浏览器提供了会话恢复功能，这种情况下即使关闭了浏览器，会话期 Cookie 也会被保留下来，就好像浏览器从来没有关闭一样。
● 当 Expires 属性不缺省时，表示是持久性 Cookie，Cookie 值保存在用户的硬盘中，直至过期或者手动清除 Cookie。

#### Max-Age
Max-Age 用于设置在 Cookie 失效之前需要经过的秒数。Max-Age 可以为正数、负数、甚至是 0。
Set-Cookie: id=1224455; Max-Age=604800;
● 如果 max-Age 属性为正数时，浏览器会将其持久化，即写到对应的 Cookie 文件中。
● 当 max-Age 属性为负数，则表示该 Cookie 只是一个会话性 Cookie。
● 当 max-Age 为 0 时，则会立即删除这个 Cookie。
Expires 和 Max-Age 都存在时，Max-Age 优先级更高。

#### Domain
Domain 指定了 Cookie 可以送达的主机名。默认值为当前文档访问地址的有效顶级域名 + 二级域名。
Set-Cookie: test=219ffwef9w0f; Domain=taobao.com;
如果设置Domain 是 taobao.com，那么 a.taobao.com 或 b.taobao.com 都可以使用 Cookie。
不能跨域设置 Cookie，比如在 .taobao.com 页面里把 Domain 设置成 Baidu.com 是无效的

#### Path
Path 指定了一个 URL 路径，这个路径必须出现在要请求的资源的路径中才可以发送 Cookie。比如设置 Path=/docs，/docs/Web/ 下的资源会带 Cookie ，/test 则不会携带 Cookie。
Set-Cookie: test=219ffwef9w0f; Domain=taobao.com; Path=/;
Domain 和 Path 标识共同定义了 Cookie 的作用域：即 Cookie 应该发送给哪些 URL。

#### Secure
设置 Secure 表示只有 https 协议才会发送cookie。使用 HTTPS 安全协议，可以保护 Cookie 在浏览器和 Web 服务器间的传输过程中不被窃取和篡改。
Set-Cookie: test=219ffwef9w0f; Domain=taobao.com; Path=/; Secure

#### HTTPOnly
设置 HTTPOnly 表示仅当 http 和 https 协议下才发送 cookie，本地方式获取 cookie 无效。可以防止客户端脚本通过 document.cookie 等方式访问 Cookie，有助于避免 XSS 攻击。
Set-Cookie: test=219ffwef9w0f; Domain=taobao.com; Path=/; HTTPOnly
http-only: 无法被网页脚本读取，不限制传输通路的安全性
secure: 可以被网页脚本读取，只允许通过安全通路发送给服务器

#### SameSite
SameSite 可以让 Cookie 在跨站请求时不会被发送，从而可以阻止跨站请求伪造攻击（CSRF）。
Set-Cookie: name=dzxz; Expires=Wed, 30 Aug 2020 00:00:00 GMT;SameSite=none; Secure
● HTTP 接口不支持 SameSite=none。如果想加 SameSite=none 属性，那么该 Cookie 就必须同时加上 Secure 属性，表示只有在 HTTPS 协议下该 Cookie 才会被发送。
属性值
SameSite 可以有下面三种值：
● Strict 仅允许一方请求携带 Cookie，即浏览器将只发送相同站点请求的 Cookie
● Lax 允许部分第三方请求携带 Cookie
● None 无论是否跨站都会发送 Cookie
Chrome80 之前默认是 None，Chrome80 后默认是 Lax。

#### 同站和跨站
同站(same-site)/跨站(cross-site)」和第一方(first-party)/第三方(third-party)是等价的。但是与浏览器同源策略（SOP）中的「同源(same-origin)/跨域(cross-origin)」是完全不同的概念。
● 同源策略的「同源」：是指两个 URL 的协议/主机名/端口一致。
● 同站： 只要两个 URL 的 eTLD+1 相同，不需要考虑协议和端口。
● 跨站：两个 URL 的 eTLD+1 不同。
例子:
www.taobao.com 和 www.baidu.com 是跨站。
www.a.taobao.com 和 www.b.taobao.com 是同站。
a.github.io 和 b.github.io 是跨站。【github.io 是一个完整的 eTLD，其上注册的子域名都是跨站。】

#### eTLD
表示有效顶级域名，注册于 Mozilla 维护的公共后缀列表中，例如，.com、.co.uk、.github.io 等。eTLD+1 则表示，有效顶级域名 + 二级域名，例如 taobao.com 等。
顶级域名 TLD 和有效顶级域名 eTLD 的区别
严格来说: .cn 是顶级域名, .com.cn .org.cn 是 .cn 自主创造出来的顶级域名。由于这样情况非常广泛，所以严格意义的顶级域名很多场景下没法直接使用，于是就创造了一个【有效顶级域名】的概念。把自主创造出来的顶级域名注册成有效顶级域名，比如说 .github.io，.org.cn
