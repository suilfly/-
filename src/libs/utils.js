//把模板中的{{}}替换
//template:把.tpl中的模板字符串拿到
function tplReplace(tpl,templateObject){
    //tpl()返回模板字符串，再用replace将{{}}替换
    //? 问号代表前面的字符出现0次、或1次
    //g:全局匹配而不是每次只匹配第一项
    //str.replace(regexp|substr, newSubStr|function)
    //第二个参数如果是回调函数，在匹配成功时调用
    return tpl().replace(/\{\{(.*?)\}\}/g,(node,key)=>{
      //  console.log(key,templateObject,node)
        return templateObject[key.trim()]
    });//node:{{ url }},key:花括号中的值,对应正则表达式中括号中的值（可能会有空格）
}
export { tplReplace }