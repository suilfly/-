import Header from '../components/header';
import '../assets/js/imports'
(function(doc){
//立即执行函数，形成闭包
    //获取index.html中#app结点，并把Header组件挂载渲染上
    const mApp = doc.querySelector('#app');
    const init = function(){
        render()
    }
    const render = function(){
        const headerTpl = Header.tpl({
            url :'/',
            title:'新闻详情',
            showLeftIcon:true,
            showRightIcon:false
        });
        mApp.innerHTML += headerTpl;
    }
    init();
})(document);