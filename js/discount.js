$(function () {

    var productid = getSearch().productid;
    function render() {
        $.ajax({
            url: 'http://' + ip + ':9090/api/getdiscountproduct',
            data: {
                productid: productid
            },
            dataType: 'json',
            success: function (info) {
                // console.log(info);
                $(".pro_detail").html(template("tpl", info));
                $(".pro_comment").html(template("tpl3", info));
            }
        });
    }
    render();



});