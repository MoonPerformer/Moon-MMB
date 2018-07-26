
$(function () {

    function renderTitle() {
        $.ajax({
            url: 'http://' + ip + ':9090/api/getbaicaijiatitle',
            dataType: 'json',
            success: function (info) {
                $(".title_scr").html(template("tpl", info));
            }
        });
    }
    renderTitle();

    var titleid = 0;
    $(".title_scr").on("click", "a", function () {
        titleid = $(this).data("id");
        render();
        mui('.mmb_all .mui-scroll-wrapper').scroll().scrollTo(0, 0, 100); //100毫秒滚动到顶
    });



    function render() {
        $.ajax({
            url: 'http://' + ip + ':9090/api/getbaicaijiaproduct',
            data: {
                titleid: titleid
            },
            dataType: 'json',
            success: function (info) {
                $(".mmb_main ul").html(template("tpl2", info));
            }
        });
    }
    render();




    mui('.hd_search .mui-scroll-wrapper').scroll({
        indicators: false,
        scrollY: false, //是否竖向滚动
        scrollX: true //是否横向滚动
    });
});