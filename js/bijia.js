$(function () {
    var productId = getSearch().productId;
    function render() {
        $.ajax({
            url: 'http://' + ip + ':9090/api/getproduct',
            data: {productid: productId},
            dataType: 'json',
            success: function (info) {
                $(".pro_pro").html(template("tpl2", info));
                $(".pro_data").html(template("tpl3", info));
                var arr = info.result[0].productName.split(" ");
                var newName = arr[0];
                var categoryid = info.result[0].categoryId;
                $.ajax({
                    url: "http://"+ ip +":9090/api/getcategorybyid",
                    data: {categoryid: categoryid},
                    dataType: "json",
                    success: function (info) {
                        info.newName = newName;
                        $(".pro_nav").append(template("tpl", info));
                    }
                });
            }
        });
    }
    render();

    function renderCom() {
        $.ajax({
            url: 'http://' + ip + ':9090/api/getproductcom',
            data: {productid: productId},
            dataType: 'json',
            success: function (info) {
                $(".com_content ul").html(template("tpl4", info));
            }
        });
    }
    renderCom();




});