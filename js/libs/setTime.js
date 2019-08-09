define(function() {
    function SetTime(obj) {
        var def = {
            i: 0,
            slideImg: null,
            slideName: null,
        }
        Object.assign(this, def, obj)
        this.index = this.i;
        this.slideImg = this.slideImg;
        this.slideName = this.slideName;
        this.timer = null;
        this.Init();
    }
    SetTime.prototype.Init = function() {
        this.set();
    }
    SetTime.prototype.set = function() {
        var that = this;
        this.timer = setInterval(function() {
            if (that.index >= that.slideImg.children.length) {
                that.index = 0;
            }
            if (that.index >= that.slideName.children.length) {
                that.index = 0;
            }
            [...that.slideImg.children].forEach(function(v) {
                v.classList.remove('block');
            });
            [...that.slideName.children].forEach(function(v) {
                v.classList.remove('on');
            });
            that.slideImg.children[that.index].classList.add('block');
            that.slideName.children[that.index].classList.add('on');
            that.index += 1;
        }, 1000)
    }
    return SetTime;
})