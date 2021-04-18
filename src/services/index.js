import $ from 'jquery';
import {BASE_URL} from '../config';
console.log(BASE_URL)
class Service {
    //type:获取列表的类型,count:获取几条数据
    getNewsList(type,count){
        return new Promise((resolve,reject)=>{
            $.ajax({
                type:'post',
                url:BASE_URL+'juhe/getNewsList',
                data:{
                    field:type
                },
                success(data){
                    resolve(data);
                },
                error(err){
                    reject(err)
                }
            })
        })
    }
}
export default new Service();