var loadingRender = (function () {
    var ary = ["11.png","12.jpg","123.png","12345.png","Angularjs.png","background.png","background2.png","blog.jpg","dui.PNG","for-you.png","Git.png","Gulp.png","haitao.jpg","html5.png","Iamskilled.png","IM-LIZHICHENG.png","jquery.png","js.png","mingchejie.jpg","MQHAUTO.jpg","music.svg","my-name.png","my.png","node.png","one-job.png","pao.jpg","pc-resule.jpg","QHAUTO.jpg","qinghong.png","React.png","shanshuitang.png","success_128px_1202883_easyicon.net.ico","swiper.png","tiao1.png","up.png","Webpack.png","wuhui.PNG","year.png","ying.PNG"];
    var $loading = $('#loading'),
        $progressEm = $loading.find('.progressEm');
    var step = 0,
        total = ary.length;
    return {
        init: function () {
            $loading.css('display', 'block')
            $.each(ary, function (index, item) {
                var oImg = new Image;
                oImg.src = 'img/' + item;
                oImg.onload = function () {
                    step++;
                    $progressEm.css('width', step / total * 100 + '%');
                    oImg = null;
                     if (step === total) {
                     if (page === 0) return;
                     window.setTimeout(function () {
                     $loading.css('display', 'none')
                     pageRender.init();
                     }, 1500);
                     }
                }

            })
        }
    }
})();

/*page */
var pageRender = (function () {
    var $page = $('#page');
    return {
        init: function () {
            $page.css('display', 'block');
        }
    }
})()

loadingRender.init();


