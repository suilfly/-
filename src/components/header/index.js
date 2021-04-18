//组件出口
import tpl from './index.tpl';//tpl其实是一个函数（ejs-loader做的），执行tpl(),返回tpl文件的模板字符串
import './index.scss';
import { tplReplace } from '../../libs/utils'

//export default全文只有一个,import时不需要{}接受
//export可以有多个。import时需要｛｝接受
export default {
    name:'Header',
    //把双括号中的变量生成配置项options
    tpl(options){
        const { url,title,showLeftIcon,showRightIcon } = options
        return tplReplace(tpl,{
            url,
            title,
            showLeftIcon:showLeftIcon?'block':'none',
            showRightIcon:showRightIcon?'block':'none',
        })
    }
}