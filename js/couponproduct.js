$(function () {
    var couponid = getSearch().couponid

    function render() {
        $.ajax({
            url: 'http://' + ip + ':9090/api/getcouponproduct',
            dataType: 'json',
            data: {
                couponid: couponid
            },
            success: function (info) {
                console.log(info);
                $(".mmb_main ul").html(template("tpl", info));
                $(".mui-slider-group").html(template("tpl2", info));
            }
        });
    }
    render();

    $(".mmb_main ul").on("click", "li", function () {
        var index = $(this).data("id");
        $(".slider_box").show();
        mui('.mui-slider').slider().gotoItem(index);
        mui('.mui-slider').slider({
            interval: 0 //自动轮播周期，若为0则不自动播放，默认为0；
        });
    });
    $(".slider_box").on("click", function () {
        $(".slider_box").hide();
    });




});