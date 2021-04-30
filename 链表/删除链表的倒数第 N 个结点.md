##### 算法思路
因为题目中要求只能扫描一遍就完成找到倒数第n个结点，所以想到了之前看到的使用递归删除链表结点的问题。
 - 先递归的找到尾结点
leetcodde-OC
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
    //插入一个头结点用于删除第一个节点
    var headNode = new ListNode(-1);
    headNode.next = head;
    nextSearch(headNode,n);
    head = headNode.next;
    return head;
};
var nextSearch = function(head,n){
    if(head == null){
        return 0;
    }
    var m = nextSearch(head.next,n);
        if(m == n){
        /* 
         * 当要查找的结点数等于需求的结点数时
         * 执行删除操作
         */
        let temp = head;
        head.next = head.next.next;
        temp = null;
        return m+1;
    }
    else{
        return m+1;
    }
}
```
