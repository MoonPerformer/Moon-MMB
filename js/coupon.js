$(function () {
    function render() {
        $.ajax({
            url: 'http://' + ip + ':9090/api/getcoupon',
            dataType: 'json',
            success: function (info) {
                // console.log(info);
                $(".mmb_main ul").html(template("tpl", info));
            }
        });
    }
    render();
});