function drag(selector){
    let ele = document.querySelector(selector);
    ele.onmousedown = function(evt){
        let e = evt || window.event;
        let disX = e.offsetX;
        let disY = e.offsetY;
        document.onmousemove = function(evt){
            let e = evt || window.event;
            ele.style.left = e.pageX - disX + 'px';
            ele.style.top = e.pageY - disY + 'px';
        }
        document.onmouseup = function(){
            document.onmousemove = null;
        }
        document.ondragstart = function(){
            return false;
        }
    }
}