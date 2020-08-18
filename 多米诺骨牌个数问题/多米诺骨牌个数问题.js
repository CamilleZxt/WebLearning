/**
 * 字节跳动笔试
 * n张牌，每个都有各自的长宽，长为hi，宽为wi的骨牌
 * 摆放的规则是后面的牌长度和宽度必须大于前面的阿牌
 * 请问用n张牌最多能选多少张组成一个最长牌阵？
 */

var arr = [[5, 5], [1, 4], [2, 3], [3, 1], [4, 6], [6, 2], [7, 7], [8, 10]]
arr.sort((a, b) => a[0] - b[0]);
// console.log(arr.sort((a, b) => a[0] - b[0]))
var max = 0;
for (let i = 0; i < arr.length - 1; i++) {
    let start = i;
    let end = i + 1;
    let count = 1;
    while (end < arr.length) {
        if (arr[start][1] < arr[end][1]) {
            start = end;
            end++;
            count++;
        } else {
            end++;
        }
    }
    // console.log('count：' + count);

    if (max < count) {
        max = count;
    }
}

console.log("最多能选" + max + "张组成一个最长牌阵");

