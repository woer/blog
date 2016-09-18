<meta name="viewport" content="width=device-width, initial-scale=1.0">
几乎所有的移动端浏览器都会把宽度设置为 980px

移动端自适应方案
1.media query
2.rem


使用 rem 为单位设置各个元素的尺寸；
设定一个固定的页面宽度，所有元素可以使用 px 设定尺寸，然后缩放整个页面

设备像素比（device pixel ratio）
1.物理像素（physical pixel）
2.设备独立像素（density-independent pixel）

var dpr,rem,scale;
var docEl=document.documentElement;
var fontEl=document.createElement('style');
var metaEl=document.querySelector("meta[name='viewport']");

dpr=window.devicePixelRatio||1;
rem=docEl.clientWidth*dpr/10;
scale=1/dpr;

//设置viewport,进行缩放，达到高清效果
metaEl.setAttribute('content','width='+dpr*docEl.clientWidth+',initial-scale='+scale+',maximum-scale='+scale+',minimum-scale='+scale+',user-scalable=no');

//设置data-dpi属性，留作的css hack之用
docEl.setAttribute('data-dpr',dpr);

//动态写入样式
docEl.firstElementChild.appendChild(fontEl);
fontEl.innerHTML='html{font-size:'+rem+'px!important;}';

//给js调用，某一dpr下rem和px之间的转换函数
window.rem2px=function(v){
  v=parseFloat(v);
  return v/rem;
}
window.px2rem=function(v){
  v=parseFloat(v)
  return v/rem;
}


https://github.com/amfe/article/issues/17
