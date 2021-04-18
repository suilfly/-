import '../assets/js/imports.js';
import Header from '../components/header'
/* import service from '../services';
console.log(service)
async function getNewsList(){
    const data = await service.getNewsList();
    console.log(data);
}
getNewsList();  */
(function(doc){

    //获取index.html中#app结点，并把Header组件挂载渲染上
    const mApp = doc.querySelector('#app');
    const init = function(){
        render()
    }
    const render = function(){
        const headerTpl = Header.tpl({
            url :'/',
            title:'新闻头条',
            showLeftIcon:false,
            showRightIcon:true
        });
        mApp.innerHTML += headerTpl;
    }
    init();
})(document);