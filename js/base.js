mui('.mui-scroll-wrapper').scroll({
  indicators: false,
});
mui('.mui-slider').slider({
  interval: 0 //自动轮播周期，若为0则不自动播放，默认为0；
});

$(".ft_tool .top").on("tap", function () {
  mui('.mmb_all .mui-scroll-wrapper').scroll().scrollTo(0, 0, 100); //100毫秒滚动到顶
});


// 获取地址栏参数
function getSearch() {
  var search = location.search;
  search = decodeURI(search);
  search = search.slice(1);
  var arr = search.split("&");
  var obj = {};
  arr.forEach(function (item) {
    var k = item.split("=")[0];
    var v = item.split("=")[1];
    obj[k] = v;
  });
  // console.log(obj);
  return obj;
}