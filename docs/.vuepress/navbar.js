module.exports = {
    //这里是将config.js中的顶部导航栏配置单独提取出来，方便配置
    navbar: [
        // {
        //     //设置标签
        //     text: '首页',
        //     //设置此标签的链接
        //     link: '/readme/',
        //     //设置此导航栏的图标，请注意，导航图标只对一级标题有用，
        //     iconClass: 'icon-navbarshouye'
        // },
        // 发现
        {
            text: '发现',
            iconClass: 'icon-navbarfaxian',
            children: [
                {
                    text: '算法',
                    children: [
                        {
                            text: 'Leecode',
                            link: 'https://leetcode.cn/problemset/all/',
                        },
                        {
                            text: '代码随想录',
                            link:'https://programmercarl.com/'
                        }
                    ]
                },
                {
                    text: '文档',
                    children: [
                        {
                            text: 'MDN',
                            link:'https://developer.mozilla.org/zh-CN/'
                        },
                        {
                            text: '菜鸟教程',
                            link:'https://www.runoob.com/'
                        },
                        {
                            text: 'W3C',
                            link:'https://www.w3school.com.cn/'
                        },
                        {
                            text: 'VUE',
                            link:'https://cn.vuejs.org/'
                        },
                        {
                            text: 'React',
                            link:'https://react.docschina.org/'
                        },
                        {
                            text: "ECMAScript 6",
                            link: "https://es6.ruanyifeng.com/",
                        },
                    ]
                },
               
                
            ]
            // children: [
            //     {
            //         text: 'bug',
            //         children: [
            //             '/issue/bug.md',
            //         ]
            //     },
            //     {
            //         text: '更新日志',
            //         children: [
            //             '/issue/CHANGELOG.md'
            //         ]
            //     },
            //     {
            //         text: '运行常见错误',
            //         children: [
            //             '/issue/common.md'
            //         ]
            //     }

            // ]
        },
        // 指南
        {
            text: '指南',
            iconClass: 'icon-navbarzhinan',
            children: [
                {
                    text: "指南",
                    children: [
                        {
                            text: "掘金技术",
                            link: "https://juejin.cn/",
                        },
                        {
                            text: "CSDN",
                            link: "https://www.csdn.net/?spm=1001.2014.3001.4476",
                        },
                        {
                            text: "语雀",
                            link: "https://www.yuque.com/",
                        },
                        {
                            text: "Gitee",
                            link: "https://gitee.com/enterprises/?utm_source=pzpc",
                        },
                        {
                            text: "Gitlab",
                            link: "https://about.gitlab.com/",
                        },
                        
                    ],
                },
                
            ],
            // children: [
            //     {
            //         children: [
            //             "/home/deploy.md",
            //         ],
            //         text: "home",
            //     },
            //     {
            //         children: [
            //             "/comment/README.md",

            //             "/page/README.md",
            //         ],
            //         text: "其他配置",
            //     },
            //     {
            //         text: 'webpack和vite切换',
            //         children: [
            //             '/base/vite-webpack.md'
            //         ]
            //     }
            // ],
        },
        // 图片
        {
            text: '图片',
            iconClass: 'icon-navbartupian',
            children: [
                {
                    text: "相册",
                    children: [
                        {
                            text: 'photo',
                            link: '/photos/readme.md'
                        }
                    ],
                },
            ],
        },
        // About
        {
            text: 'About',
            iconClass: 'icon-navbarlianjie',
            link: "/about",
            // children: [
            //     {
            //         children: [
            //             {
            //                 text: 'Me',
            //                 link: "/about",
            //             }

            //         ],
            //         text: "我?",
            //     },

            // ],

        },
        // 标签
        {
            text: '标签',
            iconClass: 'icon-navbarbiaoqian',
            link: '/tag'
            // children: [
            //     {
            //         text: '标签',
            //         children: [{
            //             text: 'tag',
            //             link: '/tag'
            //         }],
            //     },
            //     {
            //         text: "时间轴",
            //         children: [
            //             {
            //                 text: 'archive',
            //                 link: '/archive'
            //             }
            //         ],
            //     },
            // ],
        },
        // Archive
        {
            text: "Archive",
            iconClass: 'icon-navbarwenjian',
            link: '/archive'
            // children: [
            //     {
            //         text: 'archive',
            //         link: '/archive'
            //     }
            // ],
        },
        // {
        //     text: '友情链接',
        //     link: '/link',
        //     iconClass: 'aurora-navbar-guide'
        // },

        // github
        {
            text: '山川',
            link: 'https://github.com/shanchuan1',
            iconClass: 'icon-navbargithub'
        }
    ]
}