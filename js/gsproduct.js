$(function () {

    $(".hd_search ul").on("click", "li", function () {
        $(this).find("span").toggleClass("mui-icon-arrowdown").toggleClass("mui-icon-arrowup")
        .parent().parent().siblings("li").find("span").removeClass("mui-icon-arrowup").addClass("mui-icon-arrowdown");
        var index = $(this).data("index");
        $(".hd_title ul").eq(index).toggleClass("hidden").siblings().addClass("hidden");
    });

    function renderShop() {
        $.ajax({
            url: 'http://' + ip + ':9090/api/getgsshop',
            dataType: 'json',
            success: function (info) {
                // console.log(info);
                $(".hd_title .title_shop").html(template("tpl2", info));
            }
        });
    }
    renderShop();

    function renderArea() {
        $.ajax({
            url: 'http://' + ip + ':9090/api/getgsshoparea',
            dataType: 'json',
            success: function (info) {
                console.log(info);
                $(".hd_title .title_area").html(template("tpl3", info));
            }
        });
    }
    renderArea();


    var shopid = 1;
    var areaid = 1;
    function render() {
        $.ajax({
            url: 'http://' + ip + ':9090/api/getgsproduct',
            dataType: 'json',
            data: {
                shopid: shopid,
                areaid: areaid
            },
            success: function (info) {
                // console.log(info);
                $(".mmb_main ul").html(template("tpl", info));
                mui('.mmb_all .mui-scroll-wrapper').scroll().scrollTo(0, 0, 100);
            }
        });
    }
    render();

    $(".title_shop").on("click", "li", function () {
        $("[data-index='0']").find("i").text($(this).text());
        $(this).find("span").removeClass("hidden").parent().siblings().find("span").addClass("hidden");
        shopid = $(this).data("id");
        render();
    });
    $(".title_area").on("click", "li", function () {
        var value = $(this).text().slice(0,2);
        $("[data-index='1']").find("i").text(value);
        $(this).find("span").removeClass("hidden").parent().siblings().find("span").addClass("hidden");
        areaid = $(this).data("id");
        render();
    });

});