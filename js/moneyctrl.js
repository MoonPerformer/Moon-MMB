$(function () {

    var pageid = getSearch().pageid || 1;

    function render() {
        $.ajax({
            url: 'http://' + ip + ':9090/api/getmoneyctrl',
            data: {
                pageid: pageid - 1
            },
            dataType: 'json',
            success: function (info) {
                pageNum = Math.ceil(info.totalCount / info.pagesize);
                info.pageid = pageid;
                info.pageNum = pageNum;
                $(".page_m select").html(template("tpl3", info));
                $(".mm_content ul").html(template("tpl", info));
            }
        });
    }
    render();

    // 分页功能
    $(".prev").on("click", function () {
        if (pageid > 1 && pageid <= pageNum) {
            pageid--;
            location.href = "moneyctrl.html?&pageid=" + pageid;
        } else {
            return;
        }
    });
    $(".next").on("click", function () {
        if (pageid >= 1 && pageid < pageNum) {
            pageid++;
            location.href = "moneyctrl.html?&pageid=" + pageid;
        } else {
            return;
        }
    });
    $("#page").on("change", function () {
        pageid = $(this).val();
        location.href = "moneyctrl.html?&pageid=" + pageid;
    });



});