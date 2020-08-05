/**
 * 小矩形覆盖大矩形：n个2*1的小矩形无重叠地覆盖一个2*8的大矩形，总共有多少种方法？
 */
/**
 * 
 * @param {number} n 
 */
function smallOverBig(n) {
    if (n < 0) return;
    if (n === 1) return n;
    if (n === 2) return n;
    var a = 1;
    var b = 2;
    var c;
    for (let i = 3; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }


    return c;
}

//测试
console.log(smallOverBig(4));
console.log(smallOverBig(6));