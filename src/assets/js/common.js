//解决多指错误,利用事件冒泡，进行事件委托
document.documentElement.addEventListener('touchmove',function(e){
    if(e.touches.length > 1)
        e.preventDefault();//在移动端手指操作时会默认触发一些行为，比如：滚动，缩放,所以按需阻止
},false);
//移动端rem适配
document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px';//这里以iphone6为基础，其宽度为375px,设置根字体为100px，0.16rem=16px
console.log(122)