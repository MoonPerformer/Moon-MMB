$(function () {

    function render() {
        $.ajax({
            url: 'http://' + ip + ':9090/api/getsitenav',
            dataType: 'json',
            success: function (info) {
                console.log(info);
                $(".mc_nav").html(template("tpl", info));
            }
        });
    }
    render();



});