$(function () {
    
    function render() {
        $.ajax({
            url: 'http://' + ip + ':9090/api/getbrandtitle',
            dataType: 'json',
            success: function (info) {
                console.log(info);
                $(".mui-table-view").html(template("tpl", info));                
            }
        });
    }
    render();



    mui(".mui-table-view").on("tap", "li", function () {
        var brandTitleid = $(this).data("id");
        location.href = "brand.html?brandtitleid=" + brandTitleid;
    });

});