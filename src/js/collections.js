import Header from '../components/header';
import '../assets/js/imports';


(function(doc){

    const mApp = doc.querySelector('#app');
    function init(){
        render()
    }
    function render(){
       const headerTpl = Header.tpl({
            url:'/',
            title:'我的新闻',
            showLeftIcon :true,
            showRightIcon:false
        });
        mApp.innerHTML += headerTpl;
    }
    init();
})(document);