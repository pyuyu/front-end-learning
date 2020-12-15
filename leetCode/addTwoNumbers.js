/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    l1 = (l1);
    l2 = (l2);
    var size1 = l1.length,
        size2 = l2.length;
    maxSize = size1 > size2 ? size1 : size2
    var res = [];
    var tmp = 0;
    for (var i = 0; i < maxSize; i++) {
        l1[i] = l1[i] ||0
        l2[i] = l2[i] ||0
        tmp += l1[i] + l2[i]
        res[i] = parseInt(tmp.toString().slice(-1))
        tmp = tmp >= 10 ? 1 : 0
    }
    if(tmp){
        res.push(1)
    }


    return (res)

    
    function list2array(head) {
        if (!head) {
            return []
        }

        var result = []
        var p = head

        while (p) {
            result.push(p.val)
            p = p.next
        }

        return result
    }

    function array2list(ary) {
        if (ary.length === 0) {
            return null
        }
        var nodes = []
    
        for (var i = 0; i < ary.length; i++) {
            var node = {}
            node.val = ary[i]
            node.next = null
            nodes.push(node)
        }
    
        for (var i = 0; i < nodes.length - 1; i++) {
            nodes[i].next = nodes[i + 1]
        }
    
        return nodes[0]
    }
};
console.log(addTwoNumbers(([5]),([5])))