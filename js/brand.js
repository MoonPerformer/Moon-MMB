$(function () {
    var brandtitleid = getSearch().brandtitleid;
    function render() {
        $.ajax({
            url: 'http://' + ip + ':9090/api/getbrand',
            data: {brandtitleid: brandtitleid},
            dataType: 'json',
            success: function (info) {
                // console.log(info);
                $(".br_top ul").html(template("tpl", info));                
            }
        });
    }
    render();

    function renderSale() {
        $.ajax({
            url: 'http://' + ip + ':9090/api/getbrandproductlist',
            data: {
                brandtitleid: brandtitleid,
                pagesize: 4
            },
            dataType: 'json',
            success: function (info) {
                // console.log(info);   
                $(".br_sale ul").html(template("tpl2", info));                
            }
        });
    }
    renderSale();

    function renderCom() {
        $.ajax({
            url: 'http://' + ip + ':9090/api/getproductcom',
            data: {
                productid: 0
            },
            dataType: 'json',
            success: function (info) {
                // console.log(info);
                $(".br_comment ul").html(template("tpl3", info));                
            }
        });
    }
    renderCom();



});