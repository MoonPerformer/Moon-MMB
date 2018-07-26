$(function () {
    function render() {
        $.ajax({
            url: 'http://' + ip + ':9090/api/getindexmenu',
            dataType: 'json',
            success: function (info) {
                $(".mm_nav ul").html(template("tpl", info));
                $(".mm_nav li:nth-of-type(n+9)").addClass("hidden");
                $(".mm_nav li:nth-of-type(8)").on("click", function () {
                    $(".mm_nav li:nth-of-type(n+9)").toggleClass("hidden");
                });
            }
        });
    }
    render();
    function reContent() {
        $.ajax({
            url: 'http://' + ip + ':9090/api/getmoneyctrl',
            dataType: 'json',
            success: function (info) {
                $(".mm_content").html(template("tpl2", info));
            }
        });
    }
    reContent();



});