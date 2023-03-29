function load2D_bg() {
    var background = document.getElementById("background");
    var range = 40;
    var calcValue = function calcValue(a, b) {
        return (a / b * range - range / 2).toFixed(1);
    };
    var timeout = void 0;
    document.addEventListener('mousemove',
        function (_ref) {
            var x = _ref.x,
                y = _ref.y;
            if (timeout) {
                window.cancelAnimationFrame(timeout);
            }
            timeout = window.requestAnimationFrame(function () {
                var yValue = calcValue(y, window.innerHeight);
                var xValue = calcValue(x, window.innerWidth);


                background.style.backgroundPositionX = xValue * 1 - 200 + "px ";
                background.style.backgroundPositionY = (-yValue * 0.75 - 50) + "px";
            })
        }, false);

}

function load2D_bg2() {
    var background = document.getElementById("background2");
    var range = 40;
    var calcValue = function calcValue(a, b) {
        return (a / b * range - range / 2).toFixed(1);
    };
    var timeout = void 0;
    document.addEventListener('mousemove',
        function (_ref) {
            var x = _ref.x,
                y = _ref.y;
            if (timeout) {
                window.cancelAnimationFrame(timeout);
            }
            timeout = window.requestAnimationFrame(function () {
                var yValue = calcValue(y, window.innerHeight);
                var xValue = calcValue(x, window.innerWidth);

                background.style.backgroundPositionX = xValue * 1 - 200 + "px ";
                background.style.backgroundPositionY = (-yValue * 0.75 - 50) + "px";
            })
        }, false);

}

function load2D_bg2_2() {
    var background = document.getElementById("background2");
    document.onmousemove = function () {
        console.log(window.outerHeight);
        background.style.opacity = 1 - (getMousePos() / window.outerHeight * 2.5);
    }
}

function getMousePos(event) {
    var e = event || window.event;
    var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
    var y = e.pageY || e.clientY + scrollY;
    return y;
}

function load2D_lihui() {
    var background = document.getElementById("lihui");
    var range = 40;
    var calcValue = function calcValue(a, b) {
        return (a / b * range - range / 2).toFixed(1);
    };
    var timeout = void 0;
    document.addEventListener('mousemove',
        function (_ref) {
            var x = _ref.x,
                y = _ref.y;
            if (timeout) {
                window.cancelAnimationFrame(timeout);
            }
            timeout = window.requestAnimationFrame(function () {
                var xValue = calcValue(x, window.innerWidth);

                background.style.left = xValue * 0.7 - 100 + "px";

            })
        }, false);

}

function load2D_yinghua() {
    var background = document.getElementById("yinghua");
    var range = 40;
    var calcValue = function calcValue(a, b) {
        return (a / b * range - range / 2).toFixed(1);
    };
    var timeout = void 0;
    document.addEventListener('mousemove',
        function (_ref) {
            var x = _ref.x,
                y = _ref.y;
            if (timeout) {
                window.cancelAnimationFrame(timeout);
            }
            timeout = window.requestAnimationFrame(function () {
                var yValue = calcValue(y, window.innerHeight);
                var xValue = calcValue(x, window.innerWidth);
                background.style.backgroundPositionX = xValue * 1.5 - 200 + "px ";
                background.style.backgroundPositionY = (-yValue * 1 - 50) + "px";
            })
        }, false);

}
var i = 0;

function aboutMe() {
    var slogan = document.getElementById("slogan");
    var slogan2 = document.getElementById("slogan2");
    if (i == 0) {
        i = 1;
        slogan.style.height = "200px";
        slogan2.innerHTML = "👋 你好啊,我是lawliet<br/>\
                           \n👀 我对体系结构和数字IC设计感兴趣<br/>\
                           \n🌱我现在在从事AI芯片的开发<br/>\
                           \n💞️我在寻找小伙伴合作AI和数字IC结合方向的论文<br/>\
                           \n📫请通过我的知乎和我取得联系<br/>";

    } else {
        i = 0;
        slogan.style.height = "50px";
        slogan2.innerHTML = "须知少时凌云志，曾许人间第一流";
    }

}
