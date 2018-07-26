$(function () {
    function getCate() {
        var id = getSearch().categoryid;
        $.ajax({
            url: "http://"+ ip +":9090/api/getcategorybyid",
            data: {categoryid: id},
            dataType: "json",
            success: function (info) {
                $(".pro_nav").append(template("tpl", info));
            }
        });
    }
    getCate();

    var pageNum = 0;
    var pageid = getSearch().pageid;
    var categoryid = getSearch().categoryid;
    var category = getSearch().category;
    function render() {
        $.ajax({
            url: "http://"+ ip +":9090/api/getproductlist",
            data: {
                pageid: pageid,
                categoryid: categoryid
            },
            dataType: "json",
            success: function (info) {
                pageNum = Math.ceil(info.totalCount / info.pagesize);
                info.pageid = pageid;
                info.pageNum = pageNum;
                $(".page_m select").html(template("tpl3", info));
                $(".pro_content ul").html(template("tpl2", info));
            }
        });
    }
    render();

    // 分页功能
    $(".prev").on("click", function () {
        if (pageid > 1 && pageid <= pageNum) {
            pageid--;
            location.href = "productList.html?&pageid=" + pageid + "&categoryid=" + categoryid + "&category=" + category;
        } else {
            return;
        }
    });
    $(".next").on("click", function () {
        if (pageid >= 1 && pageid < pageNum) {
            pageid++;
            location.href = "productList.html?&pageid=" + pageid + "&categoryid=" + categoryid + "&category=" + category;
        } else {
            return;
        }
    });
    $("#page").on("change", function () {
        pageid = $(this).val();
        location.href = "productList.html?&pageid=" + pageid + "&categoryid=" + categoryid + "&category=" + category;
    });


    $(".pro_content ul").on("click", "li", function () {
        var productId = $(this).data("id");
        location.href = "bijia.html?productId=" + productId;
    });


});