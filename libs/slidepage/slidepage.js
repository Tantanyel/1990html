;
(function ($) {
    $.fn.slidepage = function (pimp, center, layer) {
        var pag = 0;
        var maxp = $(layer).length - 1;
        var stopit = false;

        var myElement = document.getElementById('center');

        function frameHeight() {
            var frameWidth;
            var frameHeight;
            if (self.innerWidth) {
                frameWidth = self.innerWidth;
                frameHeight = self.innerHeight;
            } else if (document.documentElement && document.documentElement.clientWidth) {
                frameWidth = document.documentElement.clientWidth;
                frameHeight = document.documentElement.clientHeight;
            } else if (document.body) {
                frameWidth = document.body.clientWidth;
                frameHeight = document.body.clientHeight;
            } else {
                frameWidth = 640;
                frameHeight = 480;
            }
            return frameHeight;
        }

        function activepimp() {
            var ch = '.punct > a:nth-child(' + (pag+1) + ')';
            $('.punct > a').removeClass("activepimp");
            $(ch).addClass("activepimp");
        }


        var elem = document.getElementById('center');

        if (elem.addEventListener) {
            if ('onwheel' in document) {
                elem.addEventListener("wheel", page);
            } else if ('onmousewheel' in document) {
                elem.addEventListener("mousewheel", page);
            } else {
                elem.addEventListener("MozMousePixelScroll", page);
            }
        } else {
            elem.attachEvent("onmousewheel", page);
        }

        function raz(){
            var num = pag+1;
            var raz = 0;
            for (var i = 1; i < num; i++) {
               raz = raz + $(".layer"+i).outerHeight();
           }
           return raz;
       }


       function page(e) {
        e.preventDefault();
        var delta = e.deltaY || e.detail || e.wheelDelta;
        if (!stopit) {
            if (delta>0) {
                upp();
            }else{
                downp();
            }
        }
    }

    function downp(){
        if (pag > 0) {
            pag--;
            activepimp()
            stopit = true;
            $(".layer").removeClass('active');
            $(".layer"+(pag+1)).addClass('active');
            $(center).animate({
                scrollTop: raz()
            }, 600, 'swing', function () {
                stopit = false;
            });
        }
    }
    function upp(){
        if (pag < maxp) {
            pag++;
            activepimp()
            stopit = true;
            $(".layer").removeClass('active');
            $(".layer"+(pag+1)).addClass('active');
            $(center).animate({
                scrollTop: raz()
            }, 600, 'swing', function () {
                stopit = false;
            });
        }
    }
}
}(jQuery, document));