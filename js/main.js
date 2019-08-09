require.config({
    baseUrl: 'js',
    paths: {
        sinData: 'mock/sinData', //商品数据
        navData: 'mock/navData', //导航数据
        slideData: 'mock/slideData', //轮播图数据
        index: 'app/index', //操作JS
        rander: 'app/rander', //渲染JS
        getEl: 'conmon/getEl', //获取DOM元素
        setTime: 'libs/setTime' //轮播图组件
    }
})
require(['getEl', 'sinData', 'navData', 'slideData', 'rander'], function(get, sinData, navData, slideData, Rander) {
    new Rander({
        logo: get.get('#logo'),
        nav: get.get('#nav'),
        slideImg: get.get('#slideImg'),
        slideName: get.get('#slideName'),
        inner: get.get('#inner'),
        spe: get.get('.spe'),
        sinData: sinData,
        navData: navData,
        slideData: slideData,
    })
})