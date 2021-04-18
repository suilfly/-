const {resolve} = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode:'development',
    //source-map:tiaoshi
    devtool:'source-map',
    //优化：禁止压缩，最小化
    optimization:{
        minimize:false//不压缩
    },
    entry:{
        //配置多入口
        index:resolve(__dirname,'./src/js/index.js'),
        detail:resolve(__dirname,'./src/js/detail.js'),
        collections:resolve(__dirname,'./src/js/collections.js')
    },
    //输出 打包的设置
    output:{
        //路径
        path:resolve(__dirname,'./dist'),
        //打包后的文件名
        filename:'js/[name].js'
    },
    //模块设置
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:resolve(__dirname,'./node_modules'),
                //加入预设
                query:{
                    'presets':['latest']
                }
            },
            {
                test:/\.tpl$/,
                loader:'ejs-loader'
            },
            {
                test:/\.(css|scss)$/,
                //多个loader使用use,实际的使用顺序从下至上
                use:[
                    'style-loader',
                    'css-loader',
                    {
                        loader:'postcss-loader',
                        //对postcss-loader的配置
                        options:{
                            plugins:function(){
                                return [autoprefixer('last 5 version')]
                            }
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test:/\.(png|jpg|jpeg|gif|svg|ico|eot|ttf|woff)$/i,
                //小于1024B就转码base64，否则不变
                //[name]:文件名称
                //[hash:16]:16位的hash值
                //[ext]:文件扩展名
                loader:'url-loader?limit=1024&name=img/[name]-[hash:16].[ext]',
            }

        ]
    },
    //因为html-webpack-plugin是一个插件
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:resolve(__dirname,'./src/index.html'),
            title:'新闻头条',
            chunks:['index'],//把index.js注入HTML文件
            chunksSortMode:'manual',
            excludeChunks:['node_modules'],
            hash:true,
            minify:{
                removeComments:true,//把注释去掉
                collapseWhitespace:true//把空格合并

            }
        }),
        new HtmlWebpackPlugin({
            filename:'detail.html',
            template:resolve(__dirname,'./src/detail.html'),
            title:'新闻详情',
            chunks:['detail'],//
            chunksSortMode:'manual',
            excludeChunks:['node_modules'],
            hash:true,
            minify:{
                removeComments:true,//把注释去掉
                collapseWhitespace:true//把空格合并

            }
        }),
        new HtmlWebpackPlugin({
            filename:'collections.html',
            template:resolve(__dirname,'./src/collections.html'),
            title:'我的新闻',
            chunks:['collections'],//
            chunksSortMode:'manual',
            excludeChunks:['node_modules'],
            hash:true,
            minify:{
                removeComments:true,//把注释去掉
                collapseWhitespace:true//把空格合并

            }
        })
    ],
    //开发服务器的配置
    devServer:{
        watchOptions:{
            ignored:/node_modules/
        },
        open:true,
        host:'localhost',
        port:3000
    }
}