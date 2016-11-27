/*~function (pro) {
    function queryURLParameter() {
        var reg = /([^?=&#]+)=([^?=&#]+)/g,
            obj = {}
        this.replace(reg, function () {
            obj[arguments[1]] = arguments[2]
        });
        return obj;
    }

    pro.queryURLParameter = queryURLParameter;
}(String.prototype)*/


var loadingRender = (function () {
    var ary = ["background.png", "background2.png", "success_128px_1202883_easyicon.net.ico"];
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
                     }, 2000);
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


