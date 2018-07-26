$(function () {
    var page = 1;
    function render(callback) {
        $.ajax({
            url: 'http://' + ip + ':9090/api/getinlanddiscount',
            dataType: 'json',
            success: function (info) {
                setTimeout(function () {
                    callback(info);
                }, 600);
            }
        });
    }
    // 下拉刷新与上拉加载
    mui.init({
        pullRefresh: {
            container: ".mui-scroll-wrapper", //下拉刷新容器标识，querySelector能定位的css选择器均可，比如：id、.class等
            down: {
                auto: true, //可选,默认false.首次加载自动下拉刷新一次
                callback: function () {
                    page = 1;
                    render(function (info) {
                        info.result = info.result.filter(function(item, index, arr){
                            return index < 4*page && index >= 4*(page - 1); 
                        })
                        $(".mmb_main ul").html(template("tpl", info));
                        mui(".mui-scroll-wrapper").pullRefresh().endPulldownToRefresh();
                        mui(".mui-scroll-wrapper").pullRefresh().refresh(true);
                    });
                }
            },
            up: {
                callback: function () {
                    page++;
                    render(function (info) {
                        var dataLength = info.result.length;
                        info.result = info.result.filter(function(item, index, arr){
                            return index < 4*page && index >= 4*(page - 1); 
                        })
                        $(".mmb_main ul").append(template("tpl", info));
                        mui(".mui-scroll-wrapper").pullRefresh().endPullupToRefresh(4*page >= dataLength);
                    });
                }
            }
        }
    });

    $(".mmb_main ul").on("tap", "li", function () {
        var id = $(this).data("id");
        location.href = "discount.html?productid=" + id;
    });

 
});