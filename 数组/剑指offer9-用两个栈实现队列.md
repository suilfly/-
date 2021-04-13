```javascript
var CQueue = function() {
    this.stack_in = [];
    this.stack_out = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.stack_in.push(value);
    //将stack_in中的元素放入到stack_out中
    let stack_out_len = this.stack_out.length;
    this.stack_in.forEach(value=>{
        let v = this.stack_in.pop();
        this.stack_out.splice(stack_out_len,0,v);
    })
    return ;
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if(this.stack_out.length == 0){
        //负责出队的栈为空
        if(this.stack_in.length == 0){
            //负责入栈的队列也为空
            return -1;
        }
        
    }
    else{
         let num = this.stack_out.splice(0,1);
            return num[0];
    }

};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */

```
