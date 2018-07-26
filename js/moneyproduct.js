$(function () {

    var productid = getSearch().productId;
    function render() {
        $.ajax({
            url: 'http://' + ip + ':9090/api/getmoneyctrlproduct',
            data: {
                productid: productid
            },
            dataType: 'json',
            success: function (info) {
                $(".pro_detail").html(template("tpl", info));
                $(".pro_Tab").html(template("tpl2", info));
                $(".pro_comment").html(template("tpl3", info));
            }
        });
    }
    render();



});