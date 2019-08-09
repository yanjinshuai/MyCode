define(['setTime'], function(SetTime) {
    function Handle(obj) {
        Object.assign(this, obj);
        this.sData = null
        this.Init();
    }
    Handle.prototype.Init = function() {
        this.scrollEvent();
        this.setTime();
        this.searchInner();
        this.ScreenClick();
    }
    Handle.prototype.scrollEvent = function() {
        var that = this;
        window.addEventListener('scroll', function(e) {
            var e = e || window.event;
            var m = document.documentElement.scrollTop;
            var n = that.nav.offsetTop;
            if (m > n) {
                that.nav.classList.add('active');
            } else {
                that.nav.classList.remove('active');
            }
        })
    }
    Handle.prototype.searchInner = function() {
        var that = this;
        this.ipt.addEventListener('input', function() {
            var val = that.ipt.value
            if (val.length > 0) {
                that.sData = that.sinData.filter(function(v) {
                    return v.title.includes(val) || v.pic.includes(val)
                });
                if (that.sData.length != 0) {
                    that.con.innerHTML = "";
                    that.sData.forEach(function(v, i) {
                        that.con.innerHTML += `<li index="${i}">${v.title}</li>`
                    });
                    that.con.style.display = 'block';
                    that.conClick(that.sData);
                }
            } else {
                that.con.style.display = 'none';
                that.ranBody();
            }
        })
    }

    Handle.prototype.conClick = function(data) {
        var that = this;
        that.con.addEventListener('click', function(e) {
            var e = e || window.event,
                tar = e.target || e.srcElement;
            if (tar.nodeName === 'LI') {
                var n = tar.getAttribute('index');
                console.log(tar)
                that.inner.innerHTML = data.map(function(v) {
                    return `<dl>
                    <dt><img src="img/${v.img}" alt=""></dt>
                    <dd>${v.title}</dd>
                    <dd>￥<span class="pic">${v.pic}</span></dd>
                </dl>`;
                }).join('');
            }
        })
    }

    Handle.prototype.ScreenClick = function() {
        var that = this;
        this.priceScreen.addEventListener('click', function() {
            var data = that.sinData.concat([]);
            if (this.classList.contains('priceScreen')) {
                data.sort(function(a, b) {
                    return b.pic - a.pic
                })
                that.ranBody(data);
                this.classList.remove('priceScreen')
            } else {
                data.sort(function(a, b) {
                    return a.pic - b.pic
                })
                that.ranBody(data);
                this.classList.add('priceScreen')
            }
        });
        this.defaul.addEventListener('click', function() {
            that.ranBody();
        })
    }
    Handle.prototype.setTime = function() { //轮播组件
        var index = this.index;
        var slideImg = this.slideImg;
        var slideName = this.slideName;
        new SetTime({
            index: index, //默认下标
            slideImg: slideImg, //轮播元素
            slideName: slideName,
        })
    }

    return Handle;
})