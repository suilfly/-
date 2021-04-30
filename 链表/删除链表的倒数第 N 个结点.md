初步代码尝试，使用递归实现只扫描一遍
```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
/* 
 * 直接用递归的思想
 */
var removeNthFromEnd = function(head, n) {
    nextSearch(head,n);
    return head;
};
var nextSearch = function(head,n){
    if(head == null){
        return 1;
    }
    var m = nextSearch(head.next,n);
        if(m == n){
        /* 
         *当要查找的结点数等于需求的结点数时
         *执行删除操作
         */
        let temp = head;
        head = head.next;
        temp = null;
        return m+1;
    }
    else{
        return m+1;
    }
}
```
