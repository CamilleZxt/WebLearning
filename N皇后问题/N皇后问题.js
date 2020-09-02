function solveNQueens(n) {
    var  res = [];
    const arr = [];

   for (var i = 0; i < n; i++) {
        var columns = [];
        for (var j = 0; j < n; j++) {
             columns.push('.');
        }
        arr.push(columns);
    }

    //console.log(arr);
    
    
    

    function backTracing(arr,row,n,res){
        if(row === n){
            //走到了最后，是一个可行的解
            var s = [];
            for(let i=0;i<arr.length;i++){
                s.push(arr[i].join('')); 
            }
           
            res.push(s);
            count++;
            return;
        }
        for(let col=0;col<arr[0].length;col++){
            if(isValid(arr,row,col)){
                arr[row][col] = 'Q';
                //递归
                backTracing(arr,row+1,n,res);
                //回溯
                arr[row][col] = '.';
            }
        }
        
    }

    function isValid(arr,row,col){
        for(let i=0;i<=row;i++){
            for(let j=0;j<arr[0].length;j++){
                //如果发现同列或者同对角线位置上的元素为Q,则该位置不能再放Q
                if(arr[i][j] === 'Q' && (j === col || Math.abs(i-row) === Math.abs(j-col))){
                    return false;
                }
            }
        }
        return true;
    }

    backTracing(arr,0,n,res);

    return res;


};

//测试
let count = 0;
console.log(solveNQueens(8));//打印满足的棋盘
console.log("count:"+count);//n皇后的不同的解决方案个数