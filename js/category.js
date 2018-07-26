$(function () {
    function render() {
        $.ajax({
            url: 'http://' + ip + ':9090/api/getcategorytitle',
            dataType: 'json',
            success: function (info) {
                $(".mui-table-view").html(template("tpl", info));                
            }
        });
    }
    render();

    mui(".mui-table-view").on("tap", ".btn_show", function () {
        var id = $(this).data("id");
        $.ajax({
            url: 'http://' + ip + ':9090/api/getcategory',
            data: {titleid: id},
            dataType: 'json',
            success: function (info) {
                // console.log(info);
                $(".mui-collapse-content").html(template("tpl2", info));
            }
        });
    });
    mui(".mui-table-view").on("tap", ".btn_detail", function () {
        var categoryid = $(this).data("id");
        var category = $(this).text();
        location.href = "productList.html?pageid=1&categoryid=" + categoryid + "&category=" + category;
    });
});