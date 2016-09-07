onmousedown
onmousemove
ommouseup

    var oBox = document.getElementById('box'),
        disX = 0, disY = 0;
    // 容器鼠标按下事件
    oBox.onmousedown = function (e){
        var e = e || window.event;
        disX = e.clientX - this.offsetLeft;
        disY = e.clientY - this.offsetTop;
        document.onmousemove = function (e){
            var e = e || window.event;
            oBox.style.left = (e.clientX - disX) + 'px';
            oBox.style.top = (e.clientY - disY) + 'px';
        };
        document.onmouseup = function (){
            document.onmousemove = null;
            document.onmouseup = null;
        };
        return false;
    }

onmousedown return false 防止事件冒泡
onmouseup 清空监听事件            document.onmousemove = null;            document.onmouseup = null;
