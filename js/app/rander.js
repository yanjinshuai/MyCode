define(['app/index', 'getEl'], function(Handle, get) {
    function Rander(obj) {
        Object.assign(this, obj);
        this.index = 0;
        this.Init();
    }
    Rander.prototype.Init = function() {
        this.ranLogo();
        this.ranNav();
        this.ranSlideImg();
        this.ranBody();
        this.handle();
        this.conTime();
    }
    Rander.prototype.ranLogo = function() { //渲染logo
        this.logo.innerHTML = `<a href="javascript:;">LOGO</a>
        <div id="i"><input type="text" id="ipt" placeholder="请输入搜索内容">
            <ul id="con">
                <li></li>
            </ul>
        </div>`;
    }
    Rander.prototype.ranNav = function() {
        this.nav.innerHTML = this.navData.map(function(v) { //渲染导航
            return `<li><a href="javascript:;">${v}</a></li>`
        }).join('');
    }
    Rander.prototype.ranSlideImg = function() {
        var that = this;
        this.slideData.forEach(function(v, i) { //渲染轮播图
            that.slideImg.innerHTML += `<li class="${that.index===i?'block':''}" index="${i}"><img src="img/${v.img}" alt=""></li>`;
            that.slideName.innerHTML += `<li class="${that.index===i?'on':''}">${v.title}</li>`;
        });
    }

    Rander.prototype.ranBody = function(data) {
        var data = data || this.sinData
        this.inner.innerHTML = data.map(function(v, i) {
            return `<a href="detail.html?img=${v.img}&&title=${v.title}&&pic=${v.pic}"><dl>
            <dt><img src="img/${v.img}" alt=""></dt>
            <dd>${v.title}</dd>
            <dd>￥<span class="pic">${v.pic}</span></dd>
        </dl></a>`
        }).join('');
    }
    Rander.prototype.conTime = function() { //倒计时
        var that = this;
        setInterval(function() {
            var time = new Date(),
                endTime = new Date('2019,7,30'),
                set = (endTime - time) / 1000,
                d = parseInt(set / 60 / 60 / 24), //天
                h = parseInt(set / 60 / 60 % 24), //小时
                m = parseInt(set / 60 % 60), //分钟
                s = parseInt(set % 60) //秒
            that.spe.innerHTML = `距离特价下架还有${d}天${h}小时${m}分${s}秒`;
        }, 1000)
    }
    Rander.prototype.handle = function() {
        var nav = this.nav,
            slideImg = this.slideImg,
            inner = this.inner,
            index = this.index,
            sinData = this.sinData,
            slideName = this.slideName;
        ranBody = this.ranBody;
        new Handle({
            ipt: get.get('#ipt'), //搜索框
            con: get.get('#con'), //搜索内容
            priceScreen: get.get('#priceScreen'),
            defaul: get.get('#default'),
            nav: nav, //导航
            slideImg: slideImg, //轮播图
            slideName: slideName,
            inner: inner, //商品区
            index: index, //默认下标
            sinData: sinData,
            ranBody: ranBody,
        })
    }

    return Rander;
})