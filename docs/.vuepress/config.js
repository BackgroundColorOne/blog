// 用于处理网站的基本配置信息
module.exports = {
    title: new Date(),
    description: 'Just playing around',
    themeConfig: {
        '/foo/': [
             '',  /* /foo/ */
            'one', /* /foo/one */
            'two'/* /foo/two */
        ]
    }
}